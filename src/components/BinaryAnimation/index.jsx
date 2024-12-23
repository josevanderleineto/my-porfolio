import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BinaryAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate the font size based on the screen width
    const fontSize = Math.min(Math.max(window.innerWidth / 30, 12), 24); // Minimum 12px, maximum 24px
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);
    canvas.style.background = 'linear-gradient(to right, #0e2342, #9CA3AF)';
    
    const draw = () => {
      ctx.fillStyle = 'rgba(1, 11, 25, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = ' #7FFFD4'; // Color of the binary code
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '0' : '1';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

// Estilo do canvas
const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default BinaryAnimation;
