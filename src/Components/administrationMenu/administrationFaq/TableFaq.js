import React from "react";
import "antd/dist/antd.css";
import "./administrationFaq.scss";
import { useState, useEffect } from "react";
import { Table, Form, Popconfirm, Typography, message } from "antd";
import EditableCellFaq from "./EditableCellFaq";
import {
  createQuestions,
  deleteQuestions,
  getQuestions,
  updateQuestions,
} from "../../../Services/questions";
import DevAddInputFaq from "./DevAddInputFaq";

const TableFaq = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  const getData = () => {
    getQuestions().then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      title: "",
      text: "",
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
      const newData = [...data];

      const index = newData.findIndex((item) => {
        return key.id === item.id;
      });
      if (key.id > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        updateQuestions(newData[index]);

        setEditingKey("");
      } else {
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const onDelete = (key) => {
    deleteQuestions(key);
    setData(
      data.filter((item) => {
        return key.id !== item.id;
      })
    );
  };


  const onAdd = (title, text) => {
    createQuestions({
      title: title,
      text: text,
    }).then(() => {
      getData();
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "5%",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id - b.id,
      editable: false,
    },
    {
      title: "Питання",
      dataIndex: "title",
      width: "25%",
      editable: true,
    },
    {
      title: "Відповідь",
      dataIndex: "text",
      width: "50%",
      editable: true,
    },

    {
      title: "Дія",
      dataIndex: "operation",
      width: "20%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link style={{ marginRight: 8 }}>
              <Popconfirm
                title="Зберегти зміни?"
                okText="Так"
                cancelText="Ні"
                onCancel={cancel}
                onConfirm={() => save(record)}
              >
                <a>Зберегти</a>
              </Popconfirm>
            </Typography.Link>

            <Typography.Link onClick={cancel}>Відмінити</Typography.Link>
          </span>
        ) : (
          <div>
            <Typography.Link
              style={{ color: "#0050b3" }}
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Редагувати
            </Typography.Link>

            <Popconfirm
              title="Видалити питання?"
              okText="Так"
              cancelText="Ні"
              onConfirm={() => {
                onDelete(record);
                message.success(
                  "Питання " + record.title + " успішно видалене"
                );
              }}
            >
              <a style={{ marginLeft: 10, color: "#0050b3" }}>Видалити</a>
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
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="faq-body">
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCellFaq,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          footer={() => <DevAddInputFaq onAdd={onAdd} />}
        />
      </Form>
    </div>
  );
};

export default TableFaq;
