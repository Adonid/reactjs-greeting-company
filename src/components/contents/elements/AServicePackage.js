import React, { Component } from 'react';

class AServicePackage extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    // SHOW SERVICES IS SUPPORT
    showIsSupport = () => this.props.support.map((value, key) => <li key={key}>{value}</li>);
    // END  SHOW SERVICES IS SUPPORT
    
    // SHOW SERVICES IS NOT SUPPORT
    showIsNotSupport = () => this.props.no_support.map((value, key) => <li key={key} className="text-light">{value}</li>);
    // END  SHOW SERVICES IS NOT SUPPORT

    // SEND DATA SERVICES
    sendDataUpdate = () => {
        let data = {};
        data.id = this.props.idS;
        data.name = this.props.name;
        data.price = this.props.price;
        data.support = this.props.support;
        data.no_support = this.props.no_support;

        this.props.dataDefautUpdateService(data);
    }
    // END SEND DATA SERVICES

    // REMOVE DIRECTION
    removeService = () => this.props.removeService(this.props.idS)
    // END REMOVE DIRECTION
    
    render() {
        return (
            <div className="col-md-6 col-lg-4">
                <div className="main-card mb-3 card">
                    <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h2>{this.props.price}<small className="text-muted">K</small></h2>
                    <ul>
                        {this.showIsSupport()}

                        {this.showIsNotSupport()}

                    </ul>
                    <button onClick={() => this.removeService()} className="btn-wide btn btn-outline-danger">Xóa</button>
                    <button onClick={() => this.sendDataUpdate()} className="ml-1 btn-wide btn btn-outline-info">Sửa</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AServicePackage;