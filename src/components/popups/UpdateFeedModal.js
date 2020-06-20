import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class UpdateFeedModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.default.id,
            name:this.props.default.name,
            short:this.props.default.short,
            linkimage:this.props.default.linkimage,
            linkpage:this.props.default.linkpage
        }
    }
    

    // HIDE MODAL
    hideModal = () => this.props.hideModalUpateFeed(false);
    // END HIDE MODAL

    // IS CHANGE
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANGE

    // SAVE EIDT
    sendData = () => {
        let data = {};
        data.id = this.state.id;
        data.name = this.state.name;
        data.short = this.state.short;
        data.linkimage = this.state.linkimage;
        data.linkpage = this.state.linkpage;

        this.props.updateDataFeed(data);
        this.hideModal();
    }
    // END SAVE EIDT

    render() {
        return (
            <Modal show={this.props.edit} size="lg" backdrop="static">
                <div className="modal-body pl-0 pr-0 pt-0 pb-0">
                    <div className="row">
                        <div className="col pl-0 pr-0 pt-0 pb-0">
                            <div className="main-card card">
                                <div className="card-header">
                                    <span className="d-block">
                                        <i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                                        Sửa cảm nhận của người dùng
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="ewew" className="col-sm-2 col-form-label">Tên người dùng:</label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} defaultValue={this.state.name} name="name" id="ewew" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="gfhgh" className="col-sm-2 col-form-label">Cảm nhận của người dùng: </label>
                                            <div className="col-sm-10">
                                                <textarea onChange={(e) => this.isChange(e)} defaultValue={this.state.short} name="short" className="form-control" id="gfhgh" rows={3} />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="uiut" className="col-sm-2 col-form-label">Link avatar: </label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} defaultValue={this.state.linkimage} name="linkimage" id="uiut" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="dfgk" className="col-sm-2 col-form-label">Link tới trang cá nhân: </label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} defaultValue={this.state.linkpage} name="linkpage" id="dfgk" type="text" className="form-control" />
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

export default UpdateFeedModal;