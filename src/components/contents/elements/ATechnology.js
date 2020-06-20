import React, { Component } from 'react';
import Posts from '../../../dataTest/data.json';
class ATechnology extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: Posts
        }
    }
    
    // GET NAME POST
    getPostTitle = () => this.state.posts.filter(item => item.id === parseInt(this.props.post))[0].postTitle;
    // END GET NAME POST

    // SEND DATA POST UPDATE
    sendDataUpdate = () => {
        let data = {};
        data.id = this.props.idT;
        data.title = this.props.title;
        data.short = this.props.short;
        data.icon = this.props.icon;
        data.post = this.props.post;

        this.props.getDataUpdate(data);
    }
    // END SEND DATA POST UPDATE

    // REMOVE TECH
    removeTech = () => this.props.removeTech(this.props.idT)
    // END REMOVE TECH

    render() {
        return (
            <div className="col-md-4">
                <div className="main-card mb-3 card">
                    <div className="page-title-icon text-center display-2">
                        <i className={"icon-gradient bg-ripe-malin "+this.props.icon} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p>{this.props.short}</p>
                        <p>Link bài viết: <span className="text-primary">{this.getPostTitle()}</span></p>
                        <button onClick={() => this.removeTech()} className="btn-wide btn btn-outline-danger">Xóa</button>
                        <button onClick={() => this.sendDataUpdate()} className="ml-1 btn-wide btn btn-outline-info">Sửa</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ATechnology;