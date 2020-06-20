import React, { Component } from 'react';

class TitleContent extends Component {
    render() {
        return (
            <div className="app-page-title">
                <div className="page-title-wrapper">
                <div className="page-title-heading">
                    <div className="page-title-icon">
                    <i className="pe-7s-server icon-gradient bg-mean-fruit" />
                    </div>
                    <div>
                        {this.props.title}
                        <div className="page-title-subheading">
                            {this.props.short}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default TitleContent;