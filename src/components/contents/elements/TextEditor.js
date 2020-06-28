import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state={
            content: this.props.content
        };
        this.props.getTextEditor(this.state.content);
    }
    render() {
        return (
            <div className="col-xs-12 bg-white">
                <Editor
                    apiKey="g6j5aqzhhcuqyw9tlkubpsl1x1hd0l0ze7exfz3id0xqxs97"
                    initialValue={this.state.content}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview print | insertfile image media template link anchor codesample | ltr rtl',
                        toolbar_sticky: false,
                        autosave_ask_before_unload: true,
                        autosave_interval: "30s",
                        autosave_prefix: "{path}{query}-{id}-",
                        autosave_restore_when_empty: false,
                        autosave_retention: "2m",
                        a11y_advanced_options: true,
                        image_advtab: true,
                        image_caption: true,
                        image_list: [
                            {title: '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="nice" />', value: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' },
                            {title: 'My image 2', value: 'https://i.ytimg.com/an_webp/qCdE6IL62yQ/mqdefault_6s.webp?du=3000&sqp=CNDAi_cF&rs=AOn4CLB1spjuimjOpVyQsCRICCHRObjWRw' }
                        ],
                        image_class_list: [
                            { title: 'None', value: '' },
                            { title: 'Some class', value: 'img-fluid rounded' }
                        ],
                        // file_picker_types: 'image',  // file image media
                        automatic_uploads: false,
                        file_picker_callback: function (callback, value, meta) {
                            /* Provide file and text for the link dialog */
                            if (meta.filetype === 'file') {
                              callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
                            }
                            /* Provide image and alt text for the image dialog */
                            if (meta.filetype === 'image') {
                                var input = document.createElement('input');
                                input.setAttribute('type', 'file');
                                input.setAttribute('accept', 'image/*');

                                /*
                                Note: In modern browsers input[type="file"] is functional without
                                even adding it to the DOM, but that might not be the case in some older
                                or quirky browsers like IE, so you might want to add it to the DOM
                                just in case, and visually hide it. And do not forget do remove it
                                once you do not need it anymore.
                                */
                                input.onchange = function () {
                                var file = this.files[0];
                                var reader = new FileReader();
                                reader.addEventListener("load", function () {
                                    /*
                                    Note: Now we need to register the blob in TinyMCEs image blob
                                    registry. In the next release this part hopefully won't be
                                    necessary, as we are looking to handle it internally.
                                    */                                   
                                    const ext = file.name.substring(file.name.lastIndexOf('.') + 1);
                                    console.log(ext);
                                    
                                    const imgbase64 = reader.result.split(',')[1];
                                    console.log(imgbase64);

                                   /* Call AXIOS -> API HERE */
                                   
                                   /* call the callback and populate the Title field with the file name */
                                    callback('url_image_from_API', { title: file.name });
                                });
                                reader.readAsDataURL(file);
                                };
                                input.click();
                            }
                            /* Provide alternative source and posted for the media dialog */
                            if (meta.filetype === 'media') {
                              callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
                            }
                        },
                    }}
                    onChange={e => this.props.getTextEditor(e.target.getContent())}
                />
            </div>
        );
    }  
}
export default TextEditor;