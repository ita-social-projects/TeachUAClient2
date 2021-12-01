import React from "react";
import { Component } from "react";

class AdministrationExportData extends Component {
  render() {
    return (
      <div>
        <a
          href="http://localhost:3000/dev/admin/export-database.html"
          download
        ></a>
      </div>
    );
  }
}

export default AdministrationExportData;
