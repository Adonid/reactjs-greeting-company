import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import AnImageUpload from './AnImageUpload';
import ImageUpload from '../../dataTest/imagesUpload.json';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class UploadImagePostModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            // tat ca anh ban dau
            images: ImageUpload,
            // Key cua anh duoc chon
            imageSelected:false,
            // Cho phep nhap OK anh
            enableOK: 'disabled',
            // Data base64 cua anh duoc up len
            base64:''
        }
    }

    // SHOW IMAGES TO MODAL
    showImagesToModal = () => this.state.images.map((item, k) => <AnImageUpload key={k} IdImage={k} image={item.image} getImageSelect={(id) => this.getImageSelect(id)} getKeyImage={(i) => this.getKeyImage(i)}/>);
    // END SHOW IMAGES TO MODAL

    // CANCED MODAL
    changeModal = () => {
        this.props.hideModal(false);
        // Khong cho phep OK
        this.setState({enableOK: 'disabled'});
    };    
    // END CANCED MODAL

    // EVENT UPLOAD IMAGE
    uploadImage = e => {
        let file = e.target.files;
        let type = file[0].type;
        if (file && file.length > 0) {
            if(type==='image/png' || type==='image/jpg' || type==='image/jpeg' || type==='image/gif'){
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                        this.setState({base64: reader.result});
                        // Dua anh upload ra giao dien
                        const newImage = {image: this.state.base64};
                        this.setState({images: [...this.state.images, newImage]});
                        // Upload anh len server
                        //...
                });
                reader.readAsDataURL(file[0]);
            }
        }
        
    }
    // END EVENT UPLOAD IMAGE

    // GET IMAGE IS SELECTED
    getImageSelect = (id) => {
        this.setState({
            imageSelected: id,
            enableOK:''
        });
    }
    // END GET IMAGE IS SELECTED
 
    // REMOVE IMAGE
    getKeyImage = (key) => {        
        const images_update = this.state.images.filter((items, k) => k !== key);
        this.setState({images: images_update, enableOK:'disabled'});
        // send images_update to server to update
        //...
    }
    // END REMOVE IMAGE

    // CHOOSE IMAGE TO QUILL
    sendDataToQuill = () => {
        // Lay url of image from ID image
        this.props.getImageUrl('http://somethingaboutme.info/upload/images/8l4vop88x0.png');

        this.changeModal();
    }
    // END CHOOSE IMAGE TO QUILL
    
    render() {
        return(
                <Modal show={this.props.show} size="lg" backdrop="static">
                    <div className="modal-body pl-0 pr-0 pt-0 pb-0">
                        <div className="row">
                            <div className="col-md-12 pl-0 pr-0 pt-0 pb-0">
                                <div className="main-card card">
                                    <div className="card-body bg-light">
                                    <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                            <div className="row">
                                                <div className="col-sm-2 border-right">
                                                    <button className="btn-icon btn-icon-only btn btn-info btn-block">
                                                        <input onChange={(event) => this.uploadImage(event)} type="file" className="position-absolute w-100 fixed-top fixed-bottom" accept="image/*" style={{opacity: 0}}/>
                                                        <i className="pe-7s-upload btn-icon-wrapper"> </i> Upload image
                                                    </button>
                                                    <p>
                                                    <small className="text-mute">Upload ảnh và lưu trữ trên đám mây, bạn có thể lựa chọn cho nội dung bài viết hoặc xóa.</small>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <div className="app-page-title ml-0 mr-0 mb-4 mt-0 pl-0 pr-0 pb-3 pt-0 bg-light border-bottom">
                                                    <div className="page-title-wrapper">
                                                        <div className="page-title-heading">
                                                        <div className="page-title-icon">
                                                            <i className="pe-7s-cloud-upload icon-gradient bg-primary" />
                                                        </div>
                                                        <div>Trình upload ảnh
                                                            <div className="page-title-subheading">Upload ảnh nội dung bài viết và lưu trữ trên đám mây của bạn.
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="scroll-area-lg">
                                                        <div className="scrollbar-container ps--active-y">
                                                            <div className="row">
                                                                
                                                                {this.showImagesToModal()}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </PerfectScrollbar>
                                    </div>
                                    <div className="d-block text-right card-footer bg-light">
                                        <button onClick={() => this.sendDataToQuill()} className={"mr-2 btn-icon btn-icon-only btn btn-primary " + this.state.enableOK} tabIndex="-1" aria-disabled="true">
                                            <i className="pe-7s-check btn-icon-wrapper"> </i> OK
                                        </button>
                                        <button className="btn-wide btn btn-secondary" type="button" onClick={()=>this.changeModal()}>Canced</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
        );
    }
}

export default UploadImagePostModal;