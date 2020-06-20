import React, { Component } from 'react';
import TitleContent from './elements/TitleContent';
import APost from './elements/APost';

import postsData from '../../dataTest/data.json';

class ArchivePost extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts: postsData
        }
    }

    allPost = () => this.state.posts.map((value, key) => <APost 
                                                            key={key} 
                                                            postId={value.id} 
                                                            image={value.image} 
                                                            time={value.time} 
                                                            author={value.author} 
                                                            postTitle={value.postTitle} 
                                                            short={value.short} 
                                                            accepted={value.accepted} 
                                                            tags={value.tags} 
                                                            facebook={value.facebook}
                                                            instagram={value.instagram}
                                                            googleplus={value.googleplus}
                                                            content={value.content} 
                                                            views={value.views} 
                                                            updateChangeApproved={e => this.updateChangeApproved(e)}
                                                        />);

    filterPostIgonre = () => this.state.posts.filter(item => item.accepted === false).map((value, key) => <APost 
                                                                                                            key={key} 
                                                                                                            postId={value.id} 
                                                                                                            image={value.image} 
                                                                                                            time={value.time} 
                                                                                                            author={value.author} 
                                                                                                            postTitle={value.postTitle} 
                                                                                                            short={value.short} 
                                                                                                            accepted={value.accepted} 
                                                                                                            tags={value.tags} 
                                                                                                            facebook={value.facebook}
                                                                                                            instagram={value.instagram}
                                                                                                            googleplus={value.googleplus} 
                                                                                                            updateChangeApproved={e => this.updateChangeApproved(e)}
                                                                                                            />);
    // CHANGE APPROVED POST
    updateChangeApproved = data => {
        let postsAll = this.state.posts;
        postsAll.forEach(element => {
            if(parseInt(element.id) === parseInt(data.id)){
                element.accepted=data.accepted;
            }
        });
        this.setState({posts: postsAll});
        
        
    }
    // END CHANGE APPROVED POST

    render() {
        
        return (
            <div className="app-main__inner">

                {/* Header PAGE */}
                <TitleContent title="Trang quản lý bài viết" short="Thao tác các bài viết với tác vụ sửa, xóa, duyệt bài viết."/>
                {/* End Header PAGE */}

                {/* Posts */}
                <div className="row">
                    <div className="col-md-12">
                    <div className="main-card mb-3 card bg-light">

                        {/* Header */}
                        <div className="card-header">
                            <span className="d-block"><i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>Danh sách các bài viết</span>
                            <div className="btn-actions-pane-right mr-md-3">
                                <div className="nav">
                                <button data-toggle="tab" href="#not-accepted" className="btn-pill btn-wide mr-1 ml-1 active btn btn-outline-alternate btn-sm">Chưa duyệt</button>
                                <button data-toggle="tab" href="#all-posts" className="btn-pill btn-wide btn btn-outline-alternate btn-sm">Tất cả</button>
                                </div>
                            </div>
                            <div className="search-wrapper">
                                <div className="input-holder">
                                <input name="search" type="text" className="search-input" placeholder="Tìm bài viết..." />
                                <button className="search-icon"><span /></button>
                                </div>
                                <button className="close" />
                            </div>
                        </div>
                        {/* End Header */}

                        <div className="card-body">
                            <div className="tab-content">

                                <div className="tab-pane active" id="not-accepted" role="tabpanel">

                                    {/* Posts Igoner */}
                                    <div className="row">
                                        {
                                            this.filterPostIgonre()
                                        }
                                    </div>
                                    {/* End Posts Igonre */}
                                </div>

                                <div className="tab-pane" id="all-posts" role="tabpanel">

                                {/* ALL Posts */}
                                <div className="row">
                                    {
                                        this.allPost()
                                    }
                                </div>
                                {/* End ALL posts */}
                                </div>

                            </div>
                        </div>
                        <div className="d-block text-left card-footer">
                            <span>Show: </span>
                            <button className="mb-2 mr-2 btn-transition btn btn-outline-light active">20</button>
                            <button className="mb-2 mr-2 btn-transition btn btn-outline-light">50</button>
                            <button className="mb-2 mr-2 btn-transition btn btn-outline-light">70</button>
                            <button className="mb-2 mr-2 btn-transition btn btn-outline-light">&gt;100</button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Posts */}

                </div>

        );
    }
}

export default ArchivePost;