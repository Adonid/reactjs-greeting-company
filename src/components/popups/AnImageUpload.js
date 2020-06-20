import React, { Component } from 'react';

class AnImageUpload extends Component {

    // IS CHECKED
    isChecked = (event) => event.target.checked ? this.props.getImageSelect(this.props.IdImage) : console.log('Uncheck');
    // END IS CHECK

    // SEND KEY OF IMAGE TO REMOVE
    sendKeyToRemove = () => this.props.getKeyImage(this.props.IdImage);
    // END SEND KEY OF IMAGE TO REMOVE

    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="main-card mb-3 card">
                    <input onChange={(event) => this.isChecked(event)} type="radio" name="select-image" id={"img"+this.props.IdImage} className="position-absolute d-none" />
                    <label htmlFor={"img"+this.props.IdImage} className="mb-0 label-select-image position-absolute w-100" />
                    <button onClick={() => this.sendKeyToRemove()} type="button" className="btn btn-danger remove-image position-absolute fixed-top pr-1 pt-0 pb-0 pl-1" title="Xóa ảnh"><i className="pe-7s-trash color-white" /></button>
                    <img src={this.props.image} alt="Nice" className="card-img img-fluid" />
                </div>
            </div>
        );
    }
}

export default AnImageUpload;