
import React from "react";
import './add_Club_contact.modules.scss'
import { Form, Input} from 'antd';

class Add_club_contact extends React.Component{
    render(){
        return(
            <Form>
                <Form.Item name="name"
                    className="add-club-row"
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
                    <Input className="add-club-input"
                        placeholder="Назва гуртка" />
                </Form.Item>
            </Form>
        )
    }
}

export default Add_club_contact