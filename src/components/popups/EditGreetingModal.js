import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import CropImage from '../contents/elements/CropImage';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class EditGreetingModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:'',
            id: this.props.greeting.id,
            tags: this.props.greeting.ability,
            base64:'',
            title: this.props.greeting.title,
            short: this.props.greeting.short
        }
    }

    // CROP IMAGE
    getBaseCrop = e => this.setState({base64: e});
    // END CROP IMAGE

    // SET TAGS
    setTags = e => this.setState({tags: e});
    // END SET TAGS

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
    hideModal = () => this.props.hideModalEdit(false);
    // END HIDE MODAL

    // SAVE
    sendData = () => {
        let data = {};
        data.id = this.state.id;
        data.title = this.state.title;
        data.short = this.state.short;
        data.image = this.state.base64;
        data.ability = this.state.tags;

        this.props.updateDataGreeting(data);
        this.hideModal();
    }

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
                                        Sửa nội dung giới thiệu
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="title-gretting" className="col-sm-2 col-form-label">Tiêu đề:</label>
                                        <div className="col-sm-10">
                                            <input onChange={e => this.isChange(e)} defaultValue={this.state.title} name="title" id="title-gretting" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="sort-gretting" className="col-sm-2 col-form-label">Mô tả chủ đề: </label>
                                        <div className="col-sm-10">
                                            <textarea onChange={e => this.isChange(e)} defaultValue={this.state.short} name="short" className="form-control" id="sort-gretting" rows={2} />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="image-gretting" className="col-sm-2 col-form-label">Ảnh chủ đề:</label>
                                        <div className="col-sm-10">
                                            <CropImage image={this.state.image} getBaseCrop={(base64) => this.getBaseCrop(base64)} short="Ảnh chủ đề nói lên nội dung của chủ đề."/>
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="props-gretting" className="col-sm-2 col-form-label">Các đặc điểm:</label>
                                        <div className="col-sm-10">
                                            <ReactTagInput 
                                                tags={this.state.tags}
                                                onChange={e => this.setTags(e)}
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

export default EditGreetingModal;