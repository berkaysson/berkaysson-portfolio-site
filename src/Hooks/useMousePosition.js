import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
    targetID: null,
    target: null,
  });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
        targetID: ev.target?.id,
        target: ev.target,
      });
    };

    const updateMousePositionOnScroll = () => {
      if (
        mousePosition.x !== null &&
        mousePosition.y !== null &&
        mousePosition.target === "html"
      ) {
        setMousePosition((prevMousePosition) => ({
          ...prevMousePosition,
          targetID: document.elementFromPoint(
            prevMousePosition?.x,
            prevMousePosition?.y
          ).id,
          target: document.elementFromPoint(
            prevMousePosition?.x,
            prevMousePosition?.y
          ),
        }));
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateMousePositionOnScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateMousePositionOnScroll);
    };
  }, [mousePosition]);

  return mousePosition;
};

export default useMousePosition;
