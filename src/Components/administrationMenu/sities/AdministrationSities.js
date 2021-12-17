import React from "react";
import { useState, useEffect } from "react";
import { Table, Popconfirm, Form, Typography } from "antd";
import EditableCell from "./EditableCell";
//import AddCitie from "./AddSitie";
import './sities.modules.scss'
import { getSitiesServise,addCity} from "../../../Services/cities";

const AdministrationSities = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const data2={
    name:'Винники3',
    longitude: 49.81417330421448, 
    latitude: 24.135502529616105
  }
  /*const getCityId =(id)=>{
    getCity(id).then(response=>{
      console.log(response.data);
    })
  }*/
  
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
    addCity(data2);
    try {
      const row = await form.validateFields();
      console.log(`${row}`);
      const newData = [...data];
      console.log(newData);

      const index = newData.findIndex((item) => {
       return key.id === item.id
      }
        );
      console.log(index);

      console.log(key);
      if (key.id > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        //newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const CityDelete = (key) => {
   console.log(key);
   
    setData(data.filter((item) =>  {
      return key.id !== item.id
     }))
     
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
      title: "operation",
      dataIndex: "operation",
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
          <Popconfirm title="Sure to delete?" 
          className="DeleteCity"
          onConfirm={() => CityDelete(record)}>
              <a>Видалити</a>
            </Popconfirm>
       </div>
        
        );
      }
    }
    
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
        //footer={<AddCitie cities={data} setCities={setData}/>}
      />
      
    </Form>
  );
};

export default AdministrationSities;
