import React, { Component } from 'react';
import AContactOfUser from './elements/AContactOfUser';
import Contacts from '../../dataTest/ContactOfUser.json';
import ReplyUserModal from '../popups/ReplyUserModal';
class ContactOfUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            reply: false,
            replyall: false,
            contacts: Contacts,
            dataContact: ''
        };
    }

    // SHOW ALL CONTACT USER
    showAllContact = () => this.state.contacts.map((value, key) => <AContactOfUser 
                                                                        key={key}
                                                                        k={key+1}
                                                                        idC={value.id} 
                                                                        isReply={value.isReply}
                                                                        name={value.name} 
                                                                        tel={value.tel} 
                                                                        email={value.email} 
                                                                        content={value.content}
                                                                        date={value.date}
                                                                        removeContact={id => this.removeContact(id)}
                                                                    />);
    // END SHOW ALL CONTACT USER
    // SHOW NO REPLY CONTACT USER
    showNoReplyContact = () => this.state.contacts.filter(item => item.isReply===false).map((value, key) => <AContactOfUser 
                                                                                                            key={key}
                                                                                                            k={key+1}
                                                                                                            idC={value.id} 
                                                                                                            isReply={value.isReply}
                                                                                                            name={value.name} 
                                                                                                            tel={value.tel} 
                                                                                                            email={value.email} 
                                                                                                            content={value.content}
                                                                                                            date={value.date}
                                                                                                            showModalReply={(data) => this.showModalReply(data)}
                                                                                                            removeContact={id => this.removeContact(id)}
                                                                                                        />);
    // END SHOW NO REPLY CONTACT USER

    // SHOW MODAL
    statusModal = () => {
        if(this.state.reply === true)
        return <ReplyUserModal show={this.state.reply} hideModalReply={e => this.hideModalReply(e)} data={this.state.dataContact} getDataReply={data => this.getDataReply(data)} />;
    }
    // END SHOW MODAL

    // SHOW MODAL REPLY
    showModalReply = data => this.setState({reply: true, dataContact: data});
    // END SHOW MOAL REPLY

    // HIDE MODAL REPLY
    hideModalReply = (hide) => this.setState({reply: hide});
    // END HIDE MOAL REPLY

    // SAVE REPLY
    getDataReply = (data) => {
        console.log(data);
        let dataContacts = this.state.contacts;
        dataContacts.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id))
                element.isReply=true;
        });
        this.setState({contacts: dataContacts});
        // AXIOS
        // data: id, name, email, subject, reply

    }
    // END REPLY

    // REMOVE CONTACT
    removeContact = id => {
        this.setState({contacts: this.state.contacts.filter(item => parseInt(item.id) !== parseInt(id))});
        // AXIOS
        // id
    }
    // END REMOVE CONTACT

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                            <div className="page-title-icon">
                                <i className="pe-7s-next-2 icon-gradient bg-mean-fruit" />
                            </div>
                            <div>Trang phản hồi thông tin của khách hàng
                                <div className="page-title-subheading">Xem nội dung liên hệ &amp; phản hổi lại thông tin của khách hàng.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Users list */}
                <div className="row">
                    {/* User list */}
                    <div className="col">
                        <div className="main-card mb-3 card">

                            {/* Header */}
                            <div className="card-header">
                                <span className="d-block"><i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>Danh các khách hàng liên hệ</span>
                                <div className="btn-actions-pane-right mr-md-3">
                                    <div className="nav">
                                        <button data-toggle="tab" href="#not-contacts" className="btn-pill btn-wide active mr-1 ml-1  btn btn-outline-alternate btn-sm">Chưa REPLY</button>
                                        <button data-toggle="tab" href="#all-contacts" className="btn-pill btn-wide btn btn-outline-alternate btn-sm">Tất cả</button>
                                    </div>
                                </div>
                                <div className="search-wrapper">
                                    <div className="input-holder">
                                    <input name="search" type="text" className="search-input" placeholder="Tìm bài viết..." />
                                    <button className="search-icon"><span /></button>
                                    </div>
                                    <button className="close" />
                                </div>
                            </div>
                            {/* End Header */}
                            <div className="card-body">
                                <div className="tab-content">

                                    <div className="tab-pane active" id="not-contacts" role="tabpanel">
                                        <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th>Khách hàng/Email</th>
                                                        <th className="text-center">Số điện thoại</th>
                                                        <th className="text-center">Nội dung</th>
                                                        <th className="text-center">Thời gian</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.showNoReplyContact()
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="all-contacts" role="tabpanel">
                                        <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th>Khách hàng/Email</th>
                                                        <th className="text-center">Số điện thoại</th>
                                                        <th className="text-center">Nội dung</th>
                                                        <th className="text-center">Thời gian</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.showAllContact()
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="d-block text-left card-footer">
                                <span>Show: </span>
                                <button className="mb-2 mr-2 btn-transition btn btn-outline-light active">20</button>
                                <button className="mb-2 mr-2 btn-transition btn btn-outline-light">50</button>
                                <button className="mb-2 mr-2 btn-transition btn btn-outline-light">70</button>
                                <button className="mb-2 mr-2 btn-transition btn btn-outline-light">&gt;100</button>
                            </div>
                        </div>
                    </div>
                    {/* End User list  */}

                    {/* ADD or EDIT PEOPLE MODAL */}
                        {
                            this.statusModal()
                        }
                    {/* End ADD or EDIT PEOPLE MODAL */}
                    
                </div>
                {/* End Users list */}
                
            </div>
        );
    }
}

export default ContactOfUser;