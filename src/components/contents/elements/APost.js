import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
// import { ToastContainer, toast, Zoom } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

const uri = 'assets/images/';
class APost extends Component {
    
    acceptedChange = () => {
        let data = {};
        data.id = this.props.postId;
        data.accepted = !this.props.accepted;
        // this.props.accepted ? toast.info('Dừng phê duyệt bài viết!') : toast.success('Bài viết đã được phê duyệt!');
        this.props.updateChangeApproved(data);
        
    };

    // SHOW BUTTON APPROVED
    showButtonChange = () => {
        if (this.props.accepted===true) {
            return <span onClick={()=>this.acceptedChange()} className="btn-wide btn btn-sm btn-success float-right"><i className="fa fa-check-circle" aria-hidden="true"></i></span>;
        } else {
            return <button onClick={()=>this.acceptedChange()} className="btn-wide btn btn-sm btn-info float-right">Duyệt</button>;
        }
    }
    // END SHOW BUTTON APPROVED
    
    sendPost = () => {
        const dataPost = {};
        dataPost.postId = this.props.postId;
        dataPost.postTitle = this.props.postTitle;
        dataPost.image = this.props.image;
        dataPost.time = this.props.time;
        dataPost.author = this.props.author;
        dataPost.short = this.props.short;
        dataPost.accepted = this.props.accepted;
        dataPost.tags = this.props.tags;
        dataPost.facebook = this.props.facebook;
        dataPost.instagram = this.props.instagram;
        dataPost.googleplus = this.props.googleplus;
        dataPost.content = this.props.content;
        
        this.props.sendPost(dataPost);
        
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="main-card mb-3 card"><img width="100%" src={uri+this.props.image} alt="nice" className="card-img-top" />
                    <div className="card-body">
                    <h6 className="card-subtitle"><small>{this.props.time} · {this.props.author}</small></h6>
                    <h5 className="card-title">{this.props.postTitle}</h5>
                    <p>{this.props.short}</p>
                    <button className="btn-wide btn btn-sm btn-outline-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                    <NavLink onClick={this.sendPost} className="ml-1 btn-wide btn btn-sm btn btn-light"  to="/sua-bai-viet">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </NavLink >
                    
                    {
                        this.showButtonChange()
                    }

                    </div>
                </div>
                {/* <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                    transition={Zoom}
                /> */}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        postDataOld: state.postOld
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendPost: (postData) => {
            dispatch({
                type: 'EDIT_POST',
                postData: postData
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(APost);