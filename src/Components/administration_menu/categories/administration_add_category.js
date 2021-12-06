import React from "react";
import { Form, Input, Upload, Button } from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import "./administration_categories.scss";

class Administration_add_category extends React.Component {
  render() {
    return (
      <Form className="categories-form" name="basic" requiredMark={false}>
        <div className="add-categories-body">
          <Form.Item
            name="sortby"
            rules={[
              {
                required: true,
                message: "Введіть число для сортування",
              },
            ]}
          >
            <Input
              className="add-category-type-input"
              placeholder="Sort by"
            ></Input>
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Введіть назву категорії",
              },
            ]}
          >
            <Input
              className="add-category-type-input"
              placeholder="Назва категорії"
            ></Input>
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Введіть опис категорії",
              },
            ]}
          >
            <Input
              className="add-category-type-input"
              placeholder="Опис категорії"
            ></Input>
          </Form.Item>
          <Form.Item
            name="urlLogo"
            rules={[
              {
                required: true,
                message: "Завантажте лого",
              },
            ]}
          >
            <Upload
              name="image"
              maxCount={1}
              data={{ folder: `categories` }}
              headers={{ contentType: "multipart/form-data" }}
            >
              <span className="add-category-upload">
                <UploadOutlined className="icon" />
                Завантажити
              </span>
            </Upload>
          </Form.Item>
          <Form.Item
            name="backgroundColor"
            rules={[
              {
                required: true,
                message: "Введіть Background Color",
              },
            ]}
          >
            <div>
              <Input type="color" name="head" defaultValue="#FA8C16" />
              <label>Background Color</label>
            </div>
          </Form.Item>
          <Form.Item
            name="tagBackgroundColor"
            rules={[
              {
                required: true,
                message: "Введіть Tag Background Color",
              },
            ]}
          >
            <div>
              <Input type="color" name="head" defaultValue="#FA8C16" />
              <label htmlFor="head">Tag Background Color</label>
            </div>
          </Form.Item>
          <Form.Item
            name="tagTextColor"
            rules={[
              {
                required: true,
                message: "Введіть Tag Text Color",
              },
            ]}
          >
            <div>
              <Input type="color" name="head" defaultValue="#FA8C16" />
              <label htmlFor="head">Tag Text Color</label>
            </div>
          </Form.Item>
          <Button htmlType="submit" className="add-category-type-button">
            Добавити категорію
          </Button>
        </div>
      </Form>
    );
  }
}

export default Administration_add_category;
