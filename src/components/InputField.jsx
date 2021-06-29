import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

const InputField = (props) => {
  const { inputRef, type, name, label, value, errors } = props;

  const hasError = errors[name];

  return (
    <div className="form-group">
      <label>{label}</label>
      {type === "checkbox" ? (
        <Checkbox
          defaultChecked={false}
          value={value}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      ) : (
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          className={hasError && "input--error"}
        ></input>
      )}
      <span className={hasError && "error-message"}>
        {hasError && `${hasError.message}`}
      </span>
    </div>
  );
};

InputField.propTypes = {};

export default InputField;
