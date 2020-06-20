import React, { Component } from 'react';

class AnApproved extends Component {

    // APPROVED A POST
    approved = () => this.props.approvedPost(this.props.idA)
    // END APPROVED A POST
    render() {
        return (
            <tr>
                <td className="text-center text-muted">#{this.props.k}</td>
                <td>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                            <img width={40} className="rounded-circle" src={this.props.image} alt="nice" />
                            </div>
                        </div>
                        <div className="widget-content-left flex2">
                            <div className="widget-heading">{this.props.author}</div>
                            <div className="widget-subheading opacity-7">{this.props.permission}</div>
                        </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">
                    <a href="/" className="text-secondary">{this.props.postTitle}</a>
                </td>
                <td className="text-center">
                    <span>{this.props.time}</span>
                </td>
                <td className="text-center">
                    {this.props.accepted? <span className="btn-circle btn-success btn-sm"><i className="fa fa-check-circle" aria-hidden="true"></i></span> : <button onClick={() => this.approved()} type="button" id="PopoverCustomT-1" className="btn btn-info btn-sm">Duyệt</button>}
                </td>
            </tr>
        );
    }
}

export default AnApproved;