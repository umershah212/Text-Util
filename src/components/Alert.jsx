import React from "react";

const Alert = (props) => {
  return (
    <div style={{ height: "50px" }}>
      {props.notify && (
        <>
          <div
            className={`alert alert-${props.notify.alertType.toLowerCase()} alert-dismissible fade show`}
            role="alert"
          >
            <strong> {props.notify.alertType} </strong>: {props.notify.msg}
          </div>
        </>
      )}
    </div>
  );
};

Alert.propTypes = {};

export default Alert;
