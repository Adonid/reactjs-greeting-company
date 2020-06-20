import React, { Component } from 'react';

const uri = 'assets/images/';
class AnPeople extends Component {

    // SHOW MODAL EDIT
    showModal = () => {
        let data = {};
        data.id = this.props.idPeople;
        data.name = this.props.name;
        data.tel = this.props.tel;
        data.email = this.props.email;
        data.image = this.props.image;
        data.permission = this.props.permission;
        data.posts = this.props.posts;
        
        this.props.showModalEdit(data);
        console.log(data);
        
    }
    // END SHOW MODAL EDIT
    
    render() {
        return (
            <tr>
                <td className="text-center text-muted">#{this.props.k}</td>
                <td>
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                            <div className="widget-content-left">
                            <img width={40} className="rounded-circle" src={uri+this.props.image} alt="Avatar" />
                            </div>
                        </div>
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
                    <span>{this.props.posts}</span>
                </td>
                <td className="text-center">
                    <span>{this.props.date}</span>
                </td>
                <td className="text-center">
                    <button onClick={() => this.showModal()} type="button" className="btn btn-outline-primary btn-sm"><i className="fa fa-cog" aria-hidden="true"></i></button>
                    <button type="button" className="ml-1 btn btn-outline-danger btn-sm"><i className="fa fa-trash" aria-hidden="true"></i></button>
                </td>
            </tr>
        );
    }
}

export default AnPeople;