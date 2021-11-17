import React from "react";
import {Modal, Steps, Button} from 'antd';
import AddCenter_main from './addCenter_main';
import AddCenter_contacts from "./addCenter_contacts";
import AddCenter_description from "./addCenter_description";
import AddCenter_clubs from "./addCenter_clubs";
import AddCenter_siderMobile from "./addCenter_siderMobile";
import "./addCenter.scss";


const {Step} = Steps;

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
      content: 'Third-content',
  },
  {
    title: 'Гуртки',
    content: 'Last-content',
  },
];

    

class AddCenter extends React.Component  { 
    state = {
      showModal: false
      }
     
      handleModal = () => {
         this.setState({showModal: !this.state.showModal});
      } 
      state = {
        current: 0,
      };

      next = () => {
        this.setState({ current: this.state.current + 1 });
      };

      prev = () => {
        this.setState({ current: this.state.current - 1 });
      };
    
      onChange = current => {
        this.setState({ current });
      };    
       
      render() {    
      const { current } = this.state;      
      return (
        <div>
        <a onClick={this.handleModal}>Додати центр</a>
            <Modal  
            className="addCenter-modal"
            width={900}
            title="Додати центр"
            visible={this.state.showModal} 
            handleModal={this.handleModal}
            footer={null} 
            onCancel= {() => this.handleModal(false)} 
            centered> 
              <div className="addCenter">
                  <div className="addCenter-sider">         
                    <Steps current={current} onChange={this.onChange}
                          direction="vertical">
                          {steps.map(item => (
                                      <Step key={item.title} title={item.title} />
                                  ))}
                    </Steps>
                    <AddCenter_siderMobile current = {this.state.current}/>
                  </div>
                  
                  <div className="addCenter-content">
                  <h3 className="modal-title">Додати центр</h3>
                      {this.state.current < steps.length && (
                        <div className="addCenter-main">
                          {this.state.current === 0 && (
                            <AddCenter_main/>
                          )}
                          {this.state.current === 1 && (
                            <AddCenter_contacts/>
                          )}
                          {this.state.current === 2 && (
                            <AddCenter_description/>
                          )}
                          {this.state.current === 3 && (
                            <AddCenter_clubs/>
                          )}

                          {this.state.current < steps.length - 1 && (
                          <div>
                            <Button
                              className="addCenter-btn-next"
                              onClick={() => this.next()}>
                                Наступний крок
                            </Button>
                          </div>
                          )}
                        </div>
                      )}

                        {this.state.current === 3 && (
                          <div>
                              <Button
                                className="addCenter-btn-next"
                                htmlType="submit">
                                  Завершити    
                              </Button>
                          </div>
                        )}
                            
                        {this.state.current > 0 && (
                          <div>
                              <Button
                                className="addCenter-btn-back"
                                onClick={() => this.prev()}>
                                  Назад    
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

export default AddCenter;