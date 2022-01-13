import React from "react";
import { Component } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import "./administrationImportData.scss";
import { UPLOAD_EXCEL } from "../../../Services/Config/ApiConfig";
import { tokenToHeader } from "../../../Services/uploadService";

class AdministrationImportData extends Component {
  render() {
    return (
      <div className="import-data-content">
        <div className="load-excel-text">
          <p>Завантежте excel-файл для імпорту даних у БД:</p>{" "}
        </div>
        <div className="buttons-upload-send">
          <Upload className="upload-excel"
           name="excel"
           action={UPLOAD_EXCEL}
           maxCount={1}
           data={{ folder: `xls` }}
           headers={{
             contentType: "multipart/form-data",
             Authorization: tokenToHeader(),
           }}>
            <Button className="upload-excel" icon={<UploadOutlined />}>
              Завантажити excel-файл{" "}
            </Button>
          </Upload>
          <Button className="send-to-base">Відправити всі дані у БД </Button>
        </div>
        <div className="last-text">
          <p>
            *При співпадінні імен, існучі гуртки чи клуби будуть перезаписані
          </p>
        </div>
      </div>
    );
  }
}

export default AdministrationImportData;
