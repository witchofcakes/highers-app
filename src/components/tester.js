import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from '@material-ui/core/Slider';

const classes = {
    root: {
        width: 300
    },
    slider: {
        padding: "22px 0px"
    }
};

export default class Test extends React.Component {
    state = {
        slider1: 0,
    };

    handleChange = name => (e, value) => {
        this.setState({
            [name]: value
        });
    };

    render() {

        const { slider1, slider2 } = this.state;

        return (
            <div className={classes.root}>
                <Slider
                    classes={{ container: classes.slider }}
                    value={slider1}
                    aria-labelledby="label"
                    onChange={this.handleChange("slider1")}
                />
            </div>
        );
    }
}

Test.propTypes = {
    classes: PropTypes.object.isRequired
};