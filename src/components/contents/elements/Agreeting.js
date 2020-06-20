import React, { Component } from 'react';

class Agreeting extends Component {

    // Send greeting
    sendGreeting = () => {
        let greeting = {};
        greeting.id = this.props.idG;
        greeting.title = this.props.title;
        greeting.image = this.props.image;
        greeting.short = this.props.short;
        greeting.ability = this.props.ability;
        // console.log(greeting);
        
        this.props.showEditGreetingModal(greeting);
    }
    // eND Send greeting

    // REMOVE GRETTING
    remove = () => this.props.removeGreeting(this.props.idG);
    // END REMOVE GRETTING
    render() {
        return (
            <div className="col-md-6">
                <div className="main-card mb-3 card"><img width="100%" src={this.props.image} alt="nice" className="card-img-top" />
                    <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p>{this.props.short}</p>
                    <ul>
                        {
                            this.props.ability.map((value, key) => <li key={key}>{value}</li>)
                        }
                    </ul>
                    <button onClick={() => this.remove()} className="btn-wide btn btn-outline-danger">Xóa</button>
                    <button onClick={() => this.sendGreeting()} className="ml-1 btn-wide btn btn-outline-info">Sửa</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Agreeting;