import React from "react";
import {Button, Form, Input, Upload} from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";


class Categories extends React.Component {
    render (){
        return (
            <div>
                <a href="/categories" className="btn-showPage">
                    Категорії
                </a>

                <Form className="add-category-type"
                  name="basic"
                  requiredMark={false}>
                <Form.Item name="sortby"
                           rules={[{
                               required: true,
                               message: "Введіть число для сортування"
                           }]}>
                    <Input className="add-category-type-input"
                           placeholder="Sort by"  >
                    </Input>
                </Form.Item>
                <Form.Item name="name"
                           rules={[{
                               required: true,
                               message: "Введіть назву категорії"
                           }]}>
                    <Input className="add-category-type-input"
                           placeholder="Назва категорії">
                    </Input>
                </Form.Item>
                <Form.Item name="description"
                           rules={[{
                               required: true,
                               message: "Введіть опис категорії"
                           }]}>
                    <Input className="add-category-type-input"
                           placeholder="Опис категорії">
                    </Input>
                </Form.Item>
                <Form.Item name="urlLogo"
                           rules={[{
                               required: true,
                               message: "Завантажте лого"
                           }]}>
                    <Upload
                        name="image"
                        maxCount={1}
                        data={{folder: `categories`}}
                        headers={{contentType: 'multipart/form-data'}}>
                        <span className="add-category-upload"><UploadOutlined className="icon" />Завантажити</span>
                    </Upload>
                </Form.Item>
                <Form.Item name="backgroundColor"
                           rules={[{
                               required: true,
                               message: "Введіть Background Color"
                           }]}>
                    <div>
                        <Input type="color" name="head" defaultValue="#FA8C16"/>
                        <label>Background Color</label>
                    </div>
                </Form.Item>
                <Form.Item name="tagBackgroundColor"
                           rules={[{
                               required: true,
                               message: "Введіть Tag Background Color"
                           }]}>
                    <div>
                        <Input type="color" name="head" defaultValue="#FA8C16"/>
                        <label htmlFor="head">Tag Background Color</label>
                    </div>
                </Form.Item>
                <Form.Item name="tagTextColor"
                           rules={[{
                               required: true,
                               message: "Введіть Tag Text Color"
                           }]}>
                    <div>
                        <Input type="color" name="head" defaultValue="#FA8C16"/>
                        <label htmlFor="head">Tag Text Color</label>
                    </div>
                </Form.Item>
                <Button htmlType="submit" className="flooded-button add-contact-type-button">Добавити категорію</Button>
            </Form>
            </div>
        )
    }
}


export default Categories;