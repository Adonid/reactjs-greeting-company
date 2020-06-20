import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.min.css';
class ModalIcon extends Component {

    // HIDE MODAL
    hideModal = () => this.props.hideModalIcon(false);
    // END HIDE MODAL
    render() {
        return (
            <Modal show={this.props.showIcon} size="lg" backdrop="static">
                <div className="modal-body pl-0 pr-0 pt-0 pb-0">
                    <div className="row">
                        <div className="col pl-0 pr-0 pt-0 pb-0">
                            <div className="main-card card">
                                <div className="card-header">
                                    <span className="d-block">
                                        <i className="header-icon lnr-license icon-gradient bg-plum-plate"> </i>
                                        Thêm mới về đặc điểm công nghệ
                                    </span>
                                </div>
                                <div className="card-body">
                                <PerfectScrollbar style={{maxHeight: '440px', padding: '3px'}}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-album"> </i>
                                                <p>pe-7s-album</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-arc"> </i>
                                                <p>pe-7s-arc</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-back-2"> </i>
                                                <p>pe-7s-back-2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-bandaid"> </i>
                                                <p>pe-7s-bandaid</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-car"> </i>
                                                <p>pe-7s-car</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-diamond"> </i>
                                                <p>pe-7s-diamond</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-door-lock"> </i>
                                                <p>pe-7s-door-lock</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-eyedropper"> </i>
                                                <p>pe-7s-eyedropper</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-female"> </i>
                                                <p>pe-7s-female</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-gym"> </i>
                                                <p>pe-7s-gym</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-hammer"> </i>
                                                <p>pe-7s-hammer</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-headphones"> </i>
                                                <p>pe-7s-headphones</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-helm"> </i>
                                                <p>pe-7s-helm</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-hourglass"> </i>
                                                <p>pe-7s-hourglass</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-leaf"> </i>
                                                <p>pe-7s-leaf</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-magic-wand"> </i>
                                                <p>pe-7s-magic-wand</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-male"> </i>
                                                <p>pe-7s-male</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-map-2"> </i>
                                                <p>pe-7s-map-2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-next-2"> </i>
                                                <p>pe-7s-next-2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-paint-bucket"> </i>
                                                <p>pe-7s-paint-bucket</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-pendrive"> </i>
                                                <p>pe-7s-pendrive</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-photo"> </i>
                                                <p>pe-7s-photo</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-piggy"> </i>
                                                <p>pe-7s-piggy</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-plugin"> </i>
                                                <p>pe-7s-plugin</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-refresh-2"> </i>
                                                <p>pe-7s-refresh-2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-rocket"> </i>
                                                <p>pe-7s-rocket</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-settings"> </i>
                                                <p>pe-7s-settings</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-shield"> </i>
                                                <p>pe-7s-shield</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-smile"> </i>
                                                <p>pe-7s-smile</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-usb"> </i>
                                                <p>pe-7s-usb</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-vector"> </i>
                                                <p>pe-7s-vector</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-wine"> </i>
                                                <p>pe-7s-wine</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-cloud-upload"> </i>
                                                <p>pe-7s-cloud-upload</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-cash"> </i>
                                                <p>pe-7s-cash</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-close"> </i>
                                                <p>pe-7s-close</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-bluetooth"> </i>
                                                <p>pe-7s-bluetooth</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-cloud-download"> </i>
                                                <p>pe-7s-cloud-download</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-way"> </i>
                                                <p>pe-7s-way</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-close-circle"> </i>
                                                <p>pe-7s-close-circle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-id"> </i>
                                                <p>pe-7s-id</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-up"> </i>
                                                <p>pe-7s-angle-up</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-wristwatch"> </i>
                                                <p>pe-7s-wristwatch</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-up-circle"> </i>
                                                <p>pe-7s-angle-up-circle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-world"> </i>
                                                <p>pe-7s-world</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-right"> </i>
                                                <p>pe-7s-angle-right</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-volume"> </i>
                                                <p>pe-7s-volume</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-right-circle"> </i>
                                                <p>pe-7s-angle-right-circle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-users"> </i>
                                                <p>pe-7s-users</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-left"> </i>
                                                <p>pe-7s-angle-left</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-user-female"> </i>
                                                <p>pe-7s-user-female</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-left-circle"> </i>
                                                <p>pe-7s-angle-left-circle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-up-arrow"> </i>
                                                <p>pe-7s-up-arrow</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-down"> </i>
                                                <p>pe-7s-angle-down</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-switch"> </i>
                                                <p>pe-7s-switch</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-angle-down-circle"> </i>
                                                <p>pe-7s-angle-down-circle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-scissors"> </i>
                                                <p>pe-7s-scissors</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-wallet"> </i>
                                                <p>pe-7s-wallet</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-safe"> </i>
                                                <p>pe-7s-safe</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-volume2"> </i>
                                                <p>pe-7s-volume2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-volume1"> </i>
                                                <p>pe-7s-volume1</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-voicemail"> </i>
                                                <p>pe-7s-voicemail</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-video"> </i>
                                                <p>pe-7s-video</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-user"> </i>
                                                <p>pe-7s-user</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-upload"> </i>
                                                <p>pe-7s-upload</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-unlock"> </i>
                                                <p>pe-7s-unlock</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-umbrella"> </i>
                                                <p>pe-7s-umbrella</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-trash"> </i>
                                                <p>pe-7s-trash</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-tools"> </i>
                                                <p>pe-7s-tools</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-timer"> </i>
                                                <p>pe-7s-timer</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-ticket"> </i>
                                                <p>pe-7s-ticket</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-target"> </i>
                                                <p>pe-7s-target</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-sun"> </i>
                                                <p>pe-7s-sun</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-study"> </i>
                                                <p>pe-7s-study</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-stopwatch"> </i>
                                                <p>pe-7s-stopwatch</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-star"> </i>
                                                <p>pe-7s-star</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-speaker"> </i>
                                                <p>pe-7s-speaker</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-signal"> </i>
                                                <p>pe-7s-signal</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-shuffle"> </i>
                                                <p>pe-7s-shuffle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-shopbag"> </i>
                                                <p>pe-7s-shopbag</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-share"> </i>
                                                <p>pe-7s-share</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-server"> </i>
                                                <p>pe-7s-server</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-search"> </i>
                                                <p>pe-7s-search</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-film"> </i>
                                                <p>pe-7s-film</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-science"> </i>
                                                <p>pe-7s-science</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-disk"> </i>
                                                <p>pe-7s-disk</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-ribbon"> </i>
                                                <p>pe-7s-ribbon</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-repeat"> </i>
                                                <p>pe-7s-repeat</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-refresh"> </i>
                                                <p>pe-7s-refresh</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-add-user"> </i>
                                                <p>pe-7s-add-user</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-refresh-cloud"> </i>
                                                <p>pe-7s-refresh-cloud</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-paperclip"> </i>
                                                <p>pe-7s-paperclip</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-radio"> </i>
                                                <p>pe-7s-radio</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-note2"> </i>
                                                <p>pe-7s-note2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-print"> </i>
                                                <p>pe-7s-print</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-network"> </i>
                                                <p>pe-7s-network</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-prev"> </i>
                                                <p>pe-7s-prev</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-mute"> </i>
                                                <p>pe-7s-mute</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-power"> </i>
                                                <p>pe-7s-power</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-medal"> </i>
                                                <p>pe-7s-medal</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-portfolio"> </i>
                                                <p>pe-7s-portfolio</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-like2"> </i>
                                                <p>pe-7s-like2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-plus"> </i>
                                                <p>pe-7s-plus</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-left-arrow"> </i>
                                                <p>pe-7s-left-arrow</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-play"> </i>
                                                <p>pe-7s-play</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-key"> </i>
                                                <p>pe-7s-key</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-plane"> </i>
                                                <p>pe-7s-plane</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-joy"> </i>
                                                <p>pe-7s-joy</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-photo-gallery"> </i>
                                                <p>pe-7s-photo-gallery</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-pin"> </i>
                                                <p>pe-7s-pin</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-phone"> </i>
                                                <p>pe-7s-phone</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-plug"> </i>
                                                <p>pe-7s-plug</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-pen"> </i>
                                                <p>pe-7s-pen</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-right-arrow"> </i>
                                                <p>pe-7s-right-arrow</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-paper-plane"> </i>
                                                <p>pe-7s-paper-plane</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-delete-user"> </i>
                                                <p>pe-7s-delete-user</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-paint"> </i>
                                                <p>pe-7s-paint</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-bottom-arrow"> </i>
                                                <p>pe-7s-bottom-arrow</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-notebook"> </i>
                                                <p>pe-7s-notebook</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-note"> </i>
                                                <p>pe-7s-note</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-next"> </i>
                                                <p>pe-7s-next</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-news-paper"> </i>
                                                <p>pe-7s-news-paper</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-musiclist"> </i>
                                                <p>pe-7s-musiclist</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-music"> </i>
                                                <p>pe-7s-music</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-mouse"> </i>
                                                <p>pe-7s-mouse</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-more"> </i>
                                                <p>pe-7s-more</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-moon"> </i>
                                                <p>pe-7s-moon</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-monitor"> </i>
                                                <p>pe-7s-monitor</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-micro"> </i>
                                                <p>pe-7s-micro</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-menu"> </i>
                                                <p>pe-7s-menu</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-map"> </i>
                                                <p>pe-7s-map</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-map-marker"> </i>
                                                <p>pe-7s-map-marker</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-mail"> </i>
                                                <p>pe-7s-mail</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-mail-open"> </i>
                                                <p>pe-7s-mail-open</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-mail-open-file"> </i>
                                                <p>pe-7s-mail-open-file</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-magnet"> </i>
                                                <p>pe-7s-magnet</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-loop"> </i>
                                                <p>pe-7s-loop</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-look"> </i>
                                                <p>pe-7s-look</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-lock"> </i>
                                                <p>pe-7s-lock</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-lintern"> </i>
                                                <p>pe-7s-lintern</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-link"> </i>
                                                <p>pe-7s-link</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-like"> </i>
                                                <p>pe-7s-like</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-light"> </i>
                                                <p>pe-7s-light</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-less"> </i>
                                                <p>pe-7s-less</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-keypad"> </i>
                                                <p>pe-7s-keypad</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-junk"> </i>
                                                <p>pe-7s-junk</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-info"> </i>
                                                <p>pe-7s-info</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-home"> </i>
                                                <p>pe-7s-home</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-help2"> </i>
                                                <p>pe-7s-help2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-help1"> </i>
                                                <p>pe-7s-help1</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-graph3"> </i>
                                                <p>pe-7s-graph3</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-graph2"> </i>
                                                <p>pe-7s-graph2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-graph1"> </i>
                                                <p>pe-7s-graph1</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-graph"> </i>
                                                <p>pe-7s-graph</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-global"> </i>
                                                <p>pe-7s-global</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-gleam"> </i>
                                                <p>pe-7s-gleam</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-glasses"> </i>
                                                <p>pe-7s-glasses</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-gift"> </i>
                                                <p>pe-7s-gift</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-folder"> </i>
                                                <p>pe-7s-folder</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-flag"> </i>
                                                <p>pe-7s-flag</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-filter"> </i>
                                                <p>pe-7s-filter</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-file"> </i>
                                                <p>pe-7s-file</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-expand1"> </i>
                                                <p>pe-7s-expand1</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-exapnd2"> </i>
                                                <p>pe-7s-exapnd2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-edit"> </i>
                                                <p>pe-7s-edit</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-drop"> </i>
                                                <p>pe-7s-drop</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-drawer"> </i>
                                                <p>pe-7s-drawer</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-download"> </i>
                                                <p>pe-7s-download</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-display2"> </i>
                                                <p>pe-7s-display2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-display1"> </i>
                                                <p>pe-7s-display1</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-diskette"> </i>
                                                <p>pe-7s-diskette</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-date"> </i>
                                                <p>pe-7s-date</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-cup"> </i>
                                                <p>pe-7s-cup</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-culture"> </i>
                                                <p>pe-7s-culture</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-crop"> </i>
                                                <p>pe-7s-crop</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-credit"> </i>
                                                <p>pe-7s-credit</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-copy-file"> </i>
                                                <p>pe-7s-copy-file</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-config"> </i>
                                                <p>pe-7s-config</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-compass"> </i>
                                                <p>pe-7s-compass</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-comment"> </i>
                                                <p>pe-7s-comment</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-coffee"> </i>
                                                <p>pe-7s-coffee</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-cloud"> </i>
                                                <p>pe-7s-cloud</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-clock"> </i>
                                                <p>pe-7s-clock</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-check"> </i>
                                                <p>pe-7s-check</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-chat"> </i>
                                                <p>pe-7s-chat</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-cart"> </i>
                                                <p>pe-7s-cart</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-camera"> </i>
                                                <p>pe-7s-camera</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-call"> </i>
                                                <p>pe-7s-call</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-calculator"> </i>
                                                <p>pe-7s-calculator</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-browser"> </i>
                                                <p>pe-7s-browser</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-box2"> </i>
                                                <p>pe-7s-box2</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-box1"> </i>
                                                <p>pe-7s-box1</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-bookmarks"> </i>
                                                <p>pe-7s-bookmarks</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-bicycle"> </i>
                                                <p>pe-7s-bicycle</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-bell"> </i>
                                                <p>pe-7s-bell</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-battery"> </i>
                                                <p>pe-7s-battery</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-ball"> </i>
                                                <p>pe-7s-ball</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-back"> </i>
                                                <p>pe-7s-back</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-attention"> </i>
                                                <p>pe-7s-attention</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-anchor"> </i>
                                                <p>pe-7s-anchor</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-albums"> </i>
                                                <p>pe-7s-albums</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-alarm"> </i>
                                                <p>pe-7s-alarm</p></div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="font-icon-wrapper"><i className="pe-7s-airplay"> </i>
                                                <p>pe-7s-airplay</p></div>
                                            </div>
                                        </div>
                                    </PerfectScrollbar>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={() => this.hideModal()} type="button" className="mr-2 mt-1 btn btn-light">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ModalIcon;