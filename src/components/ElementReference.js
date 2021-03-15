import useCustomRef from "../customHooks/useCustomRef";

const elementEvents = {
  click: (event) => {
    console.log(event.target.innerText);
  },
  mouseenter: (event) => {
    console.log("onmouseenter Event @@@");
  },
  value: "REI",
};

const ElementReference = () => {
  const element = useCustomRef(elementEvents);
  return (
    <div>
      <h4>Use Ref & Use Effect Return</h4>
      <span
        style={{
          display: "block",
          width: "120px",
          height: "30px",
          background: "blue",
          color: "#ffffff",
          cursor: "pointer",
        }}
        ref={element}
      >
        Click Me!!
      </span>
    </div>
  );
};

export default ElementReference;
