import {Form, Input, InputNumber, Select, Upload} from "antd";
import React from "react";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import PropTypes from "prop-types";
import "./editableCell.scss"

const { TextArea } = Input;

const EditableCell = ({editing, dataIndex, title, inputType, selectData, uploadFolder, children, ...restProps}) => {
    
    let inputNode;

    switch (inputType) {
        case 'upload':
            inputNode = <Upload
                name="image"
                maxCount={1}
                data={{folder: uploadFolder}}
                
            >
                <span className="upload"><UploadOutlined className="icon"/>Завантажити</span>
            </Upload>;
            break;
        case 'textarea':
            inputNode = <TextArea rows={4}
                                  placeholder="Текст"/>;
            break;
        case 'number':
            inputNode = <InputNumber/>;
            break;
        case 'select': {
            inputNode = <Select showSearch
                                options={selectData.map(data => ({value: data}))}/>;
                                console.log(selectData);
                                
            break;
        }
        case 'color': {
            inputNode = <Input type="color" />
            break;
        }
        default: {
            inputNode = <Input/>;
            break;
        }
    }

    return (
        <td {...restProps} className="editing-cell">
            {editing ? (
                <Form.Item
                className="editing-item"
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `Заповніть поле ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

EditableCell.propTypes = {
        editing: PropTypes.any,
        dataIndex: PropTypes.any,
        title: PropTypes.any,
        inputType: PropTypes.any,
        selectData: PropTypes.any,
        uploadFolder: PropTypes.any,
        record: PropTypes.any,
        index: PropTypes.any,
        children: PropTypes.any,
        UPLOAD_IMAGE_URL: PropTypes.any,
        map: PropTypes.any,
        restProps:PropTypes.any
      };

export default EditableCell;