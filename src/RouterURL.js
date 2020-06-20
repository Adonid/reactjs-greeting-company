import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from './components/contents/Dashboard';
import NewPost from './components/contents/NewPost';
import ArchivePost from './components/contents/ArchivePost';
import UserManneger from './components/contents/UserManneger';
import Home from './components/contents/Home';
import Gretting from './components/contents/Gretting';
import Technologys from './components/contents/Technologys';
import ServicesPakage from './components/contents/ServicesPakage';
import Partner from './components/contents/Partner';
import Posts from './components/contents/Posts';
import Contact from './components/contents/Contact';
import EditPost from './components/contents/EditPost';
import ContactOfUser from './components/contents/ContactOfUser';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>

                    <Route exact path="/" component= {Dashboard} />

                    <Route exact path="/bai-viet-moi" component= {NewPost} />

                    <Route exact path="/sua-bai-viet" component= {EditPost} />

                    <Route exact path="/danh-sach-bai-viet" component= {ArchivePost} />

                    <Route exact path="/quan-ly-thanh-vien" component= {UserManneger} />

                    <Route exact path="/trang-chu" component= {Home} />

                    <Route exact path="/gioi-thieu-cong-ty" component= {Gretting} />

                    <Route exact path="/giai-phap-cong-nghe" component= {Technologys} />

                    <Route exact path="/goi-dich-vu" component= {ServicesPakage} />

                    <Route exact path="/cam-nhan-cua-khach-hang" component= {Partner} />

                    <Route exact path="/cac-bai-viet" component= {Posts} />

                    <Route exact path="/lien-he-chung-toi" component= {Contact} />

                    <Route exact path="/phan-hoi-khach-hang" component= {ContactOfUser} />

                </Switch>
            </div>
        );
    }
}

export default RouterURL;