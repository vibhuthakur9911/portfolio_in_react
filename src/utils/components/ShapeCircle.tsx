import React, { useEffect, useState } from 'react';

interface Shape {
  top: number;
  left: number;
  size: number;
}

const ShapeCircle: React.FC<{ numShapes: number }> = ({ numShapes }) => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    generateShapes();
  }, [numShapes]);

  const generateShapes = () => {
    const newShapes: Shape[] = [];
    for (let i = 0; i < numShapes; i++) {
      const top = Math.floor(Math.random() * window.innerHeight);
      const left = Math.floor(Math.random() * window.innerWidth);
      const size = Math.floor(Math.random() * 100) + 50; // Adjust the range as needed
      const shape: Shape = {
        top,
        left,
        size,
      };
      newShapes.push(shape);
    }
    setShapes(newShapes);
  };

  return (
    <div className="shapes-container">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="bg-shap"
          style={{
            top: `${shape.top}px`,
            left: `${shape.left}px`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShapeCircle;
