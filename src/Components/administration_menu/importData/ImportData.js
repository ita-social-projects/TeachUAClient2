import { Button } from "antd";
import { Form } from 'antd'
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import './importData.modules.scss'

class ImportData extends React.Component {
    render() {
        return (
            <div className='import-data-container'>
                <div className='import-data'>
                    <h3 className='import-data-header'>Завантежте excel-файл для імпорту даних у БД:</h3>
                    <div className='action-file'>
                        <Form>
                            <Button className='action-file-btn'>
                            <UploadOutlined />
                                Завантажити excel-файл</Button>
                            <Button
                                className='action-file-btn'
                            >Відправити всі дані у БД</Button>
                        </Form>

                    </div>

                    <p className='import-warning'>*При співпадінні імен, існучі гуртки чи клуби будуть перезаписані</p>
                </div>
            </div>
        )
    }
}

export default ImportData;