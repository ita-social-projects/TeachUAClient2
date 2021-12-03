import React from "react";
import "./changeOwner.modules.scss";
import { Table } from "antd";
import owners from "./ownersData.json";
import ChangeOwnerFooter from "./ChangeOwnerFooter";

const columns = [
  {
    title: "ID",
    dataIndex: "id",

    width: "10%",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Назва",
    dataIndex: "name",

    width: "40%",
  },
  {
    title: "Власник",
    dataIndex: "age",

    width: "25%",
  },
  {
    title: "Місто",
    dataIndex: "address",

    width: "25%",
  },
];

class ChangeOwner extends React.Component {
  state = {
    selectedRowKeys: [],
    owners: [], // Check here to configure the default column
  };
  componentDidMount() {
    let _owners = owners.map((element) => {
      element.key = element.id;
      return element;
    });
    this.setState({'owners':_owners});
  }

  onSelectChange = (selectedRowKeys, row) => {
    
    console.log(row);
    console.log("selectedRowKeys changed: ", selectedRowKeys);
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
          dataSource={this.state.owners}
          columns={columns}
          id="confirmationTable"
          bordered
          rowSelection={rowSelection}
          footer={() => <ChangeOwnerFooter />}
        ></Table>
      </div>
    );
  }
}

export default ChangeOwner;
