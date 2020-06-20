import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconModal from './IconModal';
import Posts from '../../dataTest/data.json';
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class UpdateContactModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            showIcon: false,
            id:this.props.default.id,
            title:this.props.default.title,
            icon:this.props.default.icon,
            linkpost:this.props.default.post,
            posts: Posts
        }
    }
    

    // HIDE MODAL
    hideModal = () => this.props.hideModalEditContact(false);
    // END HIDE MODAL

    // SHOW MODAL ICON
    showModalIcon = () => this.setState({showIcon: true});
    // END SHOW MODAL ICON
    // HIDE MODAL ICON
    hideModalIcon = e => this.setState({showIcon: e});
    // END HIDE MODAL ICON

    // IS CHANG
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANG

    // SAVE EIDT
    sendData = () => {
        let data = {};
        data.id = this.state.id;
        data.title = this.state.title;
        data.icon = this.state.icon;
        data.post = this.state.linkpost;

        this.props.updateDataContact(data);
        this.hideModal();
    }
    // END SAVE EIDT

    // SHOW POST TITLE
    showPostTIitle = () => this.state.posts.map((value, key) => <option key={key} value={value.id}>{value.postTitle}</option>)
    // END SHOW POST TITLE
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
                                        Thêm mới liên hệ
                                    </span>
                                </div>
                                <div className="card-body">
                                    <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="title-solution" className="col-sm-2 col-form-label">Tiêu đề:</label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} defaultValue={this.state.title} name="title" id="title-solution" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="icon-solution" className="col-sm-2 col-form-label">Icon chủ đề:</label>
                                            <div className="col-sm-8">
                                                <input onChange={(e) => this.isChange(e)} defaultValue={this.state.icon} name="icon" id="icon-solution" type="text" className="form-control" />
                                            </div>
                                            <div className="col-sm-2">
                                                <button onClick={() => this.showModalIcon()} type="button" className="btn btn-outline-secondary">Lấy icon</button>
                                                <IconModal showIcon={this.state.showIcon} hideModalIcon={e => this.hideModalIcon(e)}/>
                                            </div>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="link-to-post" className="col-sm-2 col-form-label">Link bài viết:</label>
                                            <div className="col-sm-10">
                                                <select onChange={(e) => this.isChange(e)} defaultValue={this.state.linkpost} name="linkpost" className="form-control-sm form-control" id="link-to-post">
                                                    <option value={0}>Không áp dụng</option>
                                                    {this.showPostTIitle()}
                                                </select>
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

export default UpdateContactModal;