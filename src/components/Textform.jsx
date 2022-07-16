import React, { useState } from "react";
import PropTypes from "prop-types";

const Textform = (props) => {
  const [text, setText] = useState("");

  const onHandleEvent = (event) => {
    setText(event.target.value);
  };
  const onBtnClick = () => {
    let newText = text;
    setText(newText.toUpperCase());
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.text}
        </label>
      </div>
      <textarea
        className="form-control"
        id="myBox"
        rows="3"
        placeholder="Enter the text here"
        value={text}
        onChange={onHandleEvent}
      ></textarea>
      <button className="btn btn-primary" onClick={onBtnClick}>
        Convert to Uppercase
      </button>
    </>
  );
};

Textform.propTypes = { text: PropTypes.string };

export default Textform;
