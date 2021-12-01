import React from 'react';
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

class AddClubGalery extends React.Component{
state={
    previewVisible:false,
    previewTitle:'',
    fileList:[],
    previewImage:''
}
handleCancel=()=>{
    this.setState({previewVisible:!this.state.previewVisible})
}
handlePreview=()=>{
    this.setState({previewTitle:!this.state.previewTitle})
}
handleChange = ({ fileList }) => {
    this.setState({fileList:fileList})
 
}
uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Додати</div>
    </div>
);
    render(){
        return(
            <>
            <Upload
                accept="image/png,image/jpeg,image/jpg,image/svg"
                listType="picture-card"
                fileList={this.state.fileList}
                onPreview={this.handlePreview}
                //onChange={handleChange}
                beforeUpload={() => false}>
                {this.state.fileList.length >= 5 ? null : this.uploadButton}
            </Upload>

            <Modal
                visible={this.state.previewVisible}
                title={this.state.previewTitle}
                footer={null}
                onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
            </Modal>
      </>
        )
    }
}
export default AddClubGalery;