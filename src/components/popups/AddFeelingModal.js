import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class AddFeelingModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            short:'',
            linkimage:'',
            linkpage:''
        }
    }
    

    // HIDE MODAL
    hideModal = () => this.props.hideModalAddFeed(false);
    // END HIDE MODAL

    // IS CHANG
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANG

    // SAVE ADD
    sendData = () => {
        let data = {};
        data.name = this.state.name;
        data.short = this.state.short;
        data.linkimage = this.state.linkimage;
        data.linkpage = this.state.linkpage;

        this.props.getDataAdd(data);
        this.hideModal();
    }
    // END SAVE ADD

    // SHOW POST TITLE
    showPostTIitle = () => this.state.posts.map((value, key) => <option key={key} value={value.id}>{value.postTitle}</option>)
    // END SHOW POST TITLE
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
                                        Thêm cảm nhận của người dùng
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="title-solution" className="col-sm-2 col-form-label">Tên người dùng:</label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} name="name" id="title-solution" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="sort-solution" className="col-sm-2 col-form-label">Cảm nhận của người dùng: </label>
                                            <div className="col-sm-10">
                                                <textarea onChange={(e) => this.isChange(e)} name="short" className="form-control" id="sort-solution" rows={3} />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="sort-solution" className="col-sm-2 col-form-label">Link avatar: </label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} name="linkimage" id="title-solution" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="sort-solution" className="col-sm-2 col-form-label">Link tới trang cá nhân: </label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} name="linkpage" id="title-solution" type="text" className="form-control" />
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

export default AddFeelingModal;