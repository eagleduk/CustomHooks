import CustomInput from "./components/CustomInput";
import CustomTabs from "./components/CustomTabs";
import Effect from "./components/Effect";

function App() {
  return (
    <div>
      <CustomInput initialValue="fefehh" />
      <CustomTabs initailIndex={1} />
      <Effect />
    </div>
  );
}

export default App;
