import React, {useState} from 'react';
import {connect} from "react-redux";
import '../../Patient/PatientDashboard/Deleteaccount.css';
import classes from "../../Patient/PatientDashboard/Profile.css";
import myAccount from "../../../assets/edit-profile.png";
const TherapistEditProfile = (props) => {


    return (
        <div>
                <form>
                    <div className={classes.profile} >
                        <h4 >Edit My Profile </h4>
                        <img className={classes.images} src={myAccount} />

                        <p className={classes.profile}> Diala khalil </p>

                        <div>

                            <div className={classes.profile}>
                                <ul className="profile-info">
                                    <label>
                                        <span className={classes.profile}>User-name: </span>
                                        <input type="text"  placeholder="Diala khalil" name="user name"/>
                                    </label>
                                    <label>
                                        <span className={classes.profile}>Age: </span>
                                    </label>

                                    <input className={classes.profile} type="number"  placeholder="23" name="age"/>
                                    <label>

                                        <span className={classes.profile}>Phone:</span>    </label>
                                    <input  className={classes.profile} type="text"  placeholder="770-889-6484" name="phone"/>


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

                                        <span className="title">Education Level: </span>
                                    </label>
                                    <input type="text"  placeholder="" name="education-level"/>
                                    <label>

                                        <span className="title">specialization: </span>
                                    </label>
                                    <input type="text"  placeholder="" name="specialization"/>

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
export default connect(mapStateToProps, mapDispatchToProps)(TherapistEditProfile);
