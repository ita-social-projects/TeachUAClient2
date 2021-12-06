import React from "react";
import "./confirmation.modules.scss";
import { Table } from "antd";



const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const columns =[
    {
        title :"ID" ,
        dataIndex:"firstName" ,
        key:"firstName",
        width: '10%',
        sorter: (a, b) => a.titl - b.title,
    },
    {
        title:"Назва гуртка" ,
        dataIndex:"lastName" ,
        key:"lastName",
        width: '40%'
    },
    {
        title:"Статус" ,
        dataIndex:"age" ,
        key:"age",
        width: '25%'
    },
    {
        title:"Дії" ,
        dataIndex:"address" ,
        key:"address",
        width: '25%'
    }
]

class Confirmation extends React.Component {
  render() {
    return (
      <Table dataSource={data} columns={columns} id="confirmationTable" bordered>
      
      </Table>
    );
  }
}

export default Confirmation;
