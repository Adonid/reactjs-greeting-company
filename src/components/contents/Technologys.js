import React, { Component } from 'react';
import HeaderPage from './elements/HeaderPage';
import ATechnology from './elements/ATechnology';
import ADirection from './elements/ADirection';
import AddTechnologyModal from '../popups/AddTechnologyModal';
import UpdateTechnologyModal from '../popups/UpdateTechnologyModal';

import TechnologyData from '../../dataTest/Technologys.json';
import DirectionData from '../../dataTest/Directions.json';
import AddDirectionModal from '../popups/AddDirectionModal';
import UpdateDirectionModal from '../popups/UpdateDirectionModal';
class Technologys extends Component {
    constructor(props) {
        super(props);
        this.state={
            technologys: TechnologyData,
            directions: DirectionData,
            addTechnology: false,
            editTechnology: false,
            addDirection: false,
            editDirection: false,
            dataDefautUpdate:'',
            dataDefautUpdateDirection:''
        }
    }
    
    // SHOW TECHNOLOGY
    showTechnologys = () => this.state.technologys.map((value, key) => <ATechnology 
                                                                            key={key} 
                                                                            idT={value.id} 
                                                                            title={value.title} 
                                                                            short={value.short} 
                                                                            icon={value.icon} 
                                                                            post={value.post} 
                                                                            getDataUpdate={e => this.getDataUpdate(e)} 
                                                                            removeTech={id => this.removeTech(id)}
                                                                        />);
    // END SHOW TECHNOLOGY

    // SHOW DIRECTION
    showDirections = () => this.state.directions.map((value, key) => <ADirection 
                                                                            key={key} 
                                                                            idD={value.id} 
                                                                            title={value.title} 
                                                                            icon={value.icon} 
                                                                            post={value.post} 
                                                                            dataDefautUpdateDirection={data => this.dataDefautUpdateDirection(data)} 
                                                                            removeDirection={id => this.removeDirection(id)}
                                                                    />);
    // END SHOW DIRECTION

    // SHOW MOAL STATUS TECH
    showAllModalTech = () => {
        if (this.state.addTechnology===true && this.state.editTechnology===false) {
            return <AddTechnologyModal addTechnology={this.state.addTechnology} hideModalAddTech={e => this.hideModalAddTech(e)} getDataTech={data => this.getDataTech(data)}/>;
        } else if(this.state.addTechnology===false && this.state.editTechnology===true) {
            return <UpdateTechnologyModal editTechnology={this.state.editTechnology} hideModalEditTech={e => this.hideModalEditTech(e)} default={this.state.dataDefautUpdate} updateDataTech={data => this.updateDataTech(data)}/>;
        }
        else return false;
    }
    // END SHOW MOAL STATUS TECH

    // SHOW MOAL STATUS DIRECTION
    showAllModalDirection = () => {
        if (this.state.addDirection===true && this.state.editDirection===false) {
            return <AddDirectionModal addDirection={this.state.addDirection} hideModalAddDirection={e => this.hideModalAddDirection(e)} getDataDirection={data => this.getDataDirection(data)}/>;
        } else if(this.state.addDirection===false && this.state.editDirection===true) {
            return <UpdateDirectionModal editDirection={this.state.editDirection} hideModalEditDirection={e => this.hideModalEditDirection(e)} default={this.state.dataDefautUpdateDirection} updateDataTechDirection={data => this.updateDataTechDirection(data)}/>;
        }
        else return false;
    }
    // END SHOW MOAL STATUS DIRECTION

    // SHOW MODAL ADD TECH
    showAddTechnology = () => this.setState({addTechnology: true});
    // END SHOW MODAL ADD TECH
    
    // HIDE MODAL ADD TECH
    hideModalAddTech = () => this.setState({addTechnology: false});
    // END HIDE MODAL ADD TECH

    // GET HEADER
    getHeader = e => {
        console.log(e);
       // UPDATE HEADER... 
    }
    // END GET HEADER

    // GET DATA TECHNOLOGY
    getDataTech = data => {
        this.setState({technologys: [...this.state.technologys, data]});
        // ADD TO SERVER...
        
    }
    // END GET DATA TECHNOLOGY_

    // SHOW MODAL UPDATE
    getDataUpdate = data => this.setState({editTechnology: true, dataDefautUpdate: data});
    // END SHOW MODAL UPDATE

    // HIDE MODAL UPDATE
    hideModalEditTech = e => this.setState({editTechnology: e});
    // END HIDE MODAL UPDATE

    // UPDATE DATA TECHNOLOGY
    updateDataTech = data => {
        console.log(data);
        let technologyUpdated =this.state.technologys;
        technologyUpdated.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.title = data.title;
                element.short = data.short;
                element.icon = data.icon;
                element.post = data.post;
            }
        });
        this.setState({technologys: technologyUpdated});     
        // ADD TO SERVER...
    }
    // END UPDATE DATA TECHNOLOGY

    // REMOVE TECH
    removeTech = id => this.setState({technologys: this.state.technologys.filter(item => parseInt(item.id) !== parseInt(id))});
    // END REMOVE TECH

    // SHOW MODAL ADD DIRECTION
    showAddDirection = () => this.setState({addDirection: true});
    // END SHOW MODAL ADD DIRECTION
    
    // HIDE MODAL ADD DIRECTION
    hideModalAddDirection = e => this.setState({addDirection: e});
    // END HIDE MODAL ADD DIRECTION

    // GET DATA DIRECTION
    getDataDirection = data => {
        this.setState({directions: [...this.state.directions, data]});
        
        // ADD TO SERVER...
    }
    // END GET DATA DIRECTION

    // SHOW MODAL UPDATE DIRECTION
    dataDefautUpdateDirection = data => this.setState({editDirection: true, dataDefautUpdateDirection: data});
    // END SHOW MODAL UPDATE DIRECTION

    // HIDE MODAL UPDATE DIRECTION
    hideModalEditDirection = e => this.setState({editDirection: e});
    // END HIDE MODAL UPDATE DIRECTION

    // UPDATE DATA DIRECTION
    updateDataTechDirection = data => {
        console.log(data);
        let directionsUpdated =this.state.directions;
        directionsUpdated.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.title = data.title;
                element.icon = data.icon;
                element.post = data.post;
            }
        });
        this.setState({directions: directionsUpdated});     
        // ADD TO SERVER...
    }
    // END UPDATE DATA DIRECTION

    // REMOVE DIRECTION
    removeDirection = id => this.setState({directions: this.state.directions.filter(item => parseInt(item.id) !== parseInt(id))});
    // END REMOVE DIRECTION

    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-gleam icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang giải pháp công nghệ
                        <div className="page-title-subheading">Thay đổi nội dung hiển thị trên trang giải pháp công nghệ công ty.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Title page */}
                    <HeaderPage getHeader={e => this.getHeader(e)}/>
                {/* End Title page */}

                {/* Technologys */}
                <div className="row">
                    <div className="col-md-12">
                    <div className="main-card mb-3 card bg-light">
                        {/* Header */}
                        <div className="card-header justify-content-sm-between">
                        <span className="d-block">Danh sách các công nghệ &amp; giải pháp của công ty</span>
                        <button onClick={() => this.showAddTechnology()} className="btn-pill btn-wide btn btn-alternate btn-sm show mr-sm-3">Thêm</button>
                        </div>
                        {/* End Header */}
                        {/* Propertys list */}
                        <div className="card-body">
                            <div className="row">
                                
                            {this.showTechnologys()}
                                
                            </div>
                        </div>
                        {/* End Propertys list */}
                        <div className="d-block text-left card-footer">
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Technologys */}

                {/* Add Tecnologys */}
                
                {this.showAllModalTech()}
                    
                {/* End Add Tecnologys */}

                {/* Derections */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card bg-light">
                            {/* Header */}
                            <div className="card-header justify-content-sm-between">
                            <span className="d-block">Danh sách các xu hướng phát triển của công ty</span>
                            <button onClick={() => this.showAddDirection()} className="btn-pill btn-wide btn btn-alternate btn-sm show mr-sm-3">Thêm</button>
                            </div>
                            {/* End Header */}
                            {/* Directions list */}
                            <div className="card-body">
                                <div className="row">
                                    {this.showDirections()}
                                </div>
                            </div>
                            {/* End Directions list */}
                            <div className="d-block text-left card-footer">
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Derections */}

                {/* Add Derection */}
                
                {this.showAllModalDirection()}
                
                {/* End Add Direction */}
            </div>

        );
    }
}

export default Technologys;