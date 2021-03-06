import React, { useState, useEffect } from "react";
import { Typography, Image, Table, Form, Popconfirm, message } from "antd";
import {
  getContactsService,
  editContactsService,
  deleteContactsService,
} from "../../../Services/contact";
import AddContactType from "./addContactType";
import EditableCell from "../editableCell";
import "./administration_contacts.scss";

export default function AdministrationContacts() {
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
  }, [contacts]);

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
        editContactsService(editedData).then(() => {
          getData();
          setEditingKey("");
        });
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const deleteData = (key) => {
    deleteContactsService(key).then(() => {
      message.success(`Тип ${key.name} успішно видалений`);
      getData();
    });
  } 

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
          src={`${process.env.REACT_APP_URL}` + urlLogo}
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
          <div>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
              style={{
                marginRight: 8,
              }}
              className="action-btn"
            >
              Редагувати
            </Typography.Link>
            <Popconfirm
              title="Видалити цей Тип Контакту?"
              className="action-btn"
              cancelText="Ні"
              okText="Так"
              onConfirm={() => deleteData(record)}
            >
              <a>Видалити</a>
            </Popconfirm>
          </div>
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
            <AddContactType
              contactTypes={contacts}
              setContactTypes={setContacts}
            />
          )}
        />
      </Form>
    </div>
  );
}
