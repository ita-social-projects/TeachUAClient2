import React from 'react'
import { Form,  Upload,Input } from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import './addClubdescription.modules.scss'
import AddClubGalery from './AddClubGalery';

class AddClubDescriptipn extends React.Component{
    state={
        fileList:[]
    }
    onFinish = (values) => {
        console.log(values)
    }
    handleChange = () => {
        this.setState({fileList: this.state.fileList});
        //onChange(fileList);
    }
    render(){
        return(
            <Form
            name="basic"
            
            requiredMark={false}
            onFinish={this.onFinish}
            onSubmit={e => e.preventDefault()}
            className="description-step">
            
                <Form.Item name="urlLogo"
                className="add-club-row"
                label="Логотип"
                hasFeedback>
                <Upload
                    name="image"
                    accept="image/png,image/jpeg,image/jpg,image/svg"
                    maxCount={1}
                    headers={{ contentType: 'multipart/form-data' }}
                    showUploadList={false}
                    beforeUpload={() => false}
                >
                    <span className="add-club-upload"><UploadOutlined className="icon" />Завантажити лого</span>
                </Upload>
            </Form.Item>
            <Form.Item name="urlBackground"
                className="add-club-row"
                label="Обкладинка"
                hasFeedback>
                <Upload
                    name="image"
                    accept="image/png,image/jpeg,image/jpg,image/svg"
                    maxCount={1}
                    headers={{ contentType: 'multipart/form-data' }}
                    showUploadList={false}
                    beforeUpload={() => false}
                >
                    <span className="add-club-upload"><UploadOutlined className="icon" />Завантажити обкладинку</span>
                </Upload>
            </Form.Item>
          
            <Form.Item name="urlGallery"
                className="add-club-row"
                label="Галерея"
                hasFeedback>
                    <AddClubGalery/>
            </Form.Item>
            <Form.Item name="description"
                className="add-club-row"
                label="Опис"
                hasFeedback
                rules={[
                    {
                        required: true,
                        pattern: /^[А-Яа-яЇїІіЄєҐґa-zA-Z0-9()!"#$%&'*+\n, ,-.:\r;<=>?|@_`{}~^/[\]\\]{40,}$/,
                        message: "Некоректний опис гуртка"
                    },
                    {
                        required: false,
                        pattern: /^[А-Яа-яЇїІіЄєҐґa-zA-Z0-9()!"#$%&'*+\n, ,-.:\r;<=>?|@_`{}~^/[\]\\]{0,1500}$/,
                        message: "Опис гуртка задовгий"
                    }
                ]}
            >
                <Input.TextArea className="editor-textarea" style={{ height: 200 }} placeholder="Додайте опис гуртка" />
            </Form.Item>
            </Form>
        )
    }
}

export default AddClubDescriptipn