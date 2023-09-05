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
