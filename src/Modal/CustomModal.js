import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import PropTypes from "prop-types";

const CustomModal = ({
  title,
  okText,
  children,
  buttonText,
  type,
  handleOkButton,
  handleCancelButton
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (handleOkButton) handleOkButton();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    if (handleCancelButton) handleCancelButton();
  };

  const renderStartModal = () => {
    switch (type) {
      case "button":
        return (
          <Button type="primary" onClick={showModal}>
            {buttonText}
          </Button>
        );
      case "link":
        return <a onClick={showModal}>{buttonText}</a>;
    }
  };
  return (
    <>
      {renderStartModal()}
      <Modal
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
      >
        {children}
      </Modal>
    </>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string,
  okText: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleOkButton: PropTypes.func,
  handleCancelButton: PropTypes.func
};

CustomModal.defaultProps = {
  title: "",
  okText: "ok",
  type: "button",
  handleOkButton: () => {},
  handleCancelButton: () => {}
};

export default CustomModal;
