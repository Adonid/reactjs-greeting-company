import React, { Component } from 'react';
import CropImage from './elements/CropImage';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:'',
            logo:'',
            logoBase64:'',
            imgTitleBase64:'',
            title:'',
            slugan:'',
            linkpage:''
        }
    }

    // CROP LOGO
    getLogoCrop = e => this.setState({logoBase64: e});
    // END CROP LOGO

     // CROP IMGTITLE
     getImgTitleCrop = e => this.setState({imgTitleBase64: e});
     // END CROP IMGTITLE

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
     applyPage = e => {
         e.preventDefault();
         let page = {};
         page.title = this.state.title;
         page.slugan = this.state.slugan;
         page.linkpage = this.state.linkpage;
         page.logo = this.state.logoBase64;
         page.image = this.state.imgTitleBase64;
         console.log(page);
         
     }
    
    render() {
        return (
                <div className="app-main__inner">
                    {/* Header PAGE */}
                    <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                        <div className="page-title-icon">
                            <i className="pe-7s-exapnd2 icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang chủ
                            <div className="page-title-subheading">Thay đổi nội dung hiển thị trên trang chủ.
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Header PAGE */}

                    {/* Accept post */}
                    <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card bg-light">
                        <div className="card-header">Phần giới thiệu</div>
                        <form className="exp">
                            <div className="card-body bg-light">
                            <div className="position-relative row form-group">
                                <label htmlFor="logo-campany" className="col-sm-2 col-form-label">Logo trang Web:</label>
                                <div className="col-sm-10">

                                    <CropImage image={this.state.logo} getBaseCrop={(base64) => this.getLogoCrop(base64)}/>

                                </div>
                            </div>
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
                                <label htmlFor="exampleFile" className="col-sm-2 col-form-label">Ảnh tiêu đề:</label>
                                <div className="col-sm-10">

                                    <CropImage image={this.state.image} getBaseCrop={(base64) => this.getImgTitleCrop(base64)}/>
                                
                                </div>
                            </div>
                            <div className="position-relative row form-group">
                                <label htmlFor="select-link" className="col-sm-2 col-form-label">Link tới trang:</label>
                                <div className="col-sm-10">
                                <select onChange={e => this.isChange(e)} name="linkpage" className="form-control-sm form-control" id="select-link">
                                    <option value={1}>Link trang 1</option>
                                    <option value={2}>Link trang 2</option>
                                    <option value={3}>Link trang 3</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            <div className="d-block left card-footer">
                                <button type="reset" className="mr-2 btn-icon btn-icon-only btn btn-light">Canced</button>
                                <button onClick={e => this.applyPage(e)} className="btn-wide btn btn-success">Áp dụng</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    {/* End accept post */}
                </div>


        );
    }
}

export default Home;