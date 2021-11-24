import React from "react";
import { Modal, Steps, Button } from "antd";
import AddCenterMain from "./addCenterMain";
import AddCenterContacts from "./addCenterContacts";
import AddCenterDescription from "./addCenterDescription";
import AddCenterClubs from "./addCenterClubs";
import AddCenterSiderMobile from "./addCenterSiderMobile";
import "./addCenter.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Основна інформація",
    content: "First-content",
  },
  {
    title: "Контакти",
    content: "Second-content",
  },
  {
    title: "Опис",
    content: "Third-content",
  },
  {
    title: "Гуртки",
    content: "Last-content",
  },
];

class AddCenter extends React.Component {
  state = {
    showModal: false,
  };

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  state = {
    current: 0,
  };

  next = () => {
    this.setState({ current: this.state.current + 1 });
  };

  prev = () => {
    this.setState({ current: this.state.current - 1 });
  };

  onChange = (current) => {
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <a className="btn-showmodal" onClick={this.handleModal}>
          Додати центр
        </a>
        <Modal
          className="addCenter-modal"
          width={900}
          title="Додати центр"
          visible={this.state.showModal}
          handleModal={this.handleModal}
          footer={null}
          onCancel={() => this.handleModal(false)}
          centered
        >
          <div className="addCenter">
            <div className="addCenter-sider">
              <Steps
                current={current}
                onChange={this.onChange}
                direction="vertical"
              >
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <AddCenterSiderMobile current={this.state.current} />
            </div>

            <div className="addCenter-content">
              <h3 className="modal-title">Додати центр</h3>
              {this.state.current < steps.length && (
                <div className="addCenter-main">
                  {this.state.current === 0 && <AddCenterMain />}
                  {this.state.current === 1 && <AddCenterContacts />}
                  {this.state.current === 2 && <AddCenterDescription />}
                  {this.state.current === 3 && <AddCenterClubs />}

                  {this.state.current < steps.length - 1 && (
                    <div>
                      <Button
                        className="addCenter-btn-next"
                        onClick={() => this.next()}
                      >
                        Наступний крок
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {this.state.current === 3 && (
                <div>
                  <Button className="addCenter-btn-next" htmlType="submit">
                    Завершити
                  </Button>
                </div>
              )}

              {this.state.current > 0 && (
                <div>
                  <Button
                    className="addCenter-btn-back"
                    onClick={() => this.prev()}
                  >
                    Назад
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddCenter;
