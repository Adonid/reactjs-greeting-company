import React, { Component } from 'react';
import HeaderPage from './elements/HeaderPage';
import ADirection from './elements/ADirection';
import ContactMe from '../../dataTest/ContactAddress.json';
import AddContactModal from '../popups/AddContactModal';
import UpdateContactModal from '../popups/UpdateContactModal';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            contacts: ContactMe,
            addContact: false,
            editContact: false,
            dataDefautUpdate:''
        }
    }
    
    // SHOW ALL CONTACT
    showAllContact = () => this.state.contacts.map((value, key) => <ADirection 
                                                                        key={key} 
                                                                        idD={value.id} 
                                                                        title={value.title} 
                                                                        icon={value.icon} 
                                                                        post={value.post} 
                                                                        dataDefautUpdateDirection={data => this.dataDefautUpdateContact(data)} 
                                                                        removeDirection={id => this.removeContact(id)}
                                                                    />);
    // END SHOW ALL CONTACT

       // SHOW MOAL STATUS CONTACT
       showAllModalContact = () => {
        if (this.state.addContact===true && this.state.editContact===false) {
            return <AddContactModal add={this.state.addContact} hideModalAddContact= {e => this.hideModalAddContact(e)} getDataContact={data => this.getDataContact(data)} />;
        } else if(this.state.addContact===false && this.state.editContact===true) {
            return <UpdateContactModal edit={this.state.editContact} hideModalEditContact={e => this.hideModalEditContact(e)} default={this.state.dataDefautUpdate} updateDataContact={data => this.updateDataContact(data)} />;
        }
        else return false;
    }
    // END SHOW MOAL STATUS CONTACT

    // GET HEADER
    getHeader = e => {
        console.log(e);
       // UPDATE HEADER... 
    }
    // END GET HEADER

    // SHOW MODAL ADD CONTACT
    showAddContact = () => this.setState({addContact: true});
    // END SHOW MODAL ADD CONTACT
    
    // HIDE MODAL ADD TECH
    hideModalAddContact = () => this.setState({addContact: false});
    // END HIDE MODAL ADD TECH

    // GET DATA CONTACT
    getDataContact = data => {
        this.setState({contacts: [...this.state.contacts, data]});
        // ADD TO SERVER...
    }
    // END GET DATA CONTACT

    // SHOW MODAL UPDATE
    dataDefautUpdateContact = data => this.setState({editContact: true, dataDefautUpdate: data});
    // END SHOW MODAL UPDATE

    // HIDE MODAL UPDATE
    hideModalEditContact = e => this.setState({editContact: e});
    // END HIDE MODAL UPDATE

    // UPDATE DATA CONTACT
    updateDataContact = data => {
        let contactUpdated =this.state.contacts;
        contactUpdated.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.title = data.title;
                element.icon = data.icon;
                element.post = data.post;
            }
        });
        this.setState({contacts: contactUpdated});     
        // ADD TO SERVER...
    }
    // END UPDATE DATA CONTACT

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-ribbon icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang liên hệ
                        <div className="page-title-subheading">Thay đổi nội dung hiển thị trang liên hệ.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Title page */}
                <HeaderPage getHeader={e => this.getHeader(e)}/>
                {/* End Title page */}

                {/* Contacts */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card bg-light">
                            {/* Header */}
                            <div className="card-header justify-content-sm-between">
                            <span className="d-block">Các địa chỉ liên hệ</span>
                            <button onClick={() => this.showAddContact()} className="btn-pill btn-wide btn btn-alternate btn-sm show mr-sm-3">Thêm liên hệ</button>
                            </div>
                            {/* End Header */}
                            {/* Directions list */}
                            <div className="card-body">
                                <div className="row">
                                    
                                    {this.showAllContact()}

                                </div>
                            </div>
                            {/* End Directions list */}
                            <div className="d-block text-left card-footer">
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Contacts */}

                {/* Add Contact */}
                
                {this.showAllModalContact()}
                
                {/* End Add Contact */}
            </div>
        );
    }
}

export default Contact;