import React from "react";
import "./changeOwner.modules.scss";
import { Table } from "antd";
import owners from "./ownersData.json";
import ChangeOwnerFooter from "./ChangeOwnerFooter";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "10%",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Назва",
    dataIndex: "name",
    key: "name",
    width: "40%",
  },
  {
    title: "Власник",
    dataIndex: "age",
    key: "age",
    width: "25%",
  },
  {
    title: "Місто",
    dataIndex: "address",
    key: "address",
    width: "25%",
  },
];

class ChangeOwner extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
      };
    
      onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,

      ],
    };
    return (
      <div>
        <Table
          dataSource={owners}
          columns={columns}
          id="confirmationTable"
          bordered
          rowSelection={rowSelection}
          footer={()=><ChangeOwnerFooter/>}
        ></Table>
      </div>
    );
  }
}

export default ChangeOwner;
