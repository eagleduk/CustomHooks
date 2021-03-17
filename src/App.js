import CustomInput from "./components/CustomInput";
import CustomTabs from "./components/CustomTabs";
import Effect from "./components/Effect";
import ElementReference from "./components/ElementReference";
import TitleUpdater from "./components/TitleUpdater";
import CustomConfirm from "./components/CustomConfirm";
import CustomPreventLeave from "./components/CustomPreventLeave";
import BeforeLeave from "./components/BeforeLeave";
import FadeInComponent from "./components/FadeInComponent";
import NetworkStatus from "./components/NetworkStatus";
import ScrollComponent from "./components/ScrollComponent";
import FullScreen from "./components/FullScreen";
import Notification from "./components/Notification";

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
      <hr />
      <BeforeLeave />
      <hr />
      <FadeInComponent />
      <hr />
      <NetworkStatus />
      <ScrollComponent />
      <FullScreen />
      <hr />
      <Notification />
    </div>
  );
}

export default App;
