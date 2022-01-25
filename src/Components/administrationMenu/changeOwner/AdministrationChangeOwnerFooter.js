import React from "react";
import './ChangeOwnerFooter.scss'
import {Button, Form, Select} from "antd";
import users from './usersData.json'
const {Option} = Select;

class AdministrationChangeOwnerFooter extends React.Component{
    render(){
        return(
            <div>
                <Form name="basic"
                  requiredMark={false}
                  >
                <Form.Item
                    name="email">
                    <Select
                        showSearch
                        style={{width: 200}}
                        placeholder="Select a person"
                        optionFilterProp="children" >
                        {users.map(user => <Option key={user.email} value={user.email}>{user.email}</Option>)}
                    </Select>
                </Form.Item>
                <Button htmlType="submit" className="flooded-button"
                        onClick={()=>console.log(this.value)}>Змінити</Button>
            </Form>
            </div>
        )
    }
}
export default AdministrationChangeOwnerFooter