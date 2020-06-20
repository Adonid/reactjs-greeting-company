import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import EditMeModal from './popups/EditMeModal';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            show: false,
            dataPeople:{id: 1, name: 'Nguyễn Kim Bình', tel: '0982274473', email: 'kimbinh89@gmail.com', permission: 'Quản trị bài viết', avatar:'assets/images/avatars/2.jpg'}
        }
    }

    // SHOW USER MODAL
    showModalUser = () => this.setState({show: true});
    // END SHOW USER MODAL
    // HIDE USER MODAL
    hideModal = e => this.setState({show: e});
    // END HIDE USER MODAL

    // UPDATE
    updateDataPeople = data => {
        console.log(data);
        this.setState({dataPeople: {...this.state.dataPeople, name: data.name, tel: data.tel, avatar: data.avatar}});
    }
    // UPDATE
    
    render() {
        return (
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src" />
                    <div className="header__pane ml-auto">
                    <div>
                        <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                        <span className="hamburger-box">
                            <span className="hamburger-inner" />
                        </span>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                    <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                        <span className="hamburger-box">
                        <span className="hamburger-inner" />
                        </span>
                    </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                    <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span className="btn-icon-wrapper">
                        <i className="fa fa-ellipsis-v fa-w-6" />
                        </span>
                    </button>
                    </span>
                </div>
                
                <div className="app-header__content">
                    <div className="app-header-left">
                    <div className="search-wrapper">
                        <div className="input-holder">
                        <input type="text" className="search-input" placeholder="Type to search" />
                        <button className="search-icon"><span /></button>
                        </div>
                        <button className="close" />
                    </div>
                    <ul className="header-menu nav">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/quan-ly-thanh-vien">
                                <i className="nav-link-icon fa fa-database" />
                                Thành viên
                            </NavLink >
                        </li>
                        <li className="btn-group nav-item">
                            <NavLink className="nav-link"  to="/bai-viet-moi">
                                <i className="nav-link-icon fa fa-edit" />
                                Viết bài
                            </NavLink >
                        </li>
                        <li className="dropdown nav-item">
                            <NavLink className="nav-link"  to="/danh-sach-bai-viet">
                                <i className="nav-link-icon fa fa-th-large" />
                                Quản lý bài viết
                            </NavLink >
                        </li>
                        <li className="dropdown nav-item">
                            <NavLink activeClassName="font-weight-bold" className="nav-link"  to="/phan-hoi-khach-hang">
                                <i className="nav-link-icon fa fa fa-inbox" />
                                Inbox
                            </NavLink >
                        </li>
                    </ul>
                    </div>
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <button className="p-0 btn">
                                                <img width={42} height={42} className="rounded-circle" src={this.state.dataPeople.avatar} alt="nice" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">
                                            {this.state.dataPeople.name}
                                        </div>
                                        <div className="widget-subheading">
                                            {this.state.dataPeople.permission}
                                        </div>
                                    </div>
                                    
                                    <div className="widget-content-right header-user-info ml-3">
                                        <button onClick={() => this.showModalUser()} type="button" className="btn-shadow p-1 btn btn-primary btn-sm" title="Chi tiết">
                                            <i className="fa text-white fa-id-card-o pr-1 pl-1"></i>
                                        </button>
                                    </div>
                                    <div className="widget-content-right header-user-info ml-3">
                                        <button onClick={() => this.logoutModalUser()} type="button" className="btn-shadow p-1 btn btn-secondary btn-sm" title="Đăng xuất">
                                            <i className="fa text-white fa-sign-out pr-1 pl-1"></i>
                                        </button>
                                    </div>
                                    {/* <div className="widget-content-right header-user-info ml-3">
                                        <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                            <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <EditMeModal show={this.state.show} hideModal={e => this.hideModal(e)} dataPeople={this.state.dataPeople} updateDataPeople={data => this.updateDataPeople(data)} />
            </div>

        );
    }
}

export default Header;