import React, {Component} from 'react';
import RichTextEditor from 'react-rte';

const toolbarConfig = {
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        {label: 'Жирний', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Курсив', style: 'ITALIC'},
        {label: 'Підкреслювання', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_BUTTONS: [
        {label: 'Ненумерований', style: 'unordered-list-item'},
        {label: 'Нумерований', style: 'ordered-list-item'}
    ]
};


export default class Text_Editor extends React.Component {

    state = {
        value: RichTextEditor.createEmptyValue(),
    }

    onChange = (value) => {
        this.setState({value});
    };

    render() {

        return (
            <div>
                <div className="row row-text-editor">
                    <div className="col-10">
                        <RichTextEditor
                            value={this.state.value}
                            onChange={this.onChange}
                            placeholder="Введіть текст тут"
                            toolbarConfig={toolbarConfig}
                        />
                    </div>
                </div>
                {/*<textarea*/}
                {/*    className="source"*/}
                {/*    placeholder="Editor Source"*/}
                {/*    value={this.state.value.toString('html')}*/}
                {/*/>*/}
            </div>
        );
    }
}