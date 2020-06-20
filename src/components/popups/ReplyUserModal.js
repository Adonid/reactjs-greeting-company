import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';


class ReplyUserModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.data.id,
            name:this.props.data.name,
            tel:this.props.data.tel,
            email:this.props.data.email,
            content:this.props.data.content,
            date:this.props.data.date,
            subject:'',
            reply:'',
            error: false
        }
    }    

    // HIDE MODAL
    hideToModal = () => this.props.hideModalReply(false);
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

    // SEND DATA
    sendDataReply = () => {
        let data = {};
        data.id = this.state.id;
        data.name = this.state.name;
        data.email = this.state.email;
        data.reply = this.state.reply;
        data.subject = this.state.subject;

        if(!data.subject || !data.reply){
            this.setState({error: true});
            return false;
        }
            
        this.props.getDataReply(data);
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
                                        Phản hồi Email cho khách hàng
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                        <p className={"text-danger "+(this.state.error?'d-block':'d-none')}>Không để trống tiêu đề & nội dung reply!</p>
                                        <div className="position-relative form-group">
                                            <span>Khách hàng: <b>{this.state.name}</b></span>
                                        </div>
                                        <div className="position-relative form-group">
                                        <span>Email: <b>{this.state.email}</b></span>
                                        </div>
                                        <div className="position-relative form-group">
                                            <blockquote className="blockquote text-left">
                                                <p className="mb-0">{this.state.content}</p>
                                                <footer className="blockquote-footer text-right"><cite>{this.state.date}</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div className="position-relative row form-group">
                                            <label htmlFor="title-email" className="col-sm-2 col-form-label">Tiêu đề Email:(*)</label>
                                            <div className="col-sm-10">
                                                <input onChange={(e) => this.isChange(e)} name="subject" id="title-email" type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="position-relative form-group">
                                            <label htmlFor="reply-text">Nội dung Reply:(*)</label>
                                            <textarea onChange={e => this.isChange(e)} name="reply" id="reply-text" className="form-control" row={3}></textarea>
                                        </div>
                                </PerfectScrollbar>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={() => this.hideToModal()} type="button" className="mr-2 mt-1 btn btn-light">Canced</button>
                                    <button onClick={() => this.sendDataReply()} className="mt-1 btn btn-success">Gửi mail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ReplyUserModal;