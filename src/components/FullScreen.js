import useFullScreen from "../customHooks/useFullScreen";

const FullScreen = () => {
  const callback = () => console.log("FullScreen Hook");
  const { element, clickToFullScreen, clickToExitScreen } = useFullScreen(
    callback
  );
  return (
    <div style={{ position: "fixed", top: "100px", left: "50%" }}>
      <h4>Use Full Screen</h4>
      <div ref={element}>
        <img
          width="384px"
          height="288px"
          alt=""
          src="https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_960_720.jpg"
        />
        <button onClick={clickToFullScreen}>Full</button>
        <button onClick={clickToExitScreen}>Exit</button>
      </div>
    </div>
  );
};

export default FullScreen;
