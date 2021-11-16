import { Modal } from "antd";
import React from "react";
import { Steps, Button, message } from 'antd';
import '../add_Club/add_Club.modules.scss'
import Add_Club_main from './Add_Club_main';
import Add_club_contact from "./Add_Club_contact";
import Add_Club_description from "./add_Club_descrippion/Add_Club_descriptipn";
import Add_Club_Mobileslider from "./add_Club_Mobileslider/Add_Club_Mobileslider";



const { Step } = Steps;




/*const steps = [
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
];*/

class Add_Club extends React.Component {
    state = {
        showModal: false,
        current: 0,
        showModallocation: false,
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
    media=()=>{
        if (this.viewport.width < 575) {
            if(this.state.current == 0)
            return { display: this.state.current == 0 ? "block" : "none" };
          }
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.handleOk(); }}>Open</button>
                <Modal
                    className='addClub__modal'
                    width={900}
                    visible={this.state.showModal}
                    onCancel={() => { this.setState({ showModal: !this.state.showModal }) }}
                    footer={null}>
                    <h3 className='addClub__headerSmallscreen'>Додати гурток</h3>
                    <div className='steps'>
                        <div className='steps__number'>
                            <Steps
                                className="steps__items"
                                //progressDot={false}
                                current={this.state.current}
                            //direction="vertical"
                            >
                                <Step  title="Основна інформація" />
                                <Step  title="Контакти" />
                                <Step  title="Опис" />
                                {/*steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))*/}
                            </Steps>
                            <Add_Club_Mobileslider current={this.state.current}/>
                        </div>
                        {/*<div className="steps-content">{steps[this.state.current].content}</div>*/}

                        <div className="steps-action">
                            <h3 className='addClub__headerBigscreen'>Додати гурток</h3>
                            {this.state.current === 0 && (
                                <div className='add_club_main'>
                                    <Add_Club_main />
                                    <div className='add_club_btn'>
                                        <Button
                                            className='add_club_btn_next'
                                            type="primary"
                                            onClick={() => this.next()}
                                        >
                                            Наступний крок
                                        </Button>
                                    </div>
                                </div>
                            )}
                            {this.state.current === 1 && (
                                <div className='add_club_contact'>
                                    <Add_club_contact />
                                    <div className='add_club_btn'>

                                        <Button
                                            className='add_club_btn_back'
                                            style={{ margin: '0 8px' }}
                                            onClick={() => this.prev()}>
                                            Назад
                                        </Button>
                                        <Button
                                            className='add_club_btn_next'
                                            type="primary"
                                            onClick={() => this.next()}
                                        >
                                            Наступний крок
                                        </Button>
                                    </div>
                                </div>


                            )}
                            {this.state.current === 2 && (
                                <div className='add_club_description'>

                                    <Add_Club_description />


                                    <div className='add_club_btn'>
                                        <Button
                                            className='add_club_btn_back'
                                            style={{ margin: '0 8px' }}
                                            onClick={() => this.prev()}>
                                            Назад
                                        </Button>

                                        <Button
                                            className='add_club_btn_finish'
                                            type="primary"
                                            onClick={() => message.success('Processing complete!')}>
                                            Завершити
                                        </Button>
                                    </div>
                                </div>


                            )}

                            {/*this.state.current === steps.length - 1 && (
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
                            )*/}
                            {/*this.state.current > 0 && (
                                <div className='add_club_btn'>
                                    <Button
                                        className='add_club_btn'
                                        style={{ margin: '0 8px' }}
                                        onClick={() => this.prev()}>
                                        Previous
                                    </Button>
                                </div>
                            )*/}
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}


export default Add_Club;