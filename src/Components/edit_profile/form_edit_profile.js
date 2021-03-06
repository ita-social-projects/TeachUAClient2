import React from "react";
import { Component } from "react";
import { Form, Input, Button, Checkbox, Col, Upload, Tooltip } from "antd";
import {
  QuestionCircleOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./edit_profile.scss";
import { UPLOAD_IMAGE_URL } from "../../Services/Config/ApiConfig";
import { tokenToHeader } from "../../Services/uploadService";
import { editUsersService } from "../../Services/user";

class FormEditProfile extends Component {
  state = {
    changePassword: false,
  };

  getCityValue = (value) => {
    this.setState({ city: value });
  };

  handleChangePassword = () => {
    this.setState({ changePassword: !this.state.changePassword });
  };


  render() {

    return (
      <Form
        onFinish={(values) => {
          editUsersService({...values,
          id: this.props.user.id,
          urlLogo: this.props.user.urlLogo,
          status: this.props.user.status,
          roleName: this.props.user.roleName
          })
        }}
  
        className="edit-profile-form"
        style={{ maxWidth: "773px" }}
        initialValues={{
          lastName: this.props.user.lastName,
          firstName: this.props.user.firstName,
          phone: this.props.user.phone,
          email: this.props.user.email,
        }}
      >
        <div className="edit-header">
        <h3>Редагувати профіль </h3>
        </div>

        <div className="edit-choose-role">
          <Button type="primary" className="edit-visitor">
            <UserOutlined className="logo-edit-profile" />
            Відвідувач
          </Button>
          <Button type="primary" className="edit-boss">
            <UserOutlined className="logo-edit-profile" />
            Керівник
          </Button>
        </div>
        <Form.Item
          name="lastName"
          className="edit-input"
          label="Прізвище"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Будь ласка введіть Ваше прізвище",
            },
            {
              required: false,
              pattern: /^[^0-9]*$/,
              message: "Прізвище не може містити цифри",
            },
            {
              required: false,
              pattern: /^(?=[^-'ʼ\s]).*[^-'ʼ\s]$/,
              message: "Прізвище повинно починатися і закінчуватися літерою",
            },
            {
              required: false,
              pattern: /^[^-ЁёЪъЫыЭэ]/,
              message: "Прізвище не може містити російські букви",
            },
            {
              required: false,
              pattern: /^[^`~!@₴£№#$%^&*()_+={}\\|/\\:;“"<,>.?๐฿]*$/,
              message: "Прізвище не може містити спеціальні символи",
            },
            {
              max: 25,
              message: "Прізвище не може містити більше, ніж 25 символів",
            },
          ]}
        >
          <Input className="edit-box"/>

        </Form.Item>

        <Form.Item
          name="firstName"
          className="edit-input"
          label="Ім'я"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Будь ласка введіть Ваше ім'я",
            },
            {
              required: false,
              pattern: /^[^0-9]*$/,
              message: "Ім'я не може містити цифри",
            },
            {
              required: false,
              pattern: /^(?=[^-'ʼ\s]).*[^-'ʼ\s]$/,
              message: "Ім'я повинно починатися і закінчуватися літерою",
            },
            {
              required: false,
              pattern: /^[^-ЁёЪъЫыЭэ]/,
              message: "Ім'я не може містити російські букви",
            },
            {
              required: false,
              pattern: /^[^`~!@₴£№#$%^&*()_+={}\\|/\\:;“"<,>.?๐฿]*$/,
              message: "Ім'я не може містити спеціальні символи",
            },
            {
              max: 25,
              message: "Ім'я не може містити більше, ніж 25 символів",
            },
          ]}
        >
          <Input className="edit-box" />
        </Form.Item>

        <Form.Item
          name="phone"
          className="edit-input"
          label="Телефон"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Будь ласка введіть Ваш номер телефону",
            },
            {
              required: false,
              pattern: /^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*$/,
              message: "Телефон не може містити літери",
            },
            {
              required: true,
              pattern: /^[^\s]*$/,
              message: "Телефон не може містити пробіли",
            },
            {
              required: false,
              pattern: /^[^-`~!@#$%^&*()_+={}\\|\\:;“’'<,>.?๐฿]*$/,
              message: "Телефон не може містити спеціальні символи",
            },
            {
              pattern: /^.{10}$/,
              message: "Телефон не відповідає вказаному формату",
            },
          ]}
        >
          <Input addonBefore="+38" className="edit-box"/>
        </Form.Item>

        <Form.Item
          name="email"
          className="edit-input"
          label="Email"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Введіть email",
            },
            {
              type: "email",
              message: "Некоректний формат email",
            },
          ]}
        >
          <Input className="edit-box" disabled />
        </Form.Item>

        <Form.Item name="photo" className="edit-input">
          <Upload>
            <span className="change-photo" title="Фото">
              Фото&nbsp;
              <Tooltip
                placement="topLeft"
                title="Приймає зображення формату JPG/PNG із мінімальною роздільною здатністю 200х200 пікселів та максимальним розміром файлу 5 МВ"
              >
                <QuestionCircleOutlined style={{ cursor: "help" }} />
              </Tooltip>
              &nbsp;:
            </span>
          </Upload>
          <Upload
            name="image"
            action={UPLOAD_IMAGE_URL}
            maxCount={1}
            data={{ folder: `contact-photo` }}
            headers={{
              contentType: "multipart/form-data",
              Authorization: tokenToHeader(),
            }}
          >
            <Button className="upload-photo" icon={<UploadOutlined />} htmlType="submit">
              Завантажити фото{" "}
            </Button>
          </Upload>
        </Form.Item>
        <Checkbox.Group>
          <Col className="row-style">
            <Checkbox
              onClick={this.handleChangePassword}
              checked={this.state}
            ></Checkbox>
            <span>Змінити пароль</span>
          </Col>
        </Checkbox.Group>
        {this.state.changePassword && (
          <div>
            <Form.Item
              className="edit-input"
              name="activePassword"
              rules={[
                {
                  required: true,
                  message: "Введіть пароль",
                },
                {
                  pattern: /^\S{8,20}$/,
                  message:
                    "Пароль не може бути коротшим, ніж 8 та довшим, ніж 20 символів",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Введіть діючий пароль" />
            </Form.Item>

            <Form.Item
              className="edit-input"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Введіть пароль",
                },
                {
                  pattern: /^\S{8,20}$/,
                  message:
                    "Пароль не може бути коротшим, ніж 8 та довшим, ніж 20 символів",
                },
                {
                  pattern: /^\S{8,20}$/,
                  message:
                    "Пароль повинен містити великі/маленькі літери латинського алфавіту, цифри та спеціальні символи",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Введіть новий пароль" />
            </Form.Item>

            <Form.Item
              className="edit-input"
              name="confirmNewPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Підтвердіть пароль!",
                },
                {
                  pattern: /^\S{{newPassword} === {confirmNewPassword}}$/,
                  message:
                    "'Значення поля ‘Підтвердити новий пароль’ має бути еквівалентним значенню поля ‘Новий пароль’",
                },
              ]}
            >
              <Input.Password placeholder="Підтвердіть новий пароль" />
            </Form.Item>
          </div>
        )}

        <Form.Item className="edit-submit-btn">
          <Button type="primary" htmlType="submit">
            Зберегти зміни
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default FormEditProfile;
