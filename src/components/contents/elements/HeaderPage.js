import React, { Component } from 'react';
import CropImage from './CropImage';

class HeaderPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:'',
            imageBase64:'',
            title:'',
            slugan:''
        }
    }

    // CROP IMAGE
    getCropImage = e => this.setState({imageBase64: e});
    // END CROP IMAGE

    // IS CHANGE
    isChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name] : value
        });
    }
    // END IS CHANGE

    // SAVE
    sendData = e => {
        e.preventDefault();
        let header = {};
        header.title = this.state.title;
        header.slugan = this.state.slugan;
        header.image = this.state.imageBase64;
        this.props.getHeader(header);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <div className="main-card mb-3 card bg-light">
                    <div className="card-header">Phần giới thiệu</div>
                    <form>
                    <div className="card-body bg-light">
                        <div className="position-relative row form-group">
                        <label htmlFor="title-text" className="col-sm-2 col-form-label">Tiêu đề:</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.isChange(e)} name="title" id="title-text" type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="position-relative row form-group">
                        <label htmlFor="sort-text" className="col-sm-2 col-form-label">Câu nói (Slugan)</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.isChange(e)} name="slugan" id="sort-text" type="text" className="form-control" />
                        </div>
                        </div>
                        <div className="position-relative row form-group">
                        <label htmlFor="image-header" className="col-sm-2 col-form-label">Ảnh tiêu đề:</label>
                        <div className="col-sm-10">
                            <CropImage image={this.state.image} getBaseCrop={(base64) => this.getCropImage(base64)} short="Ảnh tiêu đề làm ấn tượng với khách hàng ngay sau khi vào xem trang web."/>
                        </div>
                        </div>
                    </div>
                    <div className="d-block left card-footer">
                        <button type="reset" className="mr-2 btn-icon btn-icon-only btn btn-light">Canced</button>
                        <button onClick={e => this.sendData(e)} className="btn-wide btn btn-success">Áp dụng</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default HeaderPage;