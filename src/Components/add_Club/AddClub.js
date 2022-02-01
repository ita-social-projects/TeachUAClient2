import { Modal } from "antd";
import React from "react";
import { Steps, Button, message } from 'antd';
import '../add_Club/addClub.scss'
import AddClubMain from './addClubSteps/addClubMain/AddClubMain';
import AddClubContact from "./addClubSteps/addClubContact/AddClubContact";
import AddClubDescriptipn from "./addClubSteps/addClubDescrippion/AddClubDescriptipn";
import AddClubMobileslider from "./addClubMobileslider/AddClubMobileslider";



const { Step } = Steps;






class AddClub extends React.Component {
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
        this.handleOk();
        
    };
    media=()=>{
        if (this.viewport.width < 575) {
            if(this.state.current == 0)
            return { display: this.state.current == 0 ? "block" : "none" };
          }
    }

    render() {
        return (
            <div  className='addClub__modal_window '>
                <a onClick={() => { this.handleOk(); }}>Додати гурток</a>
                <Modal
                    className='addClub__modal modal-border'
                    id='addClub__modal'
                    width={1100}
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
                            <AddClubMobileslider current={this.state.current}/>
                        </div>
                        {/*<div className="steps-content">{steps[this.state.current].content}</div>*/}

                        <div className="steps-action">
                            <h3 className='addClub__headerBigscreen'>Додати гурток</h3>
                            {this.state.current === 0 && (
                                <div className='add_club_main'>
                                    <AddClubMain />
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
                                    <AddClubContact />
                                    <div className='add_club_btn'>

                                        <Button
                                            className='add_club_btn_back'
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

                                    <AddClubDescriptipn />


                                    <div className='add_club_btn'>
                                        <Button
                                            className='add_club_btn_back'
                                           
                                            onClick={() => this.prev()}>
                                            Назад
                                        </Button>

                                        <Button
                                            className='add_club_btn_finish'
                                            type="primary"
                                            onClick={() => message.success('Processing complete!'), this.onFinish}>
                                            Завершити
                                        </Button>
                                    </div>
                                </div>


                            )}
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}


export default AddClub;