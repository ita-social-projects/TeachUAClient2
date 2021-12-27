import { Form, Input, InputNumber } from "antd";
import React from "react";
import PropTypes from "prop-types";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,

  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
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
  editing: PropTypes.func,
  dataIndex: PropTypes.number,
  title: PropTypes.string,
  inputType: PropTypes.any,
  selectData: PropTypes.func,
  uploadFolder: PropTypes.any,
  record: PropTypes.any,
  index: PropTypes.number,
  children: PropTypes.any,
  UPLOAD_IMAGE_URL: PropTypes.any,
  map: PropTypes.any,
  restProps:PropTypes.any
};
export default EditableCell;
