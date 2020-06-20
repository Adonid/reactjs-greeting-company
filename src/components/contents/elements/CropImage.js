import React, { Component } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const uri = 'assets/images/';
class CropImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // For CROPPER
            src: uri+(this.props.image ? this.props.image : 'dia-diem-du-lich-va-canh-dep-nhat-ban.jpg'),
            crop: {
              unit: 'px',
              x: 20,
              y: 20,
              width: 50,
              height: 35,
              aspect: null,
            },
        }
    }  
    
        // COMBOS function CROP IMAGE

        onSelectFile = e => {
            if (e.target.files && e.target.files.length > 0) {
                const reader = new FileReader();
                reader.addEventListener('load', () => this.setState({ src: reader.result}));
                reader.readAsDataURL(e.target.files[0]);
            }
        };
        
        // If you setState the crop in here you should return false.
        onImageLoaded = image => {
        this.imageRef = image;
        };
    
        onCropComplete = crop => {
        this.makeClientCrop(crop);
        };
    
        onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
        };
    
        async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop
            );
            // Send to Parent component
            this.setState({ croppedImageUrl });
            this.props.getBaseCrop(croppedImageUrl);
        }
        }
    
        getCroppedImg(image, crop) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
            return canvas.toDataURL('image/jpeg');
        // return new Promise((resolve, reject) => {
        //   canvas.toBlob(blob => {
        //     if (!blob) {
        //       reject(new Error('Canvas is empty'));
        //     //   console.error('Canvas is empty');
        //       return;
        //     }
        //     blob.name = fileName;
        //     window.URL.revokeObjectURL(this.fileUrl);
        //     this.fileUrl = window.URL.createObjectURL(blob);
        //     resolve(this.fileUrl);
        //   }, 'image/jpeg', 1);
        // });
        }
        //   end combos function CROP image

    render() {
        return (
            <div className="position-relative row form-group">
                <div className="col-sm-2 col-form-label" style={{height: 'fit-content'}}>
                    <button className="btn-icon btn-icon-only btn btn-info btn-block">
                        <input onChange={this.onSelectFile} type="file" className="position-absolute w-100 fixed-top fixed-bottom" accept="image/*" style={{opacity: 0}}/>
                        <i className="pe-7s-upload btn-icon-wrapper"> </i> Upload ảnh 
                    </button>
                    <p>
                        <small className="text-mute">{this.props.short}</small>
                    </p>
                </div>
                <div className="col-sm-6">
                    <ReactCrop
                        src={this.state.src}
                        crop={this.state.crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                    />
                </div>
                <div className="col-sm-4">
                    {this.state.croppedImageUrl && ( <img className="img-fluid" alt="Crop" style={{ maxWidth: '100%' }} src={this.state.croppedImageUrl} />)}
                </div>
            </div>
        );
    }
}

export default CropImage;