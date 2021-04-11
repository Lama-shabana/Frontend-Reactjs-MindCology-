import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import './Deleteaccount.css';

const DeleteAccount = (props) => {


    return (

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
export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
// <script>
//     // Get the modal
//     var modal = document.getElementById('id01');
//
//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
// }
// }
// </script>