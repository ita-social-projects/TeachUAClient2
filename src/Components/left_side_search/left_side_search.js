import React from 'react';
import { Component } from 'react';
import './left_side_search.scss';
import "antd/dist/antd.css";
import no_data from './image/no_data.png'
import { Radio, Select, Checkbox, Col, Input } from "antd";
const { Option } = Select;

class LeftSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }

    }
    toggleRadioChange = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <div className='advancedSearch'>
                <div className='advancedSearchMain'>
                    <h1 className='advancedSearchHeader'>Розширений пошук</h1>
                    <form>
                        <p className='advancedSearchTitle'>Гурток/Центр</p>
                        <Radio.Group onChange={this.onChange}>
                            <Radio onClick={() => { this.setState({ show: true }) }} value={1}><span className='advancedSearchSpan' checked>Гурток</span></Radio><br />
                            <Radio onClick={this.toggleRadioChange} value={2}><span className='advancedSearchSpan'>Центр</span></Radio>
                        </Radio.Group>
                        <p className='advancedSearchTitle'>Місто</p>
                        <label>
                            <Select className='selectStyle' placeholder='Виберіть місто...' allowClear>
                                <Option value="kyiv">Київ</Option>
                                <Option value="kharkiv">Харків</Option>
                                <Option value="dnipro">Дніпро</Option>
                                <Option value="odesa">Одеса</Option>
                                <Option value="zaporizzhya">Запоріжжя</Option>
                                <Option value="kropyvnytskyi">Кропивницький</Option>
                                <Option value="herson">Херсон</Option>
                                <Option value="mykolaiv">Миколаїв</Option>
                                <Option value="sumy">Суми</Option>
                                <Option value="mariupol">Маріуполь</Option>
                                <Option value="chernihiv">Чернігів</Option>
                                <Option value="poltava">Полтава</Option>
                                <Option value="kremenchuk">Кременчук</Option>
                                <Option value="cherkasy">Черкаси</Option>
                                <Option value="without_location">Без локації</Option>
                            </Select>
                        </label>
                        <p className='advancedSearchTitle'>Район міста</p>
                        <Select placeholder="Виберіть місто" className='selectStyle'>
                            <Option value="kyiv"><img className='imageNoData' src={no_data} /></Option>
                        </Select>
                        <p className='advancedSearchTitle'>Найближча станція метро</p>
                        <Select placeholder="Виберіть місто" className='selectStyle'>
                            <Option value="kyiv"><img className='imageNoData' src={no_data} /></Option>
                        </Select>
                        {this.state.show ?
                            <div>
                                <p className='advancedSearchTitle'>Ремоут</p>
                                <Checkbox.Group>
                                    <Col className='rowStyle'>
                                        <Checkbox value="online"><span className='advancedSearchSpan'>Доступний онлайн</span></Checkbox>
                                    </Col>
                                </Checkbox.Group>
                                <p className='advancedSearchTitle'>Категорії</p>
                                <Checkbox.Group>
                                    <Col className='colStyle'>
                                        <Checkbox value="sport"><span className='advancedSearchSpan'>Спортивні секції</span></Checkbox>
                                        <Checkbox value="dance"><span className='advancedSearchSpan'>Танці, хореографія</span></Checkbox>
                                        <Checkbox value="studio"><span className='advancedSearchSpan'>Студії раннього розвитку</span></Checkbox>
                                        <Checkbox value="programming"><span className='advancedSearchSpan'>Програмування, робототехніка, STEM</span></Checkbox>
                                        <Checkbox value="design"><span className='advancedSearchSpan'>Художня студія, мистецтво, дизайн</span></Checkbox>
                                        <Checkbox value="music"><span className='advancedSearchSpan'>Вокальна студія, музика, музичні інструменти</span></Checkbox>
                                        <Checkbox value="theatre"><span className='advancedSearchSpan'>Акторська майстерність, театр</span></Checkbox>
                                        <Checkbox value="yourself"><span className='advancedSearchSpan'>Особистісний розвиток</span></Checkbox>
                                        <Checkbox value="tv"><span className='advancedSearchSpan'>Журналістика, дитяче телебачення, монтаж відео, влогів</span></Checkbox>
                                        <Checkbox value="centr_development"><span className='advancedSearchSpan'>Центр розвитку</span></Checkbox>
                                        <Checkbox value="video"><span className='advancedSearchSpan'>Журналістика, дитяче телебачення, монтаж відео</span></Checkbox>
                                        <Checkbox value="other"><span className='advancedSearchSpan'>Інше</span></Checkbox>
                                    </Col>
                                </Checkbox.Group>
                                <p className='advancedSearchTitle'>Вік дитини</p>
                                <Input className='test' />
                                <span className='advancedSearchSpanYears'>років</span>
                            </div> : null}
                            
                    </form>
                    <div className='choice_btn_div'>
                            <button className='button_after_form_clear'><span className='choice_btn_clear'>Очистити</span></button>
                            <button className='button_after_form_check'><span className='choice_btn_chech'>Застосувати</span></button>
                            </div>
                </div>
                
            </div>
        )
    }
}

export { LeftSearch };
