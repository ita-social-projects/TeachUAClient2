import React from "react";
import './ChangeOwnerFooter.modules.scss'
import {Button, Form, Select} from "antd";
import users from './usersData.json'
const {Option} = Select;
class ChangeOwnerFooter extends React.Component{
    render(){
        return(
            <div>
                <Form name="basic"
                  requiredMark={false}
                  //onFinish={onFinish}
                  >
                <Form.Item
                    name="email">
                    <Select
                        showSearch
                        style={{width: 200}}
                        placeholder="Select a person"
                        optionFilterProp="children" >
                        {/*onChange={(event, value) => {
                            console.log(value);
                            setEmail(value)
                        }}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }*/}
                    
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
export default ChangeOwnerFooter