import React from "react";
import { useState, useEffect } from "react";
import { Table, Popconfirm, Form, Typography } from "antd";
import EditableCell from "./EditableCell";
import AddCitie from "./AddSitie";
import "./sities.scss";
import {
  getSitiesServise,
  updateCities,
  deleteCity,
} from "../../../Services/cities";

const AdministrationSities = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  const getData = () => {
    getSitiesServise().then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      longitude: "",
      address: "",
      latitude: "",
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
 

        newData[index].latitude =
          typeof newData[index].latitude === "number"
            ? newData[index].latitude
            : Number(newData[index].latitude);
        newData[index].longitude =
          typeof newData[index].longitude === "number"
            ? newData[index].longitude
            : Number(newData[index].longitude);
        updateCities(newData[index]).then(() => {
          getData();
        }).catch((error) => {
          console.log(error.response);
          return error.response.data;
        });;

        setEditingKey("");
      } else {
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const CityDelete = (key) => {
    deleteCity(key).then(() => {
      getData();
    }).catch((error) => {
      return error.response.data;
    });;
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
      editable: false,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "10%",

      sorter: (a, b) => a.name.length - b.name.length,
      editable: true,
    },
    {
      title: "Довгота",
      dataIndex: "longitude",

      render: (longitude) => Number.parseFloat(longitude).toFixed(4),
      width: "20%",
      editable: true,
    },
    {
      title: "Широта",
      dataIndex: "latitude",

      render: (latitude) => Number.parseFloat(latitude).toFixed(4),
      width: "20%",
      editable: true,
    },
    {
      title: "Дія",
      dataIndex: "Дія",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Зберегти
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Відмінити</a>
            </Popconfirm>
          </span>
        ) : (
          <div>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Редагувати
            </Typography.Link>
            <Popconfirm
              title="Видалити місто?"
              className="DeleteCity"
              cancelText="Ні"
              okText="Так"
              onConfirm={() => CityDelete(record)}
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
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        footer={() => <AddCitie cities={data} setCities={setData} />}
      />
    </Form>
  );
};

export default AdministrationSities;
