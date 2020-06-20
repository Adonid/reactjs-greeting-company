import React, { Component } from 'react';
import HeaderPage from './elements/HeaderPage';
import ServicePackages from '../../dataTest/ServicePackage.json';
import AServicePackage from './elements/AServicePackage';
import AddServicePackageModal from '../popups/AddServicePackageModal';
import UpdateServicePackageModal from '../popups/UpdateServicePackageModal';

import PostsData from '../../dataTest/data.json'
class ServicesPakage extends Component {
    constructor(props) {
        super(props);
        this.state={
            postsAll: PostsData,
            servicePackages: ServicePackages,
            addServicePackage: false,
            editServicePackage: false,
            dataDefautUpdate:'',
            title_primary:'',
            title_sub:'',
            selectPosts:["1", "3"],
        }
    }
    
    // GET HEADER
    getHeader = e => {
        console.log(e);
       // UPDATE HEADER... 
    }
    // END GET HEADER

    // SHOW ALL SERVICE PACKAGE
    showAllServicePackage = () => this.state.servicePackages.map((value,key) => <AServicePackage 
                                                                                    key={key} 
                                                                                    idS={value.id} 
                                                                                    name={value.name} 
                                                                                    price={value.price} 
                                                                                    support={value.support} 
                                                                                    no_support={value.no_support} 
                                                                                    dataDefautUpdateService={data => this.dataDefautUpdateService(data)} 
                                                                                    removeService={id => this.removeService(id)}
                                                                                />);
    // END SHOW ALL SERVICE PACKAGE

    // SHOW MOAL STATUS
    showAllModal = () => {
        if (this.state.addServicePackage===true && this.state.editServicePackage===false) {
            return <AddServicePackageModal add={this.state.addServicePackage} hideModalAdd={e => this.hideModalAdd(e)} getDataServicePackage={data => this.getDataServicePackage(data)}/>;
        } else if(this.state.addServicePackage===false && this.state.editServicePackage===true) {
            return <UpdateServicePackageModal edit={this.state.editServicePackage} hideModalEditService={e => this.hideModalUpdate(e)} default={this.state.dataDefautUpdate} updateDataServicePackage={data => this.updateDataServicePackage(data)}/>;
        }
        else return false;
    }
    // END SHOW MOAL STATUS

    // SHOW MODAL ADD SERVICE PACKAGE
    showAddServicePackage = () => this.setState({addServicePackage: true});
    // END SHOW MODAL ADD SERVICE PACKAGE

    // HIDE MODAL ADD SERVICE PACKAGE
    hideModalAdd = e => this.setState({addServicePackage: e});
    // END HIDE MODAL ADD SERVICE PACKAGE

    // GET DATA ADD SERVICE PACKAGE
    getDataServicePackage = data => {
        this.setState({servicePackages: [...this.state.servicePackages, data]});
        // ADD TO SERVER...
    }
    // END GET DATA ADD SERVICE PACKAGE

    // SHOW MODAL SERVICE PACKAGE
    dataDefautUpdateService = data => this.setState({editServicePackage: true, dataDefautUpdate: data});
    // END SHOW MODAL SERVICE PACKAGE

    // HIDE MODAL UPADTE SERVICE PACKAGE
    hideModalUpdate = e => this.setState({editServicePackage: e});
    // END HIDE MODAL UPADTE SERVICE PACKAGE

    // UPADTE SERVICE PACKAGE
    updateDataServicePackage = data => {
        let serviceUpdated =this.state.servicePackages;
        serviceUpdated.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.name = data.name;
                element.price = data.price;
                element.support = data.support;
                element.no_support = data.no_support;
            }
        });
        this.setState({servicePackages: serviceUpdated});
        // ADD TO SERVER...
    }
    // END UPADTE SERVICE PACKAGE

    // REMOVE SERVICE
    removeService = id => this.setState({servicePackages: this.state.servicePackages.filter(item => parseInt(item.id) !== parseInt(id))});
    // end REMOVE SERVICE

    // IS CHANGE
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANGE

    // SHOW POST IN SELECT MULTIPLE
    showAllPostInSelect = () => this.state.postsAll.map((value, key) => <option key={key} value={value.id}>{value.postTitle}</option>);
    // END SHOW POST IN SELECT MULTIPLE

    // IS CHANGE MULTIPLE SELECT
    isChangeSelectMultiple = e => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
            value.push(options[i].value);
            }
        }
        this.setState({selectPosts:value});
        
    }
    // END IS CHANGE MULTIPLE SELECT

    // UPDATE EXPLAIN
    updateExplain = e => {
        e.preventDefault();
        let explain = {};
        explain.name = this.state.title_primary; 
        explain.short = this.state.title_sub; 
        explain.postsExplain = this.state.selectPosts;
        console.log(explain);
        
    }
    // END UPDATE EXPLAIN

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-leaf icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang các gói dịch vụ
                        <div className="page-title-subheading">Thay đổi nội dung hiển thị các gói dịch vụ của công ty.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Title page */}
                <HeaderPage getHeader={e => this.getHeader(e)}/>
                {/* End Title page */}

                {/* Service pakages */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card bg-light">
                            {/* Header */}
                            <div className="card-header justify-content-sm-between">
                                <span className="d-block">Danh sách gói dịch vu của công ty</span>
                                <button onClick={() => this.showAddServicePackage()} className="btn-pill btn-wide btn btn-alternate btn-sm show mr-sm-3">Thêm gói</button>
                            </div>
                            {/* End Header */}
                            {/* Propertys list */}
                            <div className="card-body">
                                <div className="row">
                                    {this.showAllServicePackage()}
                                </div>
                            </div>
                            {/* End Propertys list */}
                            <div className="d-block text-left card-footer" />
                        </div>
                    </div>
                </div>
                {/* End Service pakages */}

                {/* Add Service pakages */}
                
                {this.showAllModal()}
                
                {/* End Add Service pakages */}
                
                {/* Link to POST */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card bg-light">
                            <div className="card-header">Dẫn bài viết</div>
                            <form className="form">
                                <div className="card-body bg-light">
                                    <div className="position-relative row form-group">
                                        <label htmlFor="title-sub" className="col-sm-2 col-form-label">Tiêu đề:</label>
                                        <div className="col-sm-10">
                                            <input onChange={e => this.isChange(e)} name="title_primary" id="title-sub" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="title-sub" className="col-sm-2 col-form-label">Trích dẫn:</label>
                                        <div className="col-sm-10">
                                            <input onChange={e => this.isChange(e)} name="title_sub" id="title-sub" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="position-relative row form-group">
                                        <label htmlFor="select-posts" className="col-sm-2 col-form-label">Link dẫn bài viết:</label>
                                        <div className="col-sm-10">
                                            <select onChange={e => this.isChangeSelectMultiple(e)} multiple={true} defaultValue={this.state.selectPosts} name="selectPosts" id="select-posts" size={5} className="form-control">
                                                
                                                {this.showAllPostInSelect()}

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-block left card-footer">
                                    <button onClick={e => this.updateExplain(e)} className="btn-wide btn btn-success">Áp dụng</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* End Link to POST */}
                </div>

        );
    }
}

export default ServicesPakage;