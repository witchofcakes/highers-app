import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class Test extends React.Component {
    render() {
        return (
            <div className="col-12 map-container">
                <iframe frameBorder="0" className="google-map-mobile" scrolling="no"
                        marginHeight="0" marginWidth="0"
                        src="https://www.google.com/maps/embed/v1/place?q=%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%96%D0%B8%D0%BB%D1%8F%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%2C%2048%2C%2050%D0%B0%2C%20%D0%9A%D0%B8%D1%97%D0%B2&key=AIzaSyDC2eQOHheWPhWWxe8nYSbJS15QwLHkqiY"
                        allowFullScreen>
                </iframe>
            </div>
        )
    }
}