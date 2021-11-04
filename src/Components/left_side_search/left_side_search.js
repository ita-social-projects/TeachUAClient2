import React from 'react';
import { Component } from 'react';
import './left_side_search.css';
import "antd/dist/antd.css";
import no_data from './image/no_data.png'
import { Radio, Select, Checkbox, Col, Input } from "antd";
const { Option } = Select;

class LeftSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event });
    }

    render() {
        return (
            <div className='advancedSearch'>
                <div className='advancedSearchMain'>
                    <h1 className='advancedSearchHeader'>Розширений пошук</h1>
                    <form>
                        <p className='advancedSearchTitle'>Гурток/Центр</p>
                        <Radio.Group onChange={this.onChange}>
                            <Radio value={1}><span className='advancedSearchSpan'>Гурток</span></Radio><br />
                            <Radio value={2}><span className='advancedSearchSpan'>Центр</span></Radio>
                        </Radio.Group>
                        <p className='advancedSearchTitle'>Місто</p>
<<<<<<< HEAD
                        <Select placeholder="Виберіть місто" className='selectStyle'>
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
=======
                        <label>
                            <Select className='selectStyle' value={this.state.value} onChange={this.handleChange} placeholder='Виберіть місто...' allowClear>
                                <Option value="Київіі">Київ</Option>
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

>>>>>>> develop
                        <p className='advancedSearchTitle'>Район міста</p>
                        <Select placeholder="Виберіть місто" className='selectStyle'>
                            <Option value="kyiv"><img className='imageNoData' src={no_data} /></Option>
                        </Select>
                        <p className='advancedSearchTitle'>Найближча станція метро</p>
                        <Select placeholder="Виберіть місто" className='selectStyle'>
                            <Option value="kyiv"><img className='imageNoData' src={no_data} /></Option>
                        </Select>
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
                        <Input style={{
                            width: 43,
                            height: 43,
                            borderRadius: 6,
                            textAlign: 'center'
                        }} /><span className='advancedSearchSpanYears'>років</span>
                    </form>
                </div>
<<<<<<< HEAD
            </div>
=======


            </div>


>>>>>>> develop
        )
    }
}

<<<<<<< HEAD
export { LeftSearch };
=======
export { LeftSearch };

>>>>>>> develop
