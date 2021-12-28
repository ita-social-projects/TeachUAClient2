import React from "react";
import { Typography, Image, Table, Form, Input, Button, Upload } from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import { getContactsService } from "../../../Services/contact";
import "./administration_contacts.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "5%",
    editable: false,
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Назва",
    dataIndex: "name",
    width: "10%",
    editable: true,
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Директорія",
    dataIndex: "urlLogo",
    width: "30%",
    editable: false,
  },
  {
    title: "Картинка",
    dataIndex: "urlLogo",
    width: "10%",
    inputType: "upload",
    uploadFolder: "contact-types",
    editable: true,
    render: (urlLogo) => (
      <Image
        width={100}
        height={100}
        src={ + urlLogo}
      />
    ),
  },
  {
    title: "Дія",
    dataIndex: "action",
    width: "45%",
    render: () => {
      return (
        <div>
          <span className="action-btn">
            <Typography.Link>Редагувати</Typography.Link>
          </span>
          <span>
            <Typography.Link>Видалити</Typography.Link>
          </span>
        </div>
      );
    },
  },
];

class Administration_contacts extends React.Component {
  state = {
    contacts: [],
  };

  getData = () => {
    getContactsService().then((response) => {
      let data = response.data.map((contact) => {
        let obj = {
          id: contact.id,
          name: contact.name,
          urlLogo: contact.urlLogo,
        };
        return obj;
      });
      this.setState({ contacts: data });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="admin-contacts-body">
        <div className="table-header"></div>
        <Table
          className="admin-contacts-table"
          dataSource={this.state.contacts}
          bordered
          columns={columns}
          footer={() => (
            <Form
              className="admin-contacts-form"
              name="basic"
              requiredMark={false}
            >
              <Form.Item
                name="add_contact_name"
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
                  maxCount={1}
                  data={{ folder: `contact-types` }}
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
          )}
        />
      </div>
    );
  }
}

export default Administration_contacts;
