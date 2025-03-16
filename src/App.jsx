import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import { CustomSnackbar } from "./components/module/CustomSnackbar";

function App() {
  return (
    <BrowserRouter>
      <CustomSnackbar />
      <Root />
    </BrowserRouter>
  );
}

export default App;
