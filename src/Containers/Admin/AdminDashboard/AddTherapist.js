import React, {useState} from 'react';
import {connect} from "react-redux";
import classes from '../../Patient/PatientDashboard/Profile.module.css';
const AddTherapist = (props) => {


    return (
        <div style={{paddingTop:"4em"}}>

<label className={classes.profile} >  Create Account for therapist</label>
            <form>
                <div className={classes.profile} >

                    <div>
                        <div className={classes.profile}>
                            <ul className="profile-info">
                                <label>

                                    <span className={classes.profile}>Enter therapist name:</span>
                                    </label>
                                <label>
                                    <input type="text"  placeholder="Diala khalil" name="name"/>
                                </label>
                                <label>
                                    <span className={classes.profile}>Enter therapist email: </span>
                                    </label>
                                <label>
                                <input className={classes.profile} type="email"  placeholder="" name="email"/>
                                </label>
                                <label>

                                    <span className={classes.profile}> Enter therapist phone: </span>
                                </label>
                                <label>
                                <input  className={classes.profile} type="text"  placeholder="" name="phone"/>
                                    </label>
                                <label>

                                    <span className="title">Enter Education level:</span>
                                </label>
                                <label>
                                <input type="text"  placeholder="" name="education-level"/>
                                    </label>

                                <label>

                                    <span className="title">County: </span>
                                </label>
                                <label>
                                <input type="text"  placeholder="" name="country"/>
                                    </label>
                                <label>
                                    <span className="title">Gender:</span>
                                    </label>
                                <label>
                                    <input type="text"  placeholder="Female" name="gender"/>

                                </label>
                                <label>

                                    <span className="title">user name:</span>
                                    </label>

                                <label>
                                    <input type="text"  placeholder="" name="specialization"/>
                                </label>
                                <label>
                                    <span className="title">Password: </span>
                                <input type="password"  placeholder="*********" name="password"/>
                                </label>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTherapist);
