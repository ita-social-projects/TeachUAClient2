import { Form, Input, InputNumber } from "antd";
import React from "react";
import PropTypes from "prop-types";

class EditableCell extends React.Component {
  /*= ({
    editing,
    dataIndex,
    title,
    inputType,
    children,
    ...restProps
  }) => */
  render() {
    const inputNode = this.props.inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...[this.props.restProps]}>
        {this.props.editing ? (
          <Form.Item
            name={this.props.dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${this.props.title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
            this.props.children
        )}
      </td>
    );
  }
}

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
