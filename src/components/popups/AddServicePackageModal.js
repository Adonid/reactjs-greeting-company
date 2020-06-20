import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class AddServicePackageModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            support:['Response/Mobile & PC'],
            no_support:['Chức năng giỏ hàng'],
            name:'',
            price:''
        }
    }

    // SET TAGS IS SUPPORT
    setSupport = e => this.setState({support: e});
    // END SET TAGS IS SUPPORT

    // SET TAGS IS NOT SUPPORT
    setNoSupport = e => this.setState({no_support: e});
    // END SET TAGS IS NOT SUPPORT

    // IS CHANGE
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANGE

    // HIDE MODAL
    hideModal = () => this.props.hideModalAdd(false)
    // END HIDE MODAL

    // SAVE
    sendData = () => {
        let data = {};
        data.name = this.state.name;
        data.price = this.state.price;
        data.support = this.state.support;
        data.no_support = this.state.no_support;

        this.props.getDataServicePackage(data);
        this.hideModal();
    }
    render() {
        return (
            <Modal show={this.props.add} size="lg" backdrop="static">
                <div className="modal-body pl-0 pr-0 pt-0 pb-0">
                    <div className="row">
                        <div className="col pl-0 pr-0 pt-0 pb-0">
                            <div className="main-card card">
                                <div className="card-header">
                                    <span className="d-block">
                                        <i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                                        Thêm gói cung cấp dịch vụ
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="title-gretting" className="col-sm-2 col-form-label">Tên gói:</label>
                                        <div className="col-sm-10">
                                            <input onChange={e => this.isChange(e)} name="name" id="title-gretting" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="sort-gretting" className="col-sm-2 col-form-label">Giá trị(x1000đ): </label>
                                        <div className="col-sm-10">
                                            <input onChange={e => this.isChange(e)} name="price" id="price-pakage" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="props-gretting" className="col-sm-2 col-form-label">Hỗ trợ các chức năng:</label>
                                        <div className="col-sm-10">
                                            <ReactTagInput 
                                                tags={this.state.support} 
                                                onChange={e => this.setSupport(e)}
                                                placeholder={'Nhập & nhấn Enter'}
                                            />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="props-gretting" className="col-sm-2 col-form-label">Không hỗ trợ chức năng:</label>
                                        <div className="col-sm-10">
                                            <ReactTagInput 
                                                tags={this.state.no_support} 
                                                onChange={e => this.setNoSupport(e)}
                                                placeholder={'Nhập & nhấn Enter'}
                                            />
                                        </div>
                                    </div>
                                    </PerfectScrollbar>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={() => this.hideModal()} type="button" className="mr-2 mt-1 btn btn-light">Canced</button>
                                    <button onClick={() => this.sendData()} className="mt-1 btn btn-success">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default AddServicePackageModal;