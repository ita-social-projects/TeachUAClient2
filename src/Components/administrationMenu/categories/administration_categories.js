import React from "react";
import { Typography, Table, Image } from "antd";
import { getCategoriesService } from "../../../Services/category";
import Administration_add_category from "./administration_add_category";
import "./administration_categories.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "3%",
    editable: false,
  },
  {
    title: "sortBy",
    dataIndex: "sortby",
    width: "6%",
    editable: true,
  },
  {
    title: "Назва",
    dataIndex: "name",
    width: "15%",
    editable: true,
    render: (name, row) => (
      <div
        className="ant-tag tag"
        style={{
          backgroundColor: row.tagBackgroundColor,
          color: row.tagTextColor,
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          borderRadius: "10px",
        }}
      >
        {name}
      </div>
    ),
  },
  {
    title: "Опис",
    dataIndex: "description",
    width: "25%",
    editable: true,
  },
  {
    title: "Логотип",
    dataIndex: "urlLogo",   
    width: "7%",
    inputType: "upload",
    uploadFolder: "categories",
    editable: true,
    render: (urlLogo, row) => (
      <Image
        style={{ backgroundColor: row.backgroundColor }}
        width={50}
        height={50}
        src={`${process.env.PUBLIC_URL}` + urlLogo}
      />
    ),
  },
  {
    title: "Background Color",
    dataIndex: "backgroundColor",
    width: "10%",
    inputType: "color",
    editable: true,
  },
  {
    title: "Tag Background Color",
    dataIndex: "tagBackgroundColor",
    inputType: "color",
    width: "10%",
    editable: true,
  },
  {
    title: "Tag Text Color",
    dataIndex: "tagTextColor",
    inputType: "color",
    width: "10%",
    editable: true,
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

class Administration_categories extends React.Component {
  state = {
    categories: [],
  };

  getData = () => {
    getCategoriesService().then((response) => {
      let data = response.data.map((category) => {
        let obj = {
          id: category.id,
          sortby: category.sortby,
          name: category.name,
          description: category.description,
          urlLogo: category.urlLogo,
          backgroundColor: category.backgroundColor,
          tagBackgroundColor: category.tagBackgroundColor,
          tagTextColor: category.tagTextColor,
        };
        return obj;
      });
      this.setState({ categories: data });
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="categories-body">
        <div className="table-header"></div>
        <Table
          className="categories-table"
          dataSource={this.state.categories}
          bordered
          columns={columns}
          footer={() => <Administration_add_category />}
        />
      </div>
    );
  }
}

export default Administration_categories;
