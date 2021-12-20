import React, { Component } from "react";
import "antd/dist/antd.css";
import "./administrationFaq.scss";
import { Table, Space } from 'antd';
import { getQuestions } from "../../../Services/questions";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: 'Питання',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Відповідь',
        dataIndex: 'text',
        key: 'text',
    },
    {
        title: 'Дія',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Редагувати {record.name}</a>
                <a>Видалити</a>
            </Space>
        ),
    },
];

class AdministrationFaq extends Component {
    state = {
        questions: [],
    };

    getData = () => {
        getQuestions().then((response) => {
            let data = response.data.map((questions) => {
                let obj = {
                    id: questions.id,
                    title: questions.title,
                    text: questions.text,

                };
                return obj;
            });
            this.setState({ questions: data });
        });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="table-faq-all">
                <Table
                    className="table-faq-all"
                    dataSource={this.state.questions}
                    bordered
                    columns={columns} />
                    <DevAddInputFaq handleAdd={this.handleAdd} />
            </div>
        );

    }
}

export default AdministrationFaq;