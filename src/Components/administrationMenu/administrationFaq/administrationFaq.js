import React, { Component } from "react";
import "antd/dist/antd.css";
import "./administrationFaq.scss";
import { Table, Space } from 'antd';


const dataSource = [
    {
      "id": 1,
      "title": "Як діяти, якщо вам відмовляють в інформації чи послугах українською мовою?",
      "text": "Спочатку варто спробувати владнати ситуацію на місці та попросити працівника обслуговувати вас державною мовою. - У разі відмови працівника, звернутись до керівництва закладу або на “гарячу лінію” установи. - У разі відмови або не забезпечення надання інформації (послуг) державною мовою необхідно зафіксувати факт відмови (за допомогою аудіо-, відео, письмового підтвердження очевидців тощо) та дані суб’єкта господарювання (назву, місцезнаходження, контакти суб’єкта)."
    },
    {
      "id": 2,
      "title": "Куди можна подавати скаргу?",
      "text": "Ви можете подати скаргу до Уповноваженого із захисту державної мови на поштову адресу 01001, м. Київ, провулок Музейний, 12, електронну скриньку skarha@mova-ombudsman.gov.ua або заповнити відповідну форму на сайті Уповноваженого https://mova-ombudsman.gov.ua/"
    },
    {
      "id": 3,
      "title": "Що має містити скарга?",
      "text": "У скарзі обов’язково має бути зазначено: прізвище, ім’я, по батькові, місце проживання особи, викладено суть скарги, який саме суб’єкт/працівник суб’єкта, коли, за якою адресою, яким чином порушив право скаржника. Рекомендуємо також додати докази на підтвердження."
    }
  ];

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

class AdministrationFaq extends Component{
    render(){
        return(
            <div className="table-faq-all">
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
        
    }
}

export default AdministrationFaq;