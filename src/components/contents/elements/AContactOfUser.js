import React, { Component } from 'react';

class AContactOfUser extends Component {
    // SHOW MODAL EDIT
    showModalReply = () => {
        let data = {};
        data.id = this.props.idC;
        data.name = this.props.name;
        data.email = this.props.email;
        data.content = this.props.content;
        data.date = this.props.date;
        
        this.props.showModalReply(data);        
    }
    // END SHOW MODAL EDIT

    // REMOVE CONTACT
    removeContact = () => this.props.removeContact(this.props.idC);
    // END REMOVE CONTACT
    render() {
        return (
            <tr>
                <td className="text-center text-muted">#{this.props.k}</td>
                <td>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left flex2">
                                <div className="widget-heading">{this.props.name}</div>
                                <div className="widget-subheading opacity-7">
                                    <a href={'mailto:'+this.props.email} target="_top" className="text-secondary">{this.props.email}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-center">
                    <a href={"tel:"+this.props.tel} className="text-secondary">{this.props.tel}</a>
                </td>
                <td className="text-center">
                    <span>{this.props.content}</span>
                </td>
                <td className="text-center">
                    <span>{this.props.date}</span>
                </td>
                <td className="text-center">
                    {
                        this.props.isReply?'':<button onClick={() => this.showModalReply()} type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-reply" aria-hidden="true"></i></button>
                    }
                    <button onClick={() => this.removeContact()} type="button" className="ml-1 btn btn-outline-danger btn-sm"><i className="fa fa-trash" aria-hidden="true"></i></button>
                </td>
            </tr>
        );
    }
}

export default AContactOfUser;