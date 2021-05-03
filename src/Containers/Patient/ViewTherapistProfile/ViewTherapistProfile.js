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

const ViewTherapistProfile = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)


    const userId = JSON.parse(localStorage.getItem("auth"))?.id

    const therapistId = props.match.params.id;

    let dataLoaded = false;
    useEffect(() => {

        if (dataLoaded === false) {
            props.getProfileData({id: therapistId}).then((data) => {
                setTherapistInfo(data.payload)
            })
            dataLoaded = true;
        }
    }, [dataLoaded])


    // const therapistInfoDisplay = () => {
    //     return <div>
    //
    //
    //         <div className="p-grid">
    //             <div className="p-col-4">
    //
    //                 <MDBCardText>
    //                     <label className={classes.labels}>First Name</label>
    //                 </MDBCardText>
    //             </div>
    //             <div className="p-col-4">
    //                 <MDBCardText>
    //                     <label className={classes.labels}>Last Name</label>
    //                 </MDBCardText>
    //             </div>
    //
    //             <div className="p-col-4">
    //                 <MDBCardText>
    //                     <label className={classes.labels}>Age</label>
    //                 </MDBCardText>
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.firstName}
    //                 </label>
    //
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.lastName}
    //                 </label>
    //
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.age}
    //                 </label>
    //
    //
    //             </div>
    //
    //
    //             <div className="p-col-4">
    //                 <MDBCardText>
    //                     <label className={classes.labels}>Gender</label>
    //                 </MDBCardText>
    //             </div>
    //
    //             <div className="p-col-4">
    //                 <MDBCardText>
    //
    //                     {/*<MDBIcon fab icon="phone" className="mr-1" />*/}
    //                     {/*<i icon="pi pi-clock"  style={{'fontSize': '2em'}} ></i>*/}
    //                     <label icon="pi pi-clock" className={classes.labels}> Telephone </label>
    //                 </MDBCardText>
    //             </div>
    //             <div className="p-col-4">
    //                 <MDBCardText>
    //
    //                     <label className={classes.labels}>
    //                         <MDBIcon fab className="email-icons" className="mr-1"/>
    //                         Email </label>
    //                 </MDBCardText>
    //             </div>
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.gender}
    //                 </label>
    //
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.phoneNumber}
    //                 </label>
    //
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.email}
    //                 </label>
    //
    //
    //             </div>
    //             <div className="p-col-5">
    //                 <label className={classes.labels}>Education-level </label>
    //
    //             </div>
    //             <div className="p-col-5">
    //                 <label className={classes.labels}>specialization </label>
    //             </div>
    //             {/*<div className="p-col-4">*/}
    //             {/*    /!*<label className={classes.labels}>user-name</label>*!/*/}
    //
    //             {/*</div>*/}
    //
    //
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.educationLevel}
    //                 </label>
    //
    //
    //             </div>
    //             <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                 <label>
    //                     {therapistInfo.specialization}
    //                 </label>
    //
    //                 <div className="p-col-4" style={{textAlign: "center"}}>
    //
    //                     {/*<label>*/}
    //                     {/*    /!*{therapistInfo.username}*!/*/}
    //                     {/*</label>*/}
    //
    //
    //                 </div>
    //             </div>
    //
    //             <div>
    //
    //
    //             </div>
    //
    //         </div>
    //
    //
    //     </div>
    // }


    return (


        <div className={classes.form}>
            {therapistInfo?
                <div className="p-grid">

                <div className="p-col-4">
                    <img
                        width={290}
                        // style={{width: "22em", height: "16em", paddingLeft: "1em"}}
                        src={profile}/>
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

                            <Button  label=" Message " icon="pi pi-comments" />
                            <span> </span>
                            <Button style={{backgroundColor:"#a474b7"}} label=" Cancel " icon="pi pi-times" />

                        </div>
                    </div>
                </div>
                <div className="p-col-12">
                    <p><i style={{color:"purple"}} className="pi pi-envelope"/> {therapistInfo.email}</p>
                </div>
                <div className="p-col-12">
                    <p><i style={{color:"purple"}} className="pi pi-phone"/> {therapistInfo.phoneNumber}</p>
                </div>


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

export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapistProfile);
