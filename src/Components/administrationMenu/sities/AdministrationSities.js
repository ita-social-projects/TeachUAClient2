import React from "react";
import "./sities.modules.scss";
import { Table,Typography} from 'antd';
import { getSitiesServise } from "../../../Services/cities";



const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "10%",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Довгота",
      dataIndex: "longitude",
      render: (longitude) => Number.parseFloat(longitude).toFixed(4),
      width: "20%",
    },
    {
      title: "Широта",
      dataIndex: "latitude",
      render: (latitude) => Number.parseFloat(latitude).toFixed(4),
      width: "20%",
    },
    {
        title: "Дія",
        dataIndex: "action",
        width: "14%",
        render: () => {
          return (
            <div>
              <span className="action-btn">
                <Typography.Link>Редагувати</Typography.Link>
              </span>
              <span>
                <Typography.Link>Видалити</Typography.Link>
              </span>
            </div>
          );
        },
      },
   
  ];

class AdministrationSities extends React.Component {
    state={
        sities:[]
    }
    getData=()=>{
        getSitiesServise().then((response)=>{
            let data = response.data;
            this.setState({sities:data})
        })
        console.log(this.state.sities)
    }
    componentDidMount(){
        this.getData();

    }
  render() {
    return (
      <Table
        id='sitiesTable'
        dataSource={this.state.sities}
        columns={columns}
        bordered
      ></Table>
    );
  }
}

export default AdministrationSities;
