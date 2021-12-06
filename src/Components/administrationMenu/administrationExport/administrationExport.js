import React from "react";
import { Component } from "react";

const linkHost = 'http://localhost:3000';

class AdministrationExportData extends Component {
  render() {
    return (
      <div>
        <a href={linkHost, '/dev/admin/export-database.html'} download>
        </a>
      </div>
    );
  }
}

export default AdministrationExportData;
