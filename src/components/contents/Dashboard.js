import React, { Component } from 'react';
import TitleContent from './elements/TitleContent';
import AContactOfUser from './elements/AContactOfUser';
import Contacts from '../../dataTest/ContactOfUser.json';
import ReplyUserModal from '../popups/ReplyUserModal';
import { NavLink } from 'react-router-dom';
import ApprovedPost from '../../dataTest/ApprovedData.json';
import AnApproved from './elements/AnApproved';
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            reply: false,
            replyall: false,
            contacts: Contacts,
            dataContact: '',
            approvedPosts: ApprovedPost
        };
    }

    // SHOW NO REPLY CONTACT USER
    showNoReplyContact = () => this.state.contacts.map((value, key) => <AContactOfUser
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

    // SHOW ALL APPROVED POST
    approvedPosts = () => this.state.approvedPosts.map((value, key) => <AnApproved 
                                                                            key={key} 
                                                                            k={key + 1} 
                                                                            idA={value.id} 
                                                                            author={value.author} 
                                                                            image={value.image} 
                                                                            permission={value.permission} 
                                                                            postTitle={value.postTitle} 
                                                                            time={value.time} 
                                                                            accepted={value.accepted} 
                                                                            approvedPost={id => this.approvedPost(id)}
                                                                        /> );
    // END SHOW ALL APPROVED POST

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
    }
    // END REPLY

    // REMOVE CONTACT
    removeContact = id => {
        this.setState({contacts: this.state.contacts.filter(item => parseInt(item.id) !== parseInt(id))});
    }
    // END REMOVE CONTACT

    // APPROVED A POST
    approvedPost = id => {
        console.log(id);
        let dataApproved = this.state.approvedPosts;
        dataApproved.forEach(element => {
            if(parseInt(element.id) === parseInt(id))
                element.accepted=true;
        });
        this.setState({contacts: dataApproved});
    }
    // END APPROVED A POST

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <TitleContent title="Trang quản lý chung" short="Cập nhật các thông tin về bài viết, số lượng khách hàng &amp; các thao tác nhanh."/>
                {/* End Header PAGE */}

                {/* Count */}
                <div className="row">
                    {/* Total contact */}
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Liên hệ</div>
                                <div className="widget-subheading">Tổng số lần khách hàng liên hệ</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>872</span></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End total contact */}
                    {/* Total Member */}
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Thành viên</div>
                                <div className="widget-subheading">Tổng số thành viên tham gia viết bài</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>07</span></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End total member */}
                    {/* Total posts */}
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Bài viết</div>
                                <div className="widget-subheading">Tổng số bài viết hiện có</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>68</span></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* End total posts */}

                    <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-premium-dark">
                            <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Products Sold</div>
                                <div className="widget-subheading">Revenue streams</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-warning"><span>$14M</span></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End count */}

                {/* Accept post */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Email khách hàng</div>
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
                            <div className="d-block text-left card-footer">
                                <NavLink className="nav-link pt-0 pb-0 pl-0 pr-0"  to="/phan-hoi-khach-hang">
                                    <button className="mr-2 btn-icon btn btn-success">Xem tất cả</button>
                                </NavLink >
                            </div>
                        </div>
                    </div>
                </div>
                {/* End REPLY */}

                {/* Accept post */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Phê duyệt bài viết</div>
                            <div className="table-responsive">
                                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Tác giả</th>
                                    <th className="text-center">Bài viết</th>
                                    <th className="text-center">Thời gian</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.approvedPosts()
                                    }
                                </tbody>
                            </table>
                            </div>
                            <div className="d-block text-left card-footer">
                                 <NavLink className="nav-link pt-0 pb-0 pl-0 pr-0"  to="/danh-sach-bai-viet">
                                    <button className="mr-2 btn-icon btn btn-success">Xem tất cả</button>
                                </NavLink >
                            </div>
                        </div>
                    </div>
                </div>
                {/* End accept post */}

                {/* Calendar */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Lịch của tôi</div>
                            <div className="card-body">
                            <div id="calendar" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Calendar */}

            {/* ADD or EDIT PEOPLE MODAL */}
                {
                    this.statusModal()
                }
            {/* End ADD or EDIT PEOPLE MODAL */}

            </div>

        );
    }
}

export default Dashboard;