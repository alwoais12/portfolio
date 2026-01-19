// Dimensional Rift - Main Export
// Lazy load the main component for optimal performance

import { lazy } from 'react';

// Lazy-loaded main component
const DimensionalRift = lazy(() => import('./DimensionalRift'));

// Export individual components for advanced usage
export { default as CosmicUniverse } from './CosmicUniverse';
export { default as RiftMask } from './RiftMask';
export { default as GravitationalLens, GravitationalLensEffect } from './GravitationalShader';

// Default export
export default DimensionalRift;
