import React from "react";
import { Button, Form, Input, message, Upload } from "antd";
import PropTypes from "prop-types";
import { createContactsService } from "../../../Services/contact";
import "./administration_contacts.scss";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import { UPLOAD_IMAGE_URL } from "../../../Services/Config/ApiConfig";
import { tokenToHeader } from "../../../Services/uploadService";

const AddContactType = ({ contactTypes, setContactTypes }) => {
  const addToTable = (currentData, addingData) => {
    return currentData.concat(addingData);
  };

  const onFinish = (values) => {
    createContactsService(values).then((response) => {
      message.success(`${response.data.name} успішно доданий`);

      setContactTypes(addToTable(contactTypes, response));
    });
  };

  return (
    <div className="add-contact-type">
      <Form
        className="admin-contacts-form"
        name="basic"
        requiredMark={false}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Введіть назву контакта",
            },
          ]}
        >
          <Input
            className="add-contact-type-input"
            placeholder="Назва контакта"
          ></Input>
        </Form.Item>
        <Form.Item
          name="urlLogo"
          rules={[
            {
              required: true,
              message: "Завантажте лого",
            },
          ]}
        >
          <Upload
            name="image"
            action={UPLOAD_IMAGE_URL}
            maxCount={1}
            data={{ folder: `contact-types` }}
            headers={{
              contentType: "multipart/form-data",
              Authorization: tokenToHeader(),
            }}
          >
            <span className="add-contact-upload">
              <UploadOutlined className="icon" />
              Завантажити лого
            </span>
          </Upload>
        </Form.Item>
        <Button htmlType="submit" className="add-contact-button">
          Добавити
        </Button>
      </Form>
    </div>
  );
};

AddContactType.propTypes = {
  contactTypes: PropTypes.array,
  setContactTypes: PropTypes.func,
};

export default AddContactType;
