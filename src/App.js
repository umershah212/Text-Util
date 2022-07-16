import NavBar from "./components/NavBar";
import "./App.css";
import Textform from "./components/Textform";

function App() {
  document.title = "Text Utils";
  return (
    <>
      <NavBar title="Text Utility" aboutText="About TextUtil" />
      <div className="container my-3">
        <Textform text="Enter Text Below" />
      </div>
    </>
  );
}

export default App;
