import React, { useEffect, useRef } from "react";

import polygon from "assets/shapes/polygon.png";
import ellipse from "assets/shapes/ellipse.png";
import skewedRectangle from "assets/shapes/skewed_rectangle.png";
import cylinder from "assets/shapes/cylinder.png";
import AbstractShape from "./AbstractShape";

export default function AbstractShapes() {
  const moveShape = (shape, verticalSpeed, horizontalSpeed, rotationSpeed) => {
    const style = shape.current.style;

    const originalX = style.top;
    // add new calculated position to element's first position
    style.top = `${shape.posY + window.scrollY * verticalSpeed}px`;
    style.left = `${shape.posX + window.scrollY * horizontalSpeed}px`;

    if (rotationSpeed !== undefined) {
      const currentRotation = parseInt(
        style.transform.replace("rotate(", "").replace("deg)", "")
      );

      if (style.top > originalX) {
        // rotate clockwise
        style.transform = `rotate(${
          currentRotation + window.scrollY * rotationSpeed
        }deg)`;
      } else {
        // rotate counter clockwise
        style.transform = `rotate(${
          currentRotation - window.scrollY * rotationSpeed
        }deg)`;
      }
    }
  };

  const shapeOne = useRef(null);
  const shapeTwo = useRef(null);
  const shapeThree = useRef(null);
  const shapeFour = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      moveShape(shapeOne, 0.8, 1.1, 0.005);
      moveShape(shapeTwo, 1.2, -0.2);
      moveShape(shapeThree, 2.2, 0.85, 0.005);
      moveShape(shapeFour, -0.5, -0.6, 0.005);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="abstract-shapes" data-aos="flip-down">
      <AbstractShape
        posX={100}
        posY={100}
        rotation={15}
        width={100}
        src={polygon}
        ref={shapeOne}
      />
      <AbstractShape
        posX={300}
        posY={500}
        rotation={45}
        width={75}
        src={ellipse}
        ref={shapeTwo}
      />

      <AbstractShape
        posX={1200}
        posY={300}
        rotation={45}
        width={75}
        src={skewedRectangle}
        ref={shapeThree}
      />

      <AbstractShape
        posX={2000}
        posY={2500}
        rotation={116}
        width={75}
        src={cylinder}
        ref={shapeFour}
      />
    </div>
  );
}
