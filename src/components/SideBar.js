import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
class SideBar extends Component {
    render() {
        return (
            <div className="app-sidebar sidebar-shadow">
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
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                        <li className="app-sidebar__heading">Dashboards</li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/">
                                <i className="metismenu-icon pe-7s-rocket" />
                                Quản lý chung
                            </NavLink >
                        </li>
                        <li className="app-sidebar__heading">Quản lý bài viết</li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/bai-viet-moi">
                                <i className="metismenu-icon pe-7s-note" />
                                Bài viết mới
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/danh-sach-bai-viet">
                                <i className="metismenu-icon pe-7s-network" />
                                Danh sách bài viết
                            </NavLink >
                        </li>
                        <li className="app-sidebar__heading">Quản lý thành viên</li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/quan-ly-thanh-vien">
                                <i className="metismenu-icon pe-7s-users" />
                                Thành viên
                            </NavLink >
                        </li>
                        <li className="app-sidebar__heading">Quản lý trang</li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/trang-chu">
                                <i className="metismenu-icon pe-7s-home" />
                                Trang chủ
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/gioi-thieu-cong-ty">
                                <i className="metismenu-icon pe-7s-id" />
                                Giới thiệu công ty
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/giai-phap-cong-nghe">
                                <i className="metismenu-icon pe-7s-science" />
                                Công nghệ
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/goi-dich-vu">
                                <i className="metismenu-icon pe-7s-cash" />
                                Gói dịch vụ
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/cam-nhan-cua-khach-hang">
                                <i className="metismenu-icon pe-7s-share" />
                                Khách hàng
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/cac-bai-viet">
                                <i className="metismenu-icon pe-7s-news-paper" />
                                Các bài viết
                            </NavLink >
                        </li>
                        <li>
                            <NavLink activeClassName="mm-active"  to="/lien-he-chung-toi">
                                <i className="metismenu-icon pe-7s-map-2" />
                                Liên hệ
                            </NavLink >
                        </li>
                    </ul>
                    </div>
                </div>
                </div>

        );
    }
}

export default SideBar;