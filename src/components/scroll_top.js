import React from 'react';
import { animateScroll as scroll } from 'react-scroll'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default class Scroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }


    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }


    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div className="scroll-top" onClick={() => this.scrollToTop()}>
                        <ExpandLessIcon className="scroll-top-icon"/>
                    </div>
                )}
            </div>
        );
    }

}



