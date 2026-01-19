import { forwardRef, useMemo } from 'react';
import { Effect } from 'postprocessing';
import { Uniform, Vector2 } from 'three';

// Custom gravitational lens distortion shader
const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec2 center;
  uniform float radius;
  uniform float distortionStrength;
  
  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 centeredUV = uv - center;
    float dist = length(centeredUV);
    
    // Calculate distortion based on distance from center
    float distortion = 0.0;
    
    if (dist < radius) {
      // Inside the influence radius
      float normalizedDist = dist / radius;
      
      // Gravitational lens formula - bends light around the center
      float bendFactor = 1.0 - pow(normalizedDist, 2.0);
      bendFactor *= distortionStrength;
      
      // Add time-based pulsing
      float pulse = sin(time * 2.0) * 0.1 + 1.0;
      bendFactor *= pulse;
      
      // Calculate distorted UV
      vec2 direction = normalize(centeredUV);
      vec2 distortedUV = uv + direction * bendFactor * (1.0 - normalizedDist);
      
      // Chromatic aberration near the edge
      float aberration = bendFactor * 0.02;
      
      vec4 colorR = texture2D(inputBuffer, distortedUV + direction * aberration);
      vec4 colorG = texture2D(inputBuffer, distortedUV);
      vec4 colorB = texture2D(inputBuffer, distortedUV - direction * aberration);
      
      outputColor = vec4(colorR.r, colorG.g, colorB.b, inputColor.a);
      
      // Add edge glow
      float edgeGlow = smoothstep(0.7, 1.0, normalizedDist) * intensity;
      outputColor.rgb += vec3(0.78, 0.44, 0.94) * edgeGlow * 0.5;
      
    } else {
      // Outside influence - slight wave distortion
      float wave = sin(dist * 20.0 - time * 3.0) * 0.002 * intensity;
      vec2 waveUV = uv + vec2(wave, wave);
      outputColor = texture2D(inputBuffer, waveUV);
    }
    
    // Vignette effect
    float vignette = 1.0 - smoothstep(0.3, 1.0, dist);
    outputColor.rgb *= 0.7 + vignette * 0.3;
  }
`;

// Custom effect class for gravitational distortion
class GravitationalLensEffect extends Effect {
  constructor({
    intensity = 1.0,
    center = new Vector2(0.5, 0.5),
    radius = 0.4,
    distortionStrength = 0.1
  } = {}) {
    super('GravitationalLensEffect', fragmentShader, {
      uniforms: new Map([
        ['time', new Uniform(0)],
        ['intensity', new Uniform(intensity)],
        ['center', new Uniform(center)],
        ['radius', new Uniform(radius)],
        ['distortionStrength', new Uniform(distortionStrength)]
      ])
    });
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get('time').value += deltaTime;
  }
}

// React component wrapper
const GravitationalLens = forwardRef(({ 
  intensity = 1.0, 
  center = [0.5, 0.5], 
  radius = 0.4,
  distortionStrength = 0.1 
}, ref) => {
  const effect = useMemo(() => {
    return new GravitationalLensEffect({
      intensity,
      center: new Vector2(center[0], center[1]),
      radius,
      distortionStrength
    });
  }, [intensity, center, radius, distortionStrength]);

  return <primitive ref={ref} object={effect} dispose={null} />;
});

GravitationalLens.displayName = 'GravitationalLens';

export { GravitationalLensEffect };
export default GravitationalLens;
