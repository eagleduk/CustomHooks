import CustomInput from "./components/CustomInput";
import CustomTabs from "./components/CustomTabs";
import Effect from "./components/Effect";
import ElementReference from "./components/ElementReference";
import TitleUpdater from "./components/TitleUpdater";

function App() {
  return (
    <div>
      <CustomInput initialValue="fefehh" />
      <CustomTabs initailIndex={1} />
      <Effect />
      <TitleUpdater initialTitle="Loading..." />
      <ElementReference />
    </div>
  );
}

export default App;
