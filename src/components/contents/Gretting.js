import React, { Component } from 'react';
import HeaderPage from './elements/HeaderPage';
import Agreeting from './elements/Agreeting';
import Greetings from '../../dataTest/greeting.json'
import AddGreetingModal from '../popups/AddGreetingModal';
import EditGreetingModal from '../popups/EditGreetingModal';
class Gretting extends Component {
    constructor(props) {
        super(props);
        this.state={
            greetings: Greetings,
            dataEdit:'',
            edit: false,
            add: false
        }
    }

    // GET HEADER
    getHeader = header => {
        console.log(header);
        
    }
    // END GET HEADER

    // SHOW ALL GREETINGS
    showGreeting = () => this.state.greetings.map((value, key) => <Agreeting 
                                                                        key={key} 
                                                                        idG={value.id} 
                                                                        image={value.image} 
                                                                        short={value.short} 
                                                                        title={value.title} 
                                                                        ability={value.ability} 
                                                                        showEditGreetingModal={data => this.showEditGreetingModal(data)} 
                                                                        removeGreeting={id => this.removeGreeting(id)}
                                                                    />);
    // END SHOW ALL GREETINGS

    // SHOW MODAL STATUS
    showModalStatus = () => {
        if (this.state.add === true && this.state.edit===false) {
            return <AddGreetingModal add={this.state.add} hideModalAdd={e => this.hideModalAdd(e)} getDataGreeting={data => this.getDataGreeting(data)}/>;
        } else if(this.state.add === false && this.state.edit===true){
            return <EditGreetingModal edit={this.state.edit} hideModalEdit={e => this.hideModalEdit(e)} greeting={this.state.dataEdit} updateDataGreeting={data => this.updateDataGreeting(data)}/>
        }
        else return false;
    }
    // END SHOW MODAL STATUS

    // SHOW MODAL ADD
    shoModalAdd = () => this.setState({add: true})
    // END SHOW MODAL ADD

    // HIDE MODAL ADD
    hideModalAdd = e => this.setState({add: e});
    // END HIDE MODAL ADD

    // GET DATA GREETING ADD
    getDataGreeting = data => {
        this.setState({greetings: [...this.state.greetings, data]});
        // ADD TO SERVER
        
    }
    // END GET DATA GREETING ADD

    // SHOW EDIT GREETING
    showEditGreetingModal = data => this.setState({edit: true, dataEdit: data});
    // END SHOW EDIT GREETING

    // HIDE MODAL ADD
    hideModalEdit = e => this.setState({edit: e});
    // END HIDE MODAL EDIT

    // UPDATE DATA GREETING
    updateDataGreeting = data => {
        let greetingsUpdated =this.state.greetings;
        greetingsUpdated.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.title = data.title;
                element.short = data.short;
                element.image = data.image;
                element.ability = data.ability;
            }
        });
        this.setState({greetings: greetingsUpdated});
        // UPDATE TO SERVER
        
    }
    // END UPDATE DATA GREETING

    // REMOVE GREETING
    removeGreeting = id => this.setState({greetings: this.state.greetings.filter(item => parseInt(item.id) !== id)});
    // END REMOVE GREETING

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-notebook icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang giới thiệu công ty
                        <div className="page-title-subheading">Thay đổi nội dung hiển thị trên trang thiệu.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Title page */}
                    <HeaderPage getHeader={e => this.getHeader(e)}/>
                {/* End Title page */}

                {/* Propertys */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-card mb-3 card bg-light">
                                
                                {/* Header */}
                                <div className="card-header justify-content-sm-between">
                                    <span className="d-block">Danh sách các đặc tính &amp; khả năng của công ty</span>
                                    <button onClick={() => this.shoModalAdd()} className="btn-pill btn-wide btn btn-alternate btn-sm show mr-sm-3">Thêm</button>
                                </div>
                                {/* End Header */}

                                {/* Propertys list */}
                                <div className="card-body">
                                    <div className="row">
                                        
                                        {this.showGreeting()}

                                    </div>
                                </div>
                                {/* End Propertys list */}
                                <div className="d-block text-left card-footer">
                                </div>
                            </div>
                        </div>
                    </div>
                {/* End Propertys */}

                {/* Add new Propertys */}
                    {this.showModalStatus()}
                {/* End Add new Propertys */}
               
            </div>
        );
    }
}

export default Gretting;