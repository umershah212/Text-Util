import React from "react";
import PropTypes from "prop-types";

const Alert = (props) => {
  return (
    props.notify && (
      <>
        <div
          className={`alert alert-${props.notify.alertType.toLowerCase()} alert-dismissible fade show`}
          role="alert"
        >
         <strong> {props.notify.alertType} </strong>: {props.notify.msg}
        </div>
      </>
    )
  );
};

Alert.propTypes = {};

export default Alert;
