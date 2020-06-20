import React, { Component } from 'react';
import HeaderPage from './elements/HeaderPage';
class Posts extends Component {

    // GET HEADER
    getHeader = e => {
        console.log(e);
       // UPDATE HEADER... 
    }
    // END GET HEADER
    
    render() {
        return (
            <div className="app-main__inner">
                {/* Header PAGE */}
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div className="page-title-icon">
                        <i className="pe-7s-note2 icon-gradient bg-mean-fruit" />
                        </div>
                        <div>Quản lý giao diện trang các bài viết
                        <div className="page-title-subheading">Thay đổi nội dung hiển thị trang các bài viết.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header PAGE */}

                {/* Title page */}
                <HeaderPage getHeader={e => this.getHeader(e)}/>
                {/* End Title page */}
            </div>
        );
    }
}

export default Posts;