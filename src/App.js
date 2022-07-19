import NavBar from "./components/NavBar";
import "./App.css";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  document.title = "Text Utils";
  return (
    <>
      <NavBar title="Text Utility" aboutText="About TextUtil" />
      <div className="container my-3">
        <Textform text="Enter Text Below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
