import React from "react";
import "./areas.modules.scss";
import { Table,Typography} from 'antd';
import { getSitiesServise } from "../../../Services/areas";



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
    title: "Місто",
    dataIndex: "cityName",
 
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

class AdministrationAreas extends React.Component {
    state={
        areas:[]
    }
    getData=()=>{
        getSitiesServise().then((response)=>{
            let data = response.data;
            this.setState({areas:data})
        })
        console.log(this.state.areas)
    }
    componentDidMount(){
        this.getData();

    }
  render() {
    return (
      <Table
        id='sitiesTable'
        dataSource={this.state.areas}
        columns={columns}
        bordered
      ></Table>
    );
  }
}

export default AdministrationAreas;
