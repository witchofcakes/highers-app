import React, {Component} from 'react';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
    ]
};


export default class Test extends React.Component {

    state = {
        value: RichTextEditor.createEmptyValue(),
    }

    onChange = (value) => {
        this.setState({value});
    };

    render() {

        return (
            <div>
                <div className="row rowwwwwwww">
                    <div className="col-10">
                <RichTextEditor
                    value={this.state.value}
                    onChange={this.onChange}
                    placeholder="Введіть текст тут"
                    toolbarConfig={toolbarConfig}
                />
                    </div>
                </div>
                <textarea
                    className="source"
                    placeholder="Editor Source"
                    value={this.state.value.toString('html')}
                />
            </div>
        );
    }
}