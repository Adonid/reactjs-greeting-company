import React, { Component } from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import TitleContent from './elements/TitleContent';
import TextEditor from './elements/TextEditor';
import CropImage from './elements/CropImage';
import "@pathofdev/react-tag-input/build/index.css";



class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // For Tags
            tags: ['Any text'],
            // For title
            title:'',
            // For Short
            short:'',
            // Image
            image:'',
            // Share post
            facebook:false,
            instagram:false,
            googleplus:false,
            // Content
            content:''
          };
    }    
    
    // Tags input
    setTags = (newTags) => this.setState({tags: newTags});
    // End tags input

    // Change title & short
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    // End change title & short

    // Get check box
    isChecked = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        this.setState({
            [name]: value
        });
    }
    // End get check box

    // Get image base64 from CropImage
    getBaseCrop = (base64) => this.setState({image: base64});
    // End get image base64 from CropImage

    // Get text inText Editor
    getTextEditor = (text) => this.setState({content: text});
    // End Get text inText Editor

    // Change check box
      getData = () => {
        console.log(this.state.image);
        console.log(this.state.content);
        console.log(this.state.tags);
        console.log(this.state.title);
        console.log(this.state.short);
        console.log(this.state.facebook);
        console.log(this.state.instagram);
        console.log(this.state.googleplus);
      }
    
    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <TitleContent title="Trang viết bài mới" short="Viết bài và tùy chọn đăng bài (trên facebook, instagram, google plus)."/>
                {/* End Header PAGE */}

                {/* Writer */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Bài viết</div>
                            <form>
                                <div className="card-body bg-light">

                                    <div className="position-relative row form-group">
                                        <label htmlFor="title-text" className="col-sm-2 col-form-label">Tiêu đề:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(event) => this.isChange(event)} name="title" id="title-text" type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="position-relative row form-group">
                                        <label htmlFor="sort-text" className="col-sm-2 col-form-label">Trích dẫn:</label>
                                        <div className="col-sm-10">
                                            <textarea onChange={(event) => this.isChange(event)} name="short" id="sort-text" className="form-control" required />
                                        </div>
                                    </div>

                                    <CropImage getBaseCrop={(base64) => this.getBaseCrop(base64)}/>

                                    <div className="position-relative row form-group">
                                        <label className="col-sm-2 col-form-label">Chia sẻ bài viết:</label>
                                        <div className="col-sm-10">
                                            <div className="position-relative form-group mt-2">
                                                <div>
                                                    <div className="custom-checkbox custom-control custom-control-inline">
                                                    <input onChange={(event) => this.isChecked(event)} name="facebook" type="checkbox" id="facebook-icon" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="facebook-icon">share <i className="fa fa-facebook-square" aria-hidden="true" /></label>
                                                    </div>
                                                    <div className="custom-checkbox custom-control custom-control-inline">
                                                    <input onChange={(event) => this.isChecked(event)} name="instagram" type="checkbox" id="instagram-icon" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="instagram-icon">share <i className="fa fa-instagram" aria-hidden="true" /></label>
                                                    </div>
                                                    <div className="custom-checkbox custom-control custom-control-inline">
                                                    <input onChange={(event) => this.isChecked(event)} name="googleplus" type="checkbox" id="google-plus-icon" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="google-plus-icon">share <i className="fa fa-google-plus" aria-hidden="true" /></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="position-relative row form-group">
                                        <label htmlFor="content-post" className="col-sm-2 col-form-label">Nội dung bài viết:</label>
                                        <div className="col-sm-12">
                                            
                                            <TextEditor getTextEditor={(text) => this.getTextEditor(text)}/>

                                        </div>
                                    </div>

                                    <div className="position-relative row form-group">
                                        <label htmlFor="content-post" className="col-sm-2 col-form-label">Tags tìm kiếm:</label>
                                        <div className="col-sm-10">
                                            <ReactTagInput 
                                                tags={this.state.tags} 
                                                onChange={(newTags) => this.setTags(newTags)}
                                                placeholder={'Gõ & nhấn Enter'}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-block text-left card-footer">
                                    <button type="reset" className="mr-2 btn-icon btn-icon-only btn btn-light"><i className="pe-7s-trash btn-icon-wrapper"> </i> Xóa form</button>
                                    <button type="button" className="btn-wide btn btn-primary" onClick={() => this.getData()}>
                                        Đăng bài (admin duyệt)
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                {/* End writer */}

                </div>

        );
    }

    
}

export default NewPost;