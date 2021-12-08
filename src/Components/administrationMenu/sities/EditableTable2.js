import React from "react";
import { Table, Popconfirm, Form, Typography } from "antd";
import EditableCell from "./EditableCell";
import PropTypes from "prop-types";
const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const [form] = Form.useForm();
class EditableTable2 extends React.Component {
  state={
    data:originData,
    editingKey:''
  }
  render() {
 
    
    const isEditing = (record) => record.key === this.state.editingKey;

    const edit = (record) => {
      form.setFieldsValue({
        name: "",
        age: "",
        address: "",
        ...record,
      });
      this.setState({editingKey: record.key});
    };

    const cancel = () => {
      this.setState({editingKey: ''});
    };

    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [this.state.data];//!!!!!!!!!!!!
        const index = newData.findIndex((item) => key === item.key);

        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          this.setState({data:newData});
          
          this.setState({editingKey: ''});
        } else {
          newData.push(row);
          this.setState({data:newData});
          this.setState({editingKey: ''});
        }
      } catch (errInfo) {
        console.log("Validate Failed:", errInfo);
      }
    };

    const columns = [
      {
        title: "ID",
        dataIndex: "name",
        width: "25%",
        editable: true,
      },
      {
        title: "name",
        dataIndex: "name",
        width: "15%",
        editable: true,
      },
      {
        title: "Довгота",
        dataIndex: "address",
        width: "40%",
        editable: true,
      },
      {
        title: "Широта",
        dataIndex: "address",
        width: "40%",
        editable: true,
      },
      {
        title: "Дія",
        dataIndex: "operation",
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Зберегти
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Відімінити</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={this.state.editingKey !== ""}
              onClick={() => edit(record)}
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
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
      <Form form={form} 
      component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={this.state.data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  }
}
EditableCell.propTypes = {
  editing: PropTypes.any,
  dataIndex: PropTypes.any,
  title: PropTypes.any,
  inputType: PropTypes.any,
  selectData: PropTypes.any,
  uploadFolder: PropTypes.any,
  record: PropTypes.any,
  index: PropTypes.any,
  children: PropTypes.any,
  UPLOAD_IMAGE_URL: PropTypes.any,
  map: PropTypes.any,
};
export default EditableTable2;
