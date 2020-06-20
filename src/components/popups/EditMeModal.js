import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import CropImage from '../contents/elements/CropImage';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class EditMeModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:this.props.dataPeople.name,
            tel:this.props.dataPeople.tel,
            email:this.props.dataPeople.email,
            permission:this.props.dataPeople.permission,
            base64Crop:'',

            oldPass:'',
            newPass:'',
            error: false
        }
    }    

    // HIDE MODAL
    hideToModal = () => this.props.hideModal(false);
    // END HIDE MODAL

    // GET IMAGE BASE64
    getBaseCrop = base64 => this.setState({base64Crop: base64});
    // END GET IMAGE BASE64

    // IS CHANGe
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANGe

    // SEND DATA
    sendDataPeople = () => {
        let data = {};
        data.id = this.props.dataPeople.id;
        data.name = this.state.name;
        data.tel = this.state.tel;
        data.avatar = this.state.base64Crop;
        data.oldPass = this.state.oldPass;
        data.newPass = this.state.newPass;
        if(!data.name || !data.tel || !data.oldPass){
            this.setState({error: true});
            return false;
        }

        this.props.updateDataPeople(data);
        this.hideToModal();
        this.setState({error: false, oldPass:''});
    }
    // END SEND DATA
    render() {
        return (
            <Modal show={this.props.show} size="lg" backdrop="static">
                <div className="modal-body pl-0 pr-0 pt-0 pb-0">
                    <div className="row">
                        <div className="col pl-0 pr-0 pt-0 pb-0">
                            <div className="main-card card">
                                <div className="card-header">
                                    <span className="d-block">
                                        <i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                                        Thông tin của tôi
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                    <p className={"text-danger " + (this.state.error ? 'd-block' : 'd-none')}>Tên, số điện thoại và mật khẩu cũ không được để trống!</p>
                                    <div className="position-relative form-group">
                                        <label htmlFor="name-user">Họ tên</label>
                                        <input onChange={(e) => this.isChange(e)} defaultValue={this.state.name} name="name" id="name-user" type="text" className="form-control form-control-sm" />
                                    </div>
                                    <div className="position-relative form-group">
                                        <label htmlFor="tel-user">Số điện thoại</label>
                                        <input onChange={(e) => this.isChange(e)} defaultValue={this.props.dataPeople.tel} name="tel" id="tel-user" type="number" className="form-control form-control-sm" />
                                    </div>
                                    <div className="position-relative form-group">
                                        <label htmlFor="email-user">Địa chỉ email</label>
                                        <input defaultValue={this.state.email} name="email" id="tel-user" type="email" className="form-control form-control-sm" disabled />
                                    </div>
                                    <div className="position-relative form-group">
                                        <label htmlFor="authority">Quyền quản trị</label>
                                        <select type="select" disabled name="permission" id="authority" className="custom-select">
                                            <option>{this.state.permission}</option>
                                        </select>
                                    </div>

                                    <CropImage image={''} getBaseCrop={base64 => this.getBaseCrop(base64)} short="Upoad và crop ảnh avatar của bạn." />

                                    <div className="position-relative form-group">
                                        <label htmlFor="pass-old-user">Mật khẩu cũ(*)</label>
                                        <input onChange={(e) => this.isChange(e)} name="oldPass" id="pass-old-user" type="password" className="form-control form-control-sm" />
                                    </div>
                                    <div className="position-relative form-group">
                                        <label htmlFor="new-pass-user">Mật khẩu mới</label>
                                        <input onChange={(e) => this.isChange(e)} name="newPass" id="new-pass-user" type="password" className="form-control form-control-sm" />
                                    </div>
                                </PerfectScrollbar>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={() => this.hideToModal()} type="button" className="mr-2 mt-1 btn btn-light">Thoát</button>
                                    <button onClick={() => this.sendDataPeople()} className="mt-1 btn btn-success">Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default EditMeModal;