import React, { useState, useEffect } from "react";
import { Typography, Table, Image, Form, Popconfirm, message } from "antd";
import {
  getCategoriesService,
  editCategoriesService,
  deleteCategoriesService,
} from "../../../Services/category";
import AdministrationAddCategory from "./administration_add_category";
import EditableCell from "../editableCell";
import "./administration_categories.scss";

export default function AdministrationCategories() {
  const [categories, setCategories] = useState([]);
  const [addCategory, setAddCategory] = useState([]);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const getData = () => {
    getCategoriesService().then((response) => {
      setCategories(
        response.data.map((category) => {
          let obj = {
            id: category.id,
            sortby: category.sortby,
            name: category.name,
            description: category.description,
            urlLogo: category.urlLogo,
            backgroundColor: category.backgroundColor,
            tagBackgroundColor: category.tagBackgroundColor,
            tagTextColor: category.tagTextColor,
          };
          return obj;
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, [addCategory]);

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
      const newData = [...categories];

      const index = newData.findIndex((item) => {
        return key.id === item.id;
      });

      if (key.id > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        const editedData = {
          id: newData[index].id,
          sortby: newData[index].sortby,
          name: newData[index].name,
          description: newData[index].description,
          urlLogo: newData[index].urlLogo,
          backgroundColor: newData[index].backgroundColor,
          tagBackgroundColor: newData[index].tagBackgroundColor,
          tagTextColor: newData[index].tagTextColor,
        };
        editCategoriesService(editedData).then(() => {
          getData();
          setEditingKey("");
        });
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const deleteData = (key) => {
    deleteCategoriesService(key).then(() => {
      message.success("Категорія " + key.name + " успішно видалена!");
      getData();
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "3%",
      editable: false,
    },
    {
      title: "sortBy",
      dataIndex: "sortby",
      width: "6%",
      editable: true,
    },
    {
      title: "Назва",
      dataIndex: "name",
      width: "15%",
      editable: true,
      render: (name, row) => (
        <div
          className="ant-tag tag"
          style={{
            backgroundColor: row.tagBackgroundColor,
            color: row.tagTextColor,
            maxWidth: "200px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            borderRadius: "10px",
          }}
        >
          {name}
        </div>
      ),
    },
    {
      title: "Опис",
      dataIndex: "description",
      width: "25%",
      editable: true,
    },
    {
      title: "Логотип",
      dataIndex: "urlLogo",
      width: "7%",
      inputType: "upload",
      uploadFolder: "categories",
      editable: true,
      render: (urlLogo, row) => (
        <Image
          style={{ backgroundColor: row.backgroundColor }}
          width={50}
          height={50}
          src={`${process.env.REACT_APP_URL}` + urlLogo}
        />
      ),
    },
    {
      title: "Background Color",
      dataIndex: "backgroundColor",
      width: "10%",
      inputType: "color",
      editable: true,
    },
    {
      title: "Tag Background Color",
      dataIndex: "tagBackgroundColor",
      inputType: "color",
      width: "10%",
      editable: true,
    },
    {
      title: "Tag Text Color",
      dataIndex: "tagTextColor",
      inputType: "color",
      width: "10%",
      editable: true,
    },
    {
      title: "Дія",
      dataIndex: "action",
      width: "14%",
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
              title="Видалити категорію?"
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
    <div className="categories-body">
      <Form form={form} component={false}>
        <Table
          className="categories-table"
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          dataSource={categories}
          bordered
          columns={mergedColumns}
          footer={() => (
            <AdministrationAddCategory
              categories={categories}
              setCategories={setCategories}
              setAddCategory={setAddCategory}
            />
          )}
        />
      </Form>
    </div>
  );
}
