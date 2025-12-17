import React, { Suspense, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';

function BrainSection() {
  const [loading, setLoading] = useState(true);

  return (
    <Container fluid className="home-about-section" style={{ 
      minHeight: "600px", 
      position: "relative", 
      paddingTop: "50px", 
      paddingBottom: "50px",
      backgroundImage: 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))'
    }}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 style={{ fontSize: "2.6em", marginBottom: "30px", color: "white" }}>
              THIS IS MY <strong className="purple">BRAIN!</strong>
            </h1>
            <p style={{ color: "white", marginBottom: "40px", fontSize: "0.9em", fontStyle: "italic" }}>
              *whisper* slowly, don't give me brain damage..
            </p>
          </Col>
        </Row>
        
        <div className="brain-visual-container" style={{ 
          height: "600px", 
          width: "100%", 
          background: "rgba(0,0,0,0.2)", 
          borderRadius: "20px", 
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(199, 112, 240, 0.2)"
        }}>
          {loading && (
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#c770f0",
              fontSize: "1.5em"
            }}>
              Loading Simulation...
            </div>
          )}
          
          <Suspense fallback={null}>
            {/* 
              Container stretched to 120% to crop out the "Built with Spline" logo 
              positioned in the bottom right corner.
            */}
            <div style={{ 
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '120%', 
              height: '120%' 
            }}>
              <Spline 
                scene="https://prod.spline.design/u54JF5kAiBil9ZMU/scene.splinecode" 
                onLoad={() => setLoading(false)}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Suspense>
        </div>
      </Container>
    </Container>
  );
}

export default BrainSection;
