import React, { Component } from 'react';
import HeaderPage from './elements/HeaderPage';
import Feeling from '../../dataTest/FeelingPeople.json';
import AFeeling from './elements/AFeeling';
import AddFeelingModal from '../popups/AddFeelingModal';
import UpdateFeedModal from '../popups/UpdateFeedModal';
class Partner extends Component {
    constructor(props) {
        super(props);
        this.state={
            feelings: Feeling,
            add: false,
            edit: false,
            dataDefautUpdateFeed:''
        }
    }

    // SHOW ALL FEELING PEOPLE
    showAllFeeling = () => this.state.feelings.map((value, key) => <AFeeling 
                                                                        key={key} 
                                                                        name={value.name} 
                                                                        idF={value.id} 
                                                                        short={value.short} 
                                                                        linkimage={value.linkimage} 
                                                                        linkpage={value.linkpage} 
                                                                        showEditFeedModal={data => this.showEditFeedModal(data)}
                                                                    />);
    // END SHOW ALL FEELING PEOPLE

    // SHOW MODAL STATUS
    showModalStatus = () => {
        if (this.state.add===true && this.state.edit===false) {
            return <AddFeelingModal add={this.state.add} hideModalAddFeed={e => this.hideModalAddFeed(e)} getDataAdd={data => this.getDataAdd(data)} />;
        } else if(this.state.add===false && this.state.edit===true) {
            return <UpdateFeedModal edit={this.state.edit} hideModalUpateFeed={e => this.hideModalUpateFeed(e)} default={this.state.dataDefautUpdateFeed} updateDataFeed={data => this.updateDataFeed(data)} />;
        }
        else return false;
    }
    // END SHOW MODAL STATUS
    
    // GET HEADER
    getHeader = e => {
        console.log(e);
       // UPDATE HEADER... 
    }
    // END GET HEADER

    // SHOW MODAL ADD FEELING
    showAddTechnology = () => this.setState({add: true});
    // END SHOW MODAL ADD FEELING

    // HIDE MODALADD FEELING
    hideModalAddFeed = e => this.setState({add: e});
    // END HIDE MODALADD FEELING

    // GET DATA ADD FEELING
    getDataAdd = data => {
        this.setState({feelings: [...this.state.feelings, data]});
        // ADD TO SERVER...
    }
    // END GET DATA ADD FEELING

    // SHOW MODAL UPDATE FEED
    showEditFeedModal = data => this.setState({edit: true, dataDefautUpdateFeed: data});
    // END SHOW MODAL UPDATE FEED

    // HIDE MODALADD FEELING
    hideModalUpateFeed = e => this.setState({edit: e});
    // END HIDE MODALADD FEELING

    // UPDATE DATA DIRECTION
    updateDataFeed = data => {
        let FeelUpdated =this.state.feelings;
        FeelUpdated.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.name = data.name;
                element.short = data.short;
                element.linkimage = data.linkimage;
                element.linkpage = data.linkpage;
            }
        });
        this.setState({feelings: FeelUpdated});     
        // ADD TO SERVER...
    }
    // END UPDATE DATA DIRECTION

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-like2 icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang cảm của nhận khách hàng
                        <div className="page-title-subheading">Thay đổi nội dung hiển thị các cảm của nhận khách hàng.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Title page */}
                <HeaderPage getHeader={e => this.getHeader(e)}/>
                {/* End Title page */}

                {/* Feelings */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card bg-light">
                            {/* Header */}
                            <div className="card-header justify-content-sm-between">
                            <span className="d-block">Các cảm nhận của khách hàng</span>
                            <button onClick={() => this.showAddTechnology()} className="btn-pill btn-wide btn btn-alternate btn-sm show mr-sm-3">Thêm cảm nhận</button>
                            </div>
                            {/* End Header */}
                            {/* Feeling list */}
                            <div className="card-body">
                            <div className="row">
                                
                                {this.showAllFeeling()}

                            </div>
                            </div>
                            {/* End Feeling list */}
                            <div className="d-block text-left card-footer" />
                        </div>
                    </div>
                </div>
                {/* End Feelings */}

                {/* Add Feelings */}
                
                {this.showModalStatus()}
                
                {/* End Add Feelings */}
                
            </div>

        );
    }
}

export default Partner;