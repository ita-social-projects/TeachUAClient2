import { Modal } from "antd";
import React from "react";
import { Steps, Button, message } from 'antd';
import '../add_Club/add_Club.modules.scss'
import Add_Club_main from './Add_Club_main';
import Add_club_contact from "./Add_Club_contact";


const { Step } = Steps;


const steps = [
    {
        title: 'Основна інформація',
        content: 'First-content',
    },
    {
        title: 'Контакти',
        content: 'Second-content',
    },
    {
        title: 'Опис',
        content: 'Last-content',
    },
];

class Add_Club extends React.Component {
    state = {
        showModal: false,
        current: 0
    }
    next = () => {
        this.setState({ current: this.state.current + 1 });
    };

    prev = () => {
        this.setState({ current: this.state.current - 1 });
    };
    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };
    handleOk = () => {
        this.setState({ showModal: !this.state.showModal });
    };
    onFinish = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <button onClick={() => { this.handleOk(); }}>Open</button>
                <Modal
                    width={900}
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: !this.state.showModal }) }}
                    footer={null}>

                    <div className='steps'>
                        <div className='steps__number'>
                            <Steps
                                current={this.state.current}
                                direction="vertical"
                            >
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                        </div>
                        {/*<div className="steps-content">{steps[this.state.current].content}</div>*/}

                        <div className="steps-action">
                            <h3>Додати гурток</h3>
                            {this.state.current < steps.length - 1 && (
                                <div className='add_club_main'>
                                    {this.state.current === 0 && (
                                        <Add_Club_main />
                                    )}
                                     {this.state.current === 1 && (
                                        <Add_club_contact/>
                                    )}
                                    <div className='add_club_btn'>
                                        <Button
                                            type="primary"
                                            onClick={() => this.next()}
                                        >
                                            Наступний крок
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {this.state.current === steps.length - 1 && (
                                <div className='add_club_contact'>
                                   
                                    <div className='add_club_btn'>

                                        <Button
                                            className='add_club_btn'
                                            type="primary"
                                            onClick={() => message.success('Processing complete!')}>
                                            Наступний крок
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {this.state.current > 0 && (
                                <div className='add_club_btn'>
                                    <Button
                                        className='add_club_btn'
                                        style={{ margin: '0 8px' }}
                                        onClick={() => this.prev()}>
                                        Previous
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}


export default Add_Club;