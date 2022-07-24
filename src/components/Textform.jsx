import React, { useState } from "react";
import PropTypes from "prop-types";

const Textform = (props) => {
  const [text, setText] = useState("");

  const onHandleEvent = (event) => {
    setText(event.target.value);
  };
  const onBtnUpClick = () => {
    let newText = text;
    setText(newText.toUpperCase());
    props.notify("Text converted to Upper case", "Success");
  };
  const onBtnLoClick = () => {
    let newText = text;
    setText(newText.toLowerCase());
    props.notify("Text converted to Lower case", "Success");
  };
  const clearText = () => {
    setText("");
    props.notify("Text Cleared", "Success");
  };
  const onBtnFlClick = () => {
    let newText = text;
    newText = newText
      .split("")
      .filter((curr) => isNaN(curr))
      .join("");
    setText(newText);
    props.notify("All numbers are removed", "Success");
  };
  const filterChar = () => {
    let newText = text;
    newText = newText
      .split("")
      .filter((curr) => !isNaN(curr))
      .join("");
    setText(newText);
    props.notify("All characters are removed!", "Success");
  };
  const removeSpaces = () => {
    let newText = text;
    newText = newText
      .split("")
      .filter((curr) => curr !== " ")
      .join("");
    setText(newText);
    props.notify("All spaces are removed!", "Success");
  };
  const generateString = () => {
    var result = "";
    var characters =
      "ABCDEF GHIJKLM NOPQRSTUVWXY Zabcde fghijkl mnopqrstuvw xyz0123456789 ";
    var charactersLength = characters.length;
    for (var i = 0; i < 100; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setText(text+result);
    props.notify("Random string is generated", "Success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#d9d9d9" : "#1f1f1f" }}
      >
        <div className="mb-3">
          <h1>Enter the text below:</h1>
        </div>
        <textarea
          className="form-control my-2"
          id="myBox"
          rows="3"
          placeholder="Enter the text here"
          value={text}
          onChange={onHandleEvent}
          style={{
            color: props.mode === "dark" ? "#d9d9d9" : "#1f1f1f",
            backgroundColor: props.mode === "dark" ? "#1f1f1f" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary m-2" onClick={generateString}>
          Generate Random String
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2"
          onClick={onBtnUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2"
          onClick={onBtnLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2"
          onClick={onBtnFlClick}
        >
          Remove Numbers
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2"
          onClick={filterChar}
        >
          Remove Characters
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2"
          onClick={removeSpaces}
        >
          Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-2"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "#d9d9d9" : "#1f1f1f" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          Words{" "}
          {text
            .split(/\s+/)
            .reduce(
              (prev, curr, i, arr) => (curr === "" ? prev : (prev = prev + 1)),
              0
            )}
        </p>
        <p>Characters {text.length}</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#d9d9d9" : "#1f1f1f" }}
      >
        <h2>Preview</h2>
        <p>{text===""?"Nothing to Preview":text}</p>
      </div>
    </>
  );
};

Textform.propTypes = { text: PropTypes.string };

export default Textform;
