import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactAvatarEditor from 'react-avatar-editor'
import Button from '@material-ui/core/Button';

export default class Upload_Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            preview: null,
            open: false,
            image: '',
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5 },
            scale: 1,
            rotate: 0,
            borderRadius: 200,
            width: 250,
            height: 250,
            value: 1,
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }

    handleNewImage = e => {
        this.setState({image: e.target.files[0],})
        if(e.target.files[0]) {
            this.handleOpen();
        }
    }

    handleScale = e => {
        const scale = parseFloat(e.target.value)
        this.setState({ scale })
    }

    handlePositionChange = position => {
        this.setState({ position })
    }

    handleOpen = () => {
        this.setState({
            open: true,
        })
    };

    handleClose = () => {
        this.setState({
            open: false,
        })
    };

    render() {

        return (
            <div>
                <div className="apply-button">
                    <input
                        id="contained-button-file"
                        multiple
                        onChange={this.handleNewImage}
                        className="jss978"
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button className="upload-button" component="span">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather-camera-upload">
                                <path
                                    d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            Завантажити фото
                        </Button>
                    </label>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title-apply"
                    aria-describedby="transition-modal-description-apply"
                    className="modal-upload"
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={this.state.open}>
                        <div className="row modal-paper-upload">
                            <ReactAvatarEditor
                                scale={parseFloat(this.state.scale)}
                                width={this.state.width}
                                height={this.state.height}
                                position={this.state.position}
                                onPositionChange={this.handlePositionChange}
                                rotate={parseFloat(this.state.rotate)}
                                borderRadius={this.state.borderRadius}
                                image={this.state.image}
                                className="editor-canvas"
                            />
                            <div className="col-12 zoom-upload-div">
                                {/*<p className="zoom-upload">Збільшити</p>*/}
                                <input
                                    name="scale"
                                    type="range"
                                    onChange={this.handleScale}
                                    min={this.state.allowZoomOut ? '0.1' : '1'}
                                    max="2"
                                    step="0.01"
                                    defaultValue="1"
                                />
                            </div>
                            <div className="col-12">
                                <button className="save-upload-btn" onClick={this.handleClose}>Зберегти</button>
                                <button className="cancel-upload-btn" onClick={this.handleClose}>Відмінити</button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>

        );
    }
}