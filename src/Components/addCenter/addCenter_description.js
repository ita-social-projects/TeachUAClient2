import React from "react";
import { Form, Input, Upload } from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import "./addCenter_description.scss";


class AddCenter_description extends React.Component {
  render() {
    return (
      <div className="addCenter-description">
        <Form
          name="addCenter_description"
          requiredMark={false}
        >
            <Form.Item
              name="urlLogo"
              className="addCenter-logo"
              label="Логотип"
              hasFeedback
            >
              <Upload
                className="upload-field"
                name="image"
                accept="image/png,image/jpeg,image/jpg,image/svg,image/jfif,image/.pjp"
                maxCount={1}
                headers={{ contentType: "multipart/form-data" }}
              >
                <span className="addCenter-upload">
                  <UploadOutlined className="upload-icon" />
                  Завантажити лого
                </span>
              </Upload>
            </Form.Item>
            <Form.Item
              name="urlBackground"
              className="addCenter-logo"
              label="Фото"
              hasFeedback
            >
              <Upload
                className="upload-field"
                name="image"
                accept="image/png,image/jpeg,image/jpg,image/svg,image/jfif,image/.pjp"
                maxCount={1}
                headers={{ contentType: "multipart/form-data" }}
              >
                <span className="addCenter-upload">
                  <UploadOutlined className="upload-icon" />
                  Завантажити фото
                </span>
              </Upload>
            </Form.Item>
            <Form.Item
              name="description"
              className="description-field"
              label="Опис"
              hasFeedback
              rules={[
                {
                  required: true,
                  pattern:
                    /^[А-Яа-яЇїІіЄєҐґa-zA-Z0-9()!"#$%&'*+\n, ,-.:\r;<=>?|@№_`{}~^[\]\\]*$/,
                  message: "Некоректний опис центру",
                },
                {
                  min: 40,
                  max: 1500,
                  message: "Некоректний опис центру",
                },
              ]}
            >
              <Input.TextArea
                className="editor-textarea"
                style={{ height: 200 }}
                placeholder="Додайте опис центру"
              />
            </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddCenter_description;
