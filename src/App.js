import NavBar from "./components/NavBar";
import "./App.css";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  document.title = "Text Utils";
  const [mode, setMode] = useState("light");
  const [alertmsg, setAlertmsg] = useState(null);
  const showAlert = (msg, alertType) => {
    setAlertmsg({
      msg: msg,
      alertType: alertType,
    });
    setTimeout(() => {
      setAlertmsg(null);
    }, 1500);
  };
  const UpdateMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1f1f";
      showAlert("Dark Mode enables", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#d9d9d9";
      showAlert("Light Mode enables", "Success");
    }
  };
  return (
    <>
      <NavBar
        title="Text Utility"
        aboutText="About TextUtil"
        mode={mode}
        modeCheck={UpdateMode}
      />
      <Alert notify={alertmsg} />
      <div className="container my-3">
        <Textform text="Enter Text Below" mode={mode} notify={showAlert} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
