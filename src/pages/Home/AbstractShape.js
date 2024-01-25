import { forwardRef } from "react";

const AbstractShape = forwardRef(
  ({ posX, posY, rotation, width, height, src }, ref) => {
    ref.posX = posX;
    ref.posY = posY;
    ref.rotation = rotation;
    ref.width = width;
    ref.height = height;
    ref.src = src;

    const shapeStyle = {
      top: `${posY}px`,
      left: `${posX}px`,
      transform: `rotate(${rotation}deg)`,
      transition: 'top 2s ease, left 2s ease',
      width: `${width}px`,
      height: height ? `${height}px` : "auto",
    };

    return (
      <img
        style={shapeStyle}
        ref={ref}
        src={src}
        alt="shape"
        className="abstract-shape"
      />
    );
  }
);

export default AbstractShape;
