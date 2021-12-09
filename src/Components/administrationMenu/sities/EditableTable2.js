import React from "react";
import { useState, useEffect } from "react";
import { Table, Popconfirm, Form, Typography } from "antd";
import EditableCell from "./EditableCell";
import { getSitiesServise } from "../../../Services/cities";
let dataOrigin=[];

  getSitiesServise().then((response)=>{
       dataOrigin =response.data;
  
  })




const EditableTable2 = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');

  useEffect(() => {
   setData(dataOrigin)
  });


  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      longitude: '',
      address: '',
      latitude:'',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      console.log(row)
      const newData = [...data];
      console.log(newData)
      const index = newData.findIndex((item) => console.log('item.key='+JSON.stringify(key.id)+'      '+item) );
      console.log(index)
      

      
      console.log('key='+key)
      if (key.id > -1) {
        const item = newData[index];
        newData.splice(key.id, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
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
      title: 'operation',
      dataIndex: 'operation',
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
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
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
        inputType: col.dataIndex=== 'age' ? 'number' : 'text',
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
      />
    </Form>
  );
};

export default EditableTable2;
