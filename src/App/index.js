import React, { useState } from "react";
import CustomModal from "./../Modal/CustomModal.js";
import { EditOutlined, CheckOutlined, DatabaseFilled } from "@ant-design/icons";
import { Select } from "antd";
import data from "./../constants.js";
import colorPickerData from "./../colorPickerData.js";
import styles from "./index.module.scss";
import CreateGroup from "./../CreateGroupScreen/index.js";

const getOkText = (text, icon) => {
  const IconName = icon;
  return (
    <div>
      <IconName />
      <span>{text}</span>
    </div>
  );
};

const App = () => {
  const [dropDownList, addCompany] = useState([
    { id: 1, name: "Company1" },
    { id: 2, name: "Company2" },
    { id: 3, name: "Company3" },
    { id: 4, name: "Company4" },
    { id: 5, name: "Company5" }
  ]);
  const { modalTitle, openNewModalButton, okText, heading } = data.screen1;

  const {
    modalTitle: title,
    openNewModalButton: newButton,
    okText: okTextScreen2,
    inputTitle
  } = data.screen2;

  const [active, setActive] = useState({ activeColor: "" });

  const [groupList, setGroupItem] = useState([]);

  const renderColorPicker = () =>
    colorPickerData.map(data => {
      let { color, id } = data;
      return (
        <div
          key={id}
          className={styles.gridItem}
          style={{ backgroundColor: color }}
          onClick={() =>
            setActive(prev => ({
              [id]: !active[id],
              activeColor: color
            }))
          }
        >
          {active[id] && (
            <CheckOutlined style={{ margin: "5px", color: "white" }} />
          )}
        </div>
      );
    });

  const handleChange = val => {
    setGroupItem(val);
  };

  const handleOkButton = () => {
    const payload = { color: active.activeColor, groupList: groupList };
    console.log(payload);
    setActive({ activeColor: "" });
    setGroupItem([]);
  };

  const handleCancelButton = () => {
    setActive({ activeColor: "" });
    setGroupItem([]);
  };

  return (
    <>
      <CustomModal
        title={modalTitle}
        okText={getOkText(okText, EditOutlined)}
        buttonText={openNewModalButton}
        type="button"
        handleOkButton={handleOkButton}
        handleCancelButton={handleCancelButton}
      >
        <Select
          style={{ width: "100%" }}
          mode="multiple"
          onChange={handleChange}
          value={groupList}
        >
          {dropDownList.map(item => (
            <Option key={item.id} value={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>{" "}
        <div>
          <CreateGroup
            title={title}
            newButton={newButton}
            inputTitle={inputTitle}
            okText={getOkText(okTextScreen2, DatabaseFilled)}
            addCompany={addCompany}
          />
        </div>
        <br />
        <br />
        <div>{heading}</div>
        <br />
        <div className={styles.gridContainer}>{renderColorPicker()}</div>
      </CustomModal>
    </>
  );
};
export default App;
