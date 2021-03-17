import useScroll from "../customHooks/useScroll";

const ScrollComponent = () => {
  const callback = () => {
    console.log("Scroll Call back");
  };
  const { x, y } = useScroll(callback);
  return (
    <div
      style={{ position: "fixed", left: "50%", top: 0, background: "tomato" }}
    >
      <h4 style={{ color: y > 300 ? "#000000" : "#ffffff" }}>Use Scroll</h4>
    </div>
  );
};

export default ScrollComponent;
