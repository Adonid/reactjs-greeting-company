import React, { Component } from 'react';

class AFeeling extends Component {

     // Send greeting
     sendFeeling = () => {
        let feed = {};
        feed.id = this.props.idF;
        feed.name = this.props.name;
        feed.short = this.props.short;
        feed.linkpage = this.props.linkpage;
        feed.linkimage = this.props.linkimage;
        // console.log(feed);
        
        this.props.showEditFeedModal(feed);
    }
    // eND Send greeting

    // REMOVE GRETTING
    remove = () => this.props.removeGreeting(this.props.idF);
    // END REMOVE GRETTING

    render() {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p>{this.props.short}</p>
                        <p>Link to view: 
                            <a href={this.props.linkpage} target="top" className="text-info"> <img src={this.props.linkimage} width="32px" height="32px" className="rounded-circle" alt="nice" /></a>
                        </p>
                        <button onClick={() => this.remove()} className="btn-wide btn btn-outline-danger">Xóa</button>
                        <button onClick={() => this.sendFeeling()} className="ml-1 btn-wide btn btn-outline-info">Sửa</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AFeeling;