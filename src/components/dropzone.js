import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

var ReactDOMServer = require('react-dom/server');

export default class Dropzone_Comp extends React.Component {

    constructor(props) {
        super(props);

        this.djsConfig = {
            maxFiles: 1,
            dictDefaultMessage: 'Перетягни файл або клікни тут, щоб завантажити',
            dictResponseError: "Файл не завантажується :( Напиши нам у Telegram, ми одразу вирішимо проблему.",
            dictMaxFilesExceeded: "Тільки один файл. Видали попередні, щоб завантажити новий.",
            dictRemoveFile: "Видалити файл",
            dictCancelUpload: "Відмінити завантаження",
            dictUploadCanceled: "Завантаження відмінилось",
            dictInvalidFileType: 'Ой, такий тип файлу не підтримується',
            dictFallbackMessage: "Твій браузер не підтримує drag&drop. Напиши нам у Telegram, ми одразу вирішимо проблему.",
            dictFallbackText: "Щось тут не так :( Напиши нам у Telegram, ми одразу вирішимо проблему.",
            dictFileTooBig: 'Ой, файл занадто великий. Максимальний розмір 10Мб. Скористайся сервісами для зниження якості файлу.',
            dictCancelUploadConfirmation: "Точно відмінити завантаження?",
            addRemoveLinks: true,
            maxFilesize: 10,
            acceptedFiles: "image/jpeg,image/png,application/pdf",
            previewTemplate: ReactDOMServer.renderToStaticMarkup(
                <div>
                    <div className="dz-error-message"><span data-dz-errormessage></span></div>
                    {/*<div className="dz-error-mark">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                    {/*         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"*/}
                    {/*         className="feather-x-circle-apply">*/}
                    {/*        <circle cx="12" cy="12" r="10"></circle>*/}
                    {/*        <line x1="15" y1="9" x2="9" y2="15"></line>*/}
                    {/*        <line x1="9" y1="9" x2="15" y2="15"></line>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                <div className="dz-preview dz-file-preview">
                    <div className="dz-image"><img data-dz-thumbnail/></div>
                    <div className="dz-details">
                        <div className="dz-size"><span data-dz-size></span></div>
                        <div className="dz-filename"><span data-dz-name></span></div>
                    </div>
                    <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
                    {/*<div className="dz-success-mark">*/}
                    {/*    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <title>Check</title>*/}
                    {/*        <defs></defs>*/}
                    {/*        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">*/}
                    {/*            <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"*/}
                    {/*                id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475"*/}
                    {/*                fill="#FFFFFF"></path>*/}
                    {/*        </g>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                </div>
                </div>
            )
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: false,
            postUrl: '/uploadHandler'
        };

        // If you want to attach multiple callbacks, simply
        // create an array filled with all your callbacks.
        this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

        // Simple callbacks work too, of course
        this.callback = () => console.log('Hello!');

        this.success = file => console.log('uploaded', file);

        this.removedfile = file => console.log('removing...', file);

        this.dropzone = null;
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            drop: this.callbackArray,
            addedfile: this.callback,
            success: this.success,
            removedfile: this.removedfile
        }

        return <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
    }
}