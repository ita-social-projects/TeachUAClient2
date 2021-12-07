import React from "react";
import { Typography, Table } from "antd";
import { getUsersService } from "../../../Services/user";
import "./administration_users.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "4%",
    editable: false,
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Ім'я",
    dataIndex: "firstName",
    width: "13%",
    editable: false,
    defaultSortOrder: "ascend",
    sorter: (a, b) => a.firstName.length - b.firstName.length,
  },
  {
    title: "Прізвище",
    dataIndex: "lastName",
    width: "13%",
    editable: false,
    // sorter: (a, b) => a.lastName.length - b.lastName.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "17%",
    editable: false,
  },
  {
    title: "Номер тел.",
    dataIndex: "phone",
    width: "13%",
    editable: false,
  },
  {
    title: "Роль",
    dataIndex: "roleName",
    inputType: "select",
    width: "13%",
    editable: true,
  },
  {
    title: "Активний/неактивний",
    dataIndex: "status",
    inputType: "select",
    selectData: ["true", "false"],
    width: "11%",
    editable: true,
  },
  {
    title: "Дія",
    dataIndex: "action",
    width: "16%",
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

class Administration_users extends React.Component {
  state = {
    users: [],
  };

  getData = () => {
    getUsersService().then((response) => {
      let data = response.data.map((user) => {
        let obj = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email,
          password: user.password,
          roleName: user.roleName,
          urlLogo: user.urlLogo,
          status: user.status,
        };
        return obj;
      });
      this.setState({ users: data });
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="admin-users-body">
        <Table
          className="admin-users-table"
          dataSource={this.state.users}
          bordered
          columns={columns}
          footer={() => <div></div>}
        />
      </div>
    );
  }
}

export default Administration_users;
