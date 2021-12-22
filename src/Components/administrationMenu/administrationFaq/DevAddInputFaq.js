import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, message } from "antd";
import "./administrationFaq.scss";

const { TextArea } = Input;

class DevAddInputFaq extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <Form
        className="dev-input-FAQ"
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={({ title, text }) => {
          onAdd(title, text);
          message.success(title + ' успішно додано');
        }}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Введіть питання" }]}
        >
          <Input placeholder='Питання' />
        </Form.Item>

        <Form.Item
          name="text"
          rules={[{ required: true, message: "Введіть відповідь" }]}
        >
          <TextArea style={{ height: 100 }} placeholder='Відповідь' />
        </Form.Item>
        <div><Button className="dev-add-row-btn" type="primary" htmlType="submit">
          Додати
        </Button>
        </div>
      </Form>
    );
  }
}

DevAddInputFaq.propTypes = {
  onAdd: PropTypes.func,
};

export default DevAddInputFaq;