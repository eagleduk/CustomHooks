import CustomInput from "./components/CustomInput";
import CustomTabs from "./components/CustomTabs";
import Effect from "./components/Effect";
import ElementReference from "./components/ElementReference";
import TitleUpdater from "./components/TitleUpdater";
import CustomConfirm from "./components/CustomConfirm";
import CustomPreventLeave from "./components/CustomPreventLeave";

function App() {
  return (
    <div>
      <CustomInput initialValue="fefehh" />
      <hr />
      <CustomTabs initailIndex={1} />
      <hr />
      <Effect />
      <hr />
      <TitleUpdater initialTitle="Loading..." />
      <hr />
      <ElementReference />
      <hr />
      <CustomConfirm />
      <hr />
      <CustomPreventLeave />
    </div>
  );
}

export default App;
