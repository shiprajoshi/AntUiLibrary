import React, { useState } from "react";
import CustomModal from "./../Modal/CustomModal.js";
import { Input } from "antd";
import PropTypes from "prop-types";

const CreateGroup = ({ title, newButton, inputTitle, okText, addCompany }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleOkButton = () => {
    addCompany(prev => [...prev, { id: prev.length + 1, name: inputValue }]);
    setInputValue("");
  };

  const handleCancelButton = () => {
    setInputValue("");
  };

  return (
    <CustomModal
      title={title}
      okText={okText}
      buttonText={newButton}
      type="link"
      handleOkButton={handleOkButton}
      handleCancelButton={handleCancelButton}
    >
      <div>{inputTitle}</div>
      <Input onChange={handleInputChange} value={inputValue} />
    </CustomModal>
  );
};

CreateGroup.propTypes = {
  title: PropTypes.string,
  newButton: PropTypes.string,
  inputTitle: PropTypes.string,
  okText: PropTypes.func
};

CreateGroup.defaultProps = {
  title: "",
  newButton: "",
  inputTitle: "",
  okText: () => {}
};
export default CreateGroup;
