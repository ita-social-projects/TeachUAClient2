import { Form, Input,Checkbox, InputNumber,Select } from 'antd';
import React from "react";
import './addClubMain.scss'
/*
const layout = {
    labelCol: {
        span: 12,
    },
    wrapperCol: {
        span: 8,
    },

};*/
const {Option} = Select;
const categories=[
    {
        name:'Спортивні секції',
        id:0
    },
    {
        name:'Танці, хореографія',
        id:1
    },
    {
        name:'Студії раннього розвитку',
        id:2
    },
    {
        name:'Програмування, робототехніка, STEM',
        id:3
    },
    {
        name:'Художня студія, мистецтво, дизайн',
        id:4
    },
    {
        name:'Вокальна студія, музика, музичні інструменти',
        id:5
    },
    {
        name:'Акторська майстерність, театр',
        id:6
    },
    {
        name:'Особистісний розвиток',
        id:7
    },
    {
        name:'Журналістика, дитяче телебачення, монтаж відео, влогів',
        id:8
    },
    {
        name:'Центр розвитку',
        id:9
    }
]
const centers=[
    {
        name:'КЗПСО "Мистецька школа №4 м. Одеси"',
        id:0
    },
    {
        name:'Курси програмування IT-stat',
        id:1
    },
    {
        name:'Комунальний позашкільний навчальний заклад "Одеський будинок дитячої та юнацької творчості "Тоніка"',
        id:2
    },
    {
        name:'Академія талановитих дітей',
        id:3
    },
    {
        name:'Освітньо-мистецький центр "Шанс"',
        id:4
    }
]


class AddClubMain extends React.Component {

    onKeyPress = (event) => {
        const specialCharRegex = /^\d+$/;
        const pressedKey = String.fromCharCode(
            !event.charCode ? event.which : event.charCode
        );
        if (!specialCharRegex.test(pressedKey)) {
            event.preventDefault();
            return false;
        }
    };

    onFinish = (values) => {
        console.log(values);
    };
    render() {
        return (
            
            <Form
         
                name="basic"
                requiredMark={true}
                onFinish={this.onFinish}
                noValidate>
                <Form.Item name="name"
                    className="add-club-row add_club_decoration"
                    label="Назва"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Введіть назву гуртка",
                        },
                        {
                            required: false,
                            pattern: /^(?!\s)([\wА-ЩЬЮЯҐЄІЇа-щьюяґєії !"#$%&'()*+,\-./:;<=>?@[\]^_`{}~]){5,100}$/,
                            message: "Некоректна назва гуртка",
                        },
                        // {
                        //     required: false,
                        //     pattern: /^.*\S$/,
                        //     message: "Некоректна назва гуртка",
                        // }
                    ]}>
                    <Input className="add-club-input "
                        placeholder="Назва гуртка" />
                </Form.Item>
                <Form.Item name="categories"
                    className="add-club-row  add_club_decoration"
                    label="Категорія"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Це поле є обов'язковим"
                        }]}>
                    <Checkbox.Group className="add-club-categories">
                        {categories.map(category => <Checkbox
                         key={category.id} width={100} className='add-club-categories-item'   value={category.name}>{category.name}</Checkbox>)}
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item label="Вік дитини"
                       className="add-club-row add_club_decoration"
                       hasFeedback
                      // validateStatus={ageValidateStatus}
                       >
                <span className="add-club-age">
                    Від &nbsp;
                    <Form.Item name="ageFrom"
                               style={{margin: 0}}>
                        <InputNumber onChange={console.log(this.value)}
                                     //onKeyPress={onKeyPress}
                                     className="input-age"
                                     placeholder="2"
                                     min={2}
                                     max={17}
                                     type="number"/>
                    </Form.Item>
                    &nbsp;
                    до
                    &nbsp;
                    <Form.Item name="ageTo"
                               style={{margin: 0}}>
                        <InputNumber onChange={console.log(this.value)}
                                     onKeyPress={this.onKeyPress}
                                     className="input-age"
                                     id='addClubAge'
                                     placeholder="18"
                                     min={3}
                                     max={18}
                                     type="number"/>
                    </Form.Item>
                    &nbsp;
                    років
                </span>
            </Form.Item>
            <Form.Item name="centerId"
                    id='belongingCenter'
                       className="add-club-row add_club_decoration"
                       label="Приналежність до центру">
                <Select
                    className="add-club-select"
                    placeholder="Назва центру"
                    hasFeedback>
                    {centers.map(c => <Option key={c.id} value={c.id}>{c.name}</Option>)}
                </Select>
            </Form.Item>



            </Form>
        )
    }
}

export default AddClubMain