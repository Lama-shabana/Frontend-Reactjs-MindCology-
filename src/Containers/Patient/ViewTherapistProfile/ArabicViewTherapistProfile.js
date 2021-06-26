import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './ViewTherapistProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import profile from "../assets/profileTesting.jpg";
import {MDBBtn, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,} from "mdbreact";
import {MDBCard, MDBRow, MDBCol, MDBIcon} from "mdbreact";
import {Button} from "primereact/button";
import * as profileActions from "../../Therapist/store/TherapistActions";
import {Icon} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const ArabicViewTherapistProfile = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)


    const userId = JSON.parse(localStorage.getItem("auth"))?.id

    const therapistId = props.match.params.id;

    let dataLoaded = false;
    useEffect(() => {

        if (dataLoaded === false) {
            props.getProfileData({id: therapistId}).then((data) => {
                setTherapistInfo(data.payload)
                localStorage.setItem('visitedTherapist',JSON.stringify(data.payload))

            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    let history = useHistory();
    return (

   <div className={classes.form}>
            {therapistInfo?
                <div className="p-grid">

                    <div className="p-col-4">
                        <img
                            src={therapistInfo.imagePath}
                            alt={therapistInfo.username} style={{width: 300}} />
                        {/*<img*/}
                        {/*    width={290}*/}
                        {/*    // style={{width: "22em", height: "16em", paddingLeft: "1em"}}*/}
                        {/*    src={profile}/>*/}
                    </div>

                    <div className="p-col-8">
                        <div className="p-grid" style={{paddingLeft:"8em"}} >
                            <div className="p-col-12"  >
                                <h2 style={{fontFamily:"Arial,helvetica"}}>
                                    {therapistInfo.firstName} { therapistInfo.lastName}
                                </h2>
                                <h7 style={{fontFamily:"courier,helvetica"}}>
                                    {therapistInfo.specialization}
                                </h7>

                            </div>
                            <div className="p-col-12" >
                                <hr style={{margin:"0"}}/>
                            </div>
                            <div className="p-col-12" >
                                <h8 style={{fontFamily:"arial,helvetica"}}> {therapistInfo.educationLevel}</h8>
                                <p style={{fontFamily:"sans-serif"}}>
                                    {therapistInfo.description}

                                </p>
                                <Button style={{backgroundColor:"#a474b7"}}
                                        onClick={()=>{history.push("/arabicPatientDashboard/arabicTakeAppointment")}} label=" حجز موعد " icon="pi pi-calendar-plus" />
                            </div>
                        </div>
                    </div>
                    <div className="p-col-12">
                        <p><i style={{color:"purple"}} className="pi pi-envelope"/> {therapistInfo.email}</p>
                        <p><i style={{color:"purple"}} className="pi pi-phone"/> {therapistInfo.phoneNumber}</p>

                    </div>
                    {/*<div className="p-col-12">*/}
                    {/*</div>*/}


                </div>

                :null} </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getProfileData: (data) => dispatch(profileActions.getProfileData(data)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArabicViewTherapistProfile);
