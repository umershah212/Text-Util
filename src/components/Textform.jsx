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
  };
  const onBtnLoClick = () => {
    let newText = text;
    setText(newText.toLowerCase());
  };
  const onBtnFlClick = () => {
    let newText = text;
    newText = newText
      .split("")
      .filter((curr) => !isNaN(curr))
      .join("");
    setText(newText);
  };

  return (
    <>
      <div className="container">
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
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={onBtnUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={onBtnLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={onBtnFlClick}>
          Filter Numbers
        </button>
      </div>
      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>Words {text.split(" ").length}</p>
        <p>Characters {text.length}</p>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

Textform.propTypes = { text: PropTypes.string };

export default Textform;
