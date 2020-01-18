import React from "react";
import Upload_Profile from "./upload_profile";
import SideBar from "./sidebar";
import avatar from "../images/avatar.jpeg";
import Avatar from "@material-ui/core/Avatar";

export default class Empl_Profile extends React.Component {

    render() {
        return (

            <div className="full">
                <div className="row">

                    <SideBar/>

                    <div className="col" id="content-employer">
                        <div className="row row-resume">
                            <div className="col-8 resume-borders">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row row-all-vac-margin align-items-center">
                                            <div className="col-12">
                                                <div className="all-vac-text-employer">Налаштування профілю</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-2">
                                                <Avatar src={avatar} className="avatar-picture-upload" />
                                            </div>
                                            <div className="col-10 no-gutters upload-picture">
                                                <Upload_Profile/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="create-vac-input-name-title">
                                                    Ім'я
                                                </div>
                                                <input type="text" className="profile-input"/>
                                            </div>
                                            <div className="col-6">
                                                <div className="create-vac-input-name-title">
                                                    Прізвище
                                                </div>
                                                <input type="text" className="profile-input"/>
                                            </div>
                                        </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="create-vac-input-name-title">
                                                Компанія
                                            </div>
                                            <input type="text" placeholder="Даня, тут должны быть написаны значения. Спроси у меня, я тебе покажу пример" className="profile-input"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="create-vac-input-name-title">
                                                Логін
                                            </div>
                                            <input type="text" className="profile-input"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="save-changes">Зберегти зміни</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}