import React from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
    targetID: null,
    target: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
        targetID: ev.target.id,
        target: ev.target
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
