import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import '../PatientDashboard/Profile.css';

import myAccount from '../../../assets/images.png';
import {InputText} from "primereact/inputtext";

const EditProfile = (props) => {


    return (
        <div>
            <form>
                <div >

                    <h4 >Edit My Profile </h4>
                    <img src={myAccount} />

                    <p> Diala khalil </p>
                    <span className="username">diala-khalail</span>
                    <input type="text"  placeholder="Diala khalil" name="user name"/>

                    <div>

                        <div >
                            <ul className="profile-info">

                                <label>
                                    <span className="title">Age: </span>
                                </label>

                                <input type="number"  placeholder="23" name="age"/>
                                <label>

                                <span className="title">Phone:</span>    </label>
                                <input type="text"  placeholder="770-889-6484" name="phone"/>


                                    <label>

                                    <span className="title">Email:</span>    </label>
                                <input type="text"  placeholder="cristinagroves@example.com" name="emil"/>


                                    <label>

                                    <span className="title">County: </span>
                                    </label>
                                <input type="text"  placeholder="Palestine" name="country"/>

                                    <label>

                                    <span className="title">Gender:</span>
                                        <input type="text"  placeholder="Female" name="gender"/>
                                </label>
                                <label>

                                    <span className="title">Password: </span>
                                </label>
                                <input type="password"  placeholder="*********" name="password"/>

                            <label>
                            <input type="submit"  placeholder="Save" name="save edit"/>
                            </label>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
