import React, {useState} from 'react';
import {connect} from "react-redux";
import './ViewTable.css';
import classes from "../../Patient/PatientDashboard/Profile.css";
import Add from "../../../assets/Add.png";
const AddTherapist = (props) => {


    return (
        <div>

            <form>
                <div className={classes.profile} >
                  <button>
                    <img className={classes.images} src={Add} />
                    <a>Create an account for therapist </a>
                  </button>
                    <div>
                        <div className={classes.profile}>
                            <ul className="profile-info">
                                <label>

                                    <span className={classes.profile}>Enter therapist name:</span>
                                    <input type="text"  placeholder="Diala khalil" name="name"/>
                                </label>
                                <label>
                                    <span className={classes.profile}>Enter therapist email: </span>

                                <input className={classes.profile} type="email"  placeholder="" name="email"/>
                                </label>
                                <label>

                                    <span className={classes.profile}> Enter therapist phone: </span>    </label>
                                <input  className={classes.profile} type="text"  placeholder="" name="phone"/>

                                <label>

                                    <span className="title">Enter Education level:</span>    </label>
                                <input type="text"  placeholder="" name="education-level"/>


                                <label>

                                    <span className="title">County: </span>
                                </label>
                                <input type="text"  placeholder="" name="country"/>

                                <label>
                                    <span className="title">Gender:</span>
                                    <input type="text"  placeholder="Female" name="gender"/>
                                </label>
                                <label>
                                    <span className="title">specialization:</span>
                                    <input type="text"  placeholder="" name="specialization"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTherapist);
