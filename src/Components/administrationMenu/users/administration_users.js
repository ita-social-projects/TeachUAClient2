import React, { useState, useEffect } from "react";
import { Typography, Table, Form, Popconfirm, message } from "antd";
import {
  getUsersService,
  editUsersService,
  deleteUsersService,
} from "../../../Services/user";
import EditableCell from "../editableCell";
import "./administration_users.scss";

export default function Administration_users() {
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const getData = () => {
    getUsersService().then((response) => {
      setUsers(
        response.data.map((user) => {
          let obj = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            password: user.password,
            roleName: user.roleName,
            urlLogo: user.urlLogo,
            status: user.status,
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
      const newData = [...users];

      const index = newData.findIndex((item) => {
        return key.id === item.id;
      });

      if (key.id > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        const editedData = {
          id: newData[index].id,
          email: newData[index].email,
          firstName: newData[index].firstName,
          lastName: newData[index].lastName,
          phone: newData[index].phone,
          urlLogo: newData[index].urlLogo,
          status: newData[index].status,
          roleName: newData[index].roleName,
        };
        editUsersService(editedData).then(() => {
          getData();
          setEditingKey("");
        });
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const deleteData = (key) => {
    deleteUsersService(key).then(() => {
      message.success(`Користувача ${key.name} успішно видалено`);
      getData();
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "4%",
      editable: false,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Ім'я",
      dataIndex: "firstName",
      width: "13%",
      editable: false,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.firstName.length - b.firstName.length,
    },
    {
      title: "Прізвище",
      dataIndex: "lastName",
      width: "13%",
      editable: false,
      sorter: (a, b) => {
        a.lastName = a.lastName || "";
        b.lastName = b.lastName || "";
        return a.lastName.length - b.lastName.length;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "17%",
      editable: false,
    },
    {
      title: "Номер тел.",
      dataIndex: "phone",
      width: "13%",
      editable: false,
    },
    {
      title: "Роль",
      dataIndex: "roleName",
      inputType: "select",
      selectData: ["ROLE_ADMIN", "ROLE_USER", "ROLE_MANAGER"],
      width: "13%",
      editable: true,
    },
    {
      title: "Активний/неактивний",
      dataIndex: "status",
      inputType: "select",
      selectData: ["true", "false"],
      width: "11%",
      editable: true,
    },
    {
      title: "Дія",
      dataIndex: "action",
      width: "16%",
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
              title="Видалити користувача?"
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
    <div className="admin-users-body">
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          className="admin-users-table"
          dataSource={users}
          bordered
          columns={mergedColumns}
          footer={() => <div></div>}
        />
      </Form>
    </div>
  );
}
