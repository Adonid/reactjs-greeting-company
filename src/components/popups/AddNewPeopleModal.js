import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import CropImage from '../contents/elements/CropImage';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';


class AddNewPeopleModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            base64Crop:'',
            image: '',
            name:'',
            tel:'',
            permission:'',
            email:''
        }
    }    

    // HIDE MODAL
    hideToModal = () => this.props.hideModalAdd(false);
    // END HIDE MODAL

    // GET IMAGE BASE64
    getBaseCrop = (base64) => this.setState({base64Crop: base64});
    // END GET IMAGE BASE64

    // IS CHANG
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANG

    // SEND DATA
    sendDataPeople = () => {
        let data = {};
        data.name = this.state.name;
        data.tel = this.state.tel;
        data.image = this.state.base64Crop;
        data.permission = this.state.permission;
        data.email = this.state.email;

        this.props.getDataPeople(data);
        this.hideToModal();
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
                                        Thêm mới thành viên
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                        <div className="position-relative form-group">
                                            <label htmlFor="name-user">Họ tên</label>
                                            <input onChange={(e) => this.isChange(e)} name="name" id="name-user" type="text" className="form-control" />
                                        </div>
                                        <div className="position-relative form-group">
                                            <label htmlFor="tel-user">Số điên thoại</label>
                                            <input onChange={(e) => this.isChange(e)} name="tel" id="tel-user" type="number" className="form-control" />
                                        </div>
                                        <div className="position-relative form-group">
                                            <label htmlFor="email-user">Địa chỉ email</label>
                                            <input onChange={(e) => this.isChange(e)} name="email" id="tel-user" type="email" className="form-control" />
                                        </div>
                                        <div className="position-relative form-group">
                                            <label htmlFor="authority">Quyền quản trị</label>
                                            <select onChange={e => this.isChange(e)} name="permission" id="authority" className="form-control">
                                                <option value={2}>Quản trị viết</option>
                                                <option value={1}>Adminstrator</option>
                                            </select>
                                        </div>
                                        <CropImage image={this.state.image} getBaseCrop={(base64) => this.getBaseCrop(base64)}/>
                                    </PerfectScrollbar>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={() => this.hideToModal()} type="button" className="mr-2 mt-1 btn btn-light">Canced</button>
                                    <button onClick={() => this.sendDataPeople()} className="mt-1 btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default AddNewPeopleModal;