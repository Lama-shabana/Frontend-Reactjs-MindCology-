import React, {useState} from 'react';
import {connect} from "react-redux";
import '../../Patient/PatientDashboard/Deleteaccount.css';
const TherapistDeleteAccount = (props) => {


    return (
        <div>

            <div>

                {/*onClick="document.getElementById('id01').style.display='block'"*/}
                <button className="deletebutton">Delete your Account</button>

                <div id="id01" className="modal">
                    {/*onClick="document.getElementById('id01').style.display='none'"*/}
                    <span  className="close" onClick=""
                           title="Close Modal">&times;</span>
                    <form className="modal-content" action="">
                        <div className="container">
                            <h1>Delete Account</h1>
                            <p>Are you sure you want to delete your account?</p>

                            <div className="clearfix">
                                <button type="button" className="cancelbtn">Cancel</button>
                                <button type="button" className="deletebtn">Delete</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

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
export default connect(mapStateToProps, mapDispatchToProps)(TherapistDeleteAccount);