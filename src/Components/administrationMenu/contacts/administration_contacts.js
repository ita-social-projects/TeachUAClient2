import React, { useState, useEffect } from "react";
import {Typography, Image, Table, Form, Input, Button, Upload, Popconfirm} from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import {getContactsService, editContactsService} from "../../../Services/contact";
import EditableCell from "../editableCell";
import "./administration_contacts.scss";

export default function Administration_contacts() {
  const [contacts, setContacts] = useState([]);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const getData = () => {
    getContactsService().then((response) => {
      setContacts(
        response.data.map((contact) => {
          let obj = {
            id: contact.id,
            name: contact.name,
            urlLogo: contact.urlLogo,
          };
          return obj;
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...contacts];

      const index = newData.findIndex((item) => {
        return key.id === item.id;
      });

      if (key.id > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        const editedData = {
          id: newData[index].id,
          name: newData[index].name,
          urlLogo: newData[index].urlLogo,
        };
        editContactsService(editedData).then((response) => {
          getData();
          setEditingKey("");
          return response.editedData;
        });
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

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
          src={`${process.env.PUBLIC_URL}` + urlLogo}
        />
      ),
    },
    {
      title: "Дія",
      dataIndex: "action",
      width: "45%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm
              title="Зберегти зміни?"
              onConfirm={() => save(record)}
              cancelText="Ні"
              okText="Так"
            >
              <a>Зберегти</a>
            </Popconfirm>

            <Typography.Link
              onClick={() => cancel(record)}
              style={{
                marginLeft: 8,
              }}
            >
              Відмінити
            </Typography.Link>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
            style={{
              marginLeft: 8,
            }}
          >
            Редагувати
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        selectData: col.selectData,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="admin-contacts-body">
      <Form form={form} component={false}>
        <Table
          className="admin-contacts-table"
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          dataSource={contacts}
          bordered
          columns={mergedColumns}
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
      </Form>
    </div>
  );
}
