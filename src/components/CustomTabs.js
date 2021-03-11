import useTab from "../customHooks/useTab";

const datas = [
  { display: "Tab 1", value: "value 1" },
  { display: "Tab 2", value: "value 2" },
  { display: "Tab 3", value: "value 3" },
];

const CustomTabs = ({ initailIndex }) => {
  const { currentData, setCurrentIndex } = useTab(initailIndex, datas);
  return (
    <div>
      <h4>Tab Hook</h4>
      {datas.map((data, index) => {
        return (
          <button key={index} onClick={() => setCurrentIndex(index)}>
            {data.display}
          </button>
        );
      })}
      {currentData && <div>{currentData?.value}</div>}
    </div>
  );
};

export default CustomTabs;
