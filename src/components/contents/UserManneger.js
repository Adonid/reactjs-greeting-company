import React, { Component } from 'react';
import AddNewPeopleModal from '../popups/AddNewPeopleModal';
import AnPeople from './elements/AnPeople';
import People from '../../dataTest/People.json';
import EditPeopleModal from '../popups/EditPeopleModal';
class UserManneger extends Component {
    constructor(props) {
        super(props);
        this.state={
            show: false,
            edit: false,
            people: People,
            dataPeople: ''
        };
    }

    // SHOW PEOPLE
    showPeople = () => this.state.people.map((value, key) => <AnPeople 
                                                                k={key}
                                                                key={key}
                                                                idPeople={value.id} 
                                                                name={value.name} 
                                                                tel={value.tel} 
                                                                email={value.email} 
                                                                image={value.image} 
                                                                permission={value.permission} 
                                                                posts={value.posts}
                                                                date={value.date}
                                                                showModalEdit={(data) => this.showModalEdit(data)}
                                                            />);
    // END SHOW PEOPLE

    // STATUS MODALS
    statusModals = () => {
        if (this.state.show === true && this.state.edit===false) {
            return <AddNewPeopleModal 
                        show={this.state.show} 
                        hideModalAdd={(hide) => this.hideModalAdd(hide)} 
                        getDataPeople={(data) => this.getDataPeople(data)}
                    />
        }
        else if(this.state.show === false && this.state.edit===true){
            return <EditPeopleModal
                        edit={this.state.edit} 
                        dataPeople={this.state.dataPeople} 
                        hideModalEdit={(hide) => this.hideModalEdit(hide)} 
                        updateDataPeople={(data) => this.updateDataPeople(data)}
                    />
        }
    }
    // END STATUS MODALS

    // SHOW MODAL ADD
    showModalAdd = () => this.setState({show: true});
    // END SHOW MOAL ADD

    // SHOW MODAL EDIT
    showModalEdit = (data) => this.setState({edit: true, dataPeople: data});
    // END SHOW MOAL EDIT
    
    // HIDE MODAL ADD
    hideModalAdd = (hide) => this.setState({show: hide});
    // END HIDE MOAL ADD

    // HIDE MODAL EDIT
    hideModalEdit = (hide) => this.setState({edit: hide});
    // END HIDE MOAL EDIT
    
    // SAVE NEW PEOPLE
    getDataPeople = (data) => this.setState({people: [...this.state.people, data]});
    // END NEW SAVE PEOPLE

    
    // SAVE UPDATED PEOPLE
    updateDataPeople = (data) => {
        console.log(data);
        // UPDATE PEOPLE TO SERVER HERE
        //...
        
    }
    // END UPDATED SAVE PEOPLE




    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                    <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-id icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Trang quản lý thành viên
                        <div className="page-title-subheading">Thao tác thêm, sửa, xóa, &amp; thay đổi quyền các thành viên.
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
                            <div className="card-header justify-content-sm-between">
                                <span className="d-block"><i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>Danh sách thành viên</span>
                                <div className="search-wrapper">
                                    <div className="input-holder">
                                    <input type="text" className="search-input" placeholder="Tìm thành viên..." />
                                    <button className="search-icon"><span /></button>
                                    </div>
                                    <button className="close" />
                                </div>
                            </div>
                            <div className="table-responsive">
                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Tác giả</th>
                                    <th className="text-center">Số điện thoại</th>
                                    <th className="text-center">SL bài viết</th>
                                    <th className="text-center">Thời gian</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.showPeople()
                                    }
                                </tbody>
                            </table>
                            </div>
                            <div className="d-block card-footer">
                            {/* <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger float-left"><i class="pe-7s-trash btn-icon-wrapper"> </i> Xóa tất cả</button> */}
                            <button onClick={() => this.showModalAdd()} type="button" className="btn-wide btn btn-success float-right">Thêm mới</button>
                            </div>
                        </div>
                    </div>
                    {/* End User list  */}

                    {/* ADD or EDIT PEOPLE MODAL */}
                        {
                            this.statusModals()
                        }
                    {/* End ADD or EDIT PEOPLE MODAL */}
                    
                </div>
                {/* End Users list */}
                
            </div>

        );
    }
}

export default UserManneger;