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
            props.getAllTherapists({id: therapistId}).then((data) => {
                setTherapistInfo(data.payload[0])
            })
            dataLoaded = true;
        }
    }, [dataLoaded])


    const therapistInfoDisplay = () => {
        return <div>


            <div className="p-grid">
                <div className="p-col-4">

                    <MDBCardText>
                        <label className={classes.labels}>First Name</label>
                    </MDBCardText>
                </div>
                <div className="p-col-4">
                    <MDBCardText>
                        <label className={classes.labels}>Last Name</label>
                    </MDBCardText>
                </div>

                <div className="p-col-4">
                    <MDBCardText>
                        <label className={classes.labels}>Age</label>
                    </MDBCardText>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.firstName}
                    </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.lastName}
                    </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.age}
                    </label>


                </div>


                <div className="p-col-4">
                    <MDBCardText>
                        <label className={classes.labels}>Gender</label>
                    </MDBCardText>
                </div>

                <div className="p-col-4">
                    <MDBCardText>

                        {/*<MDBIcon fab icon="phone" className="mr-1" />*/}
                        {/*<i icon="pi pi-clock"  style={{'fontSize': '2em'}} ></i>*/}
                        <label icon="pi pi-clock" className={classes.labels}> Telephone </label>
                    </MDBCardText>
                </div>
                <div className="p-col-4">
                    <MDBCardText>

                        <label className={classes.labels}>
                            <MDBIcon fab className="email-icons" className="mr-1"/>
                            Email </label>
                    </MDBCardText>
                </div>


                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.gender}
                    </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.phoneNumber}
                    </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.email}
                    </label>


                </div>
                <div className="p-col-5">
                    <label className={classes.labels}>Education-level </label>

                </div>
                <div className="p-col-5">
                    <label className={classes.labels}>specialization </label>
                </div>
                {/*<div className="p-col-4">*/}
                {/*    /!*<label className={classes.labels}>user-name</label>*!/*/}

                {/*</div>*/}


                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.educationLevel}
                    </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                    <label>
                        {therapistInfo.specialization}
                    </label>

                    <div className="p-col-4" style={{textAlign: "center"}}>

                        {/*<label>*/}
                        {/*    /!*{therapistInfo.username}*!/*/}
                        {/*</label>*/}


                    </div>
                </div>
                {/*<div className="p-col-6"/>*/}
                {/*<div className="rounded-bottom mdb-color lighten-3 text-center pt-3">*/}
                {/*    <ul className="list-unstyled list-inline font-small">*/}
                {/*        <li className="list-inline-item pr-2 white-text">*/}
                {/*            <MDBIcon far icon="clock" /> 05/10/2015*/}
                {/*        </li>*/}
                {/*        <li className="list-inline-item pr-2">*/}
                {/*            <a href="#!" className="white-text">*/}
                {/*                <MDBIcon far icon="comments" className="mr-1" />*/}
                {/*                12*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li className="list-inline-item pr-2">*/}
                {/*            <a href="#!" className="white-text">*/}
                {/*                <MDBIcon fab icon="facebook-f" className="mr-1" />*/}
                {/*                21*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*        <li className="list-inline-item">*/}
                {/*            <a href="#!" className="white-text">*/}
                {/*                <MDBIcon fab icon="twitter" className="mr-1" />5*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div>


                </div>

            </div>


        </div>
    }


    return (
        <div className={classes.form}>
            <div className="p-grid">
                <div className="p-col-4">
                    <img
                        width={300}
                        // style={{width: "22em", height: "16em", paddingLeft: "1em"}}
                        src={profile}/>
                </div>

                <div className="p-col-8">
                    <div className="p-grid">
                        <div className="p-col-12">
                            <h2>
                                Full Name
                            </h2>
                        </div>
                        <div className="p-col-12" >
                            <hr style={{margin:"0"}}/>
                        </div>
                        <div className="p-col-12" >
                            <p>
                                We will write our paragraph here.
                                <i style={{color:"red"}} className="pi pi-clock"/>

                            </p>
                        </div>
                    </div>
              </div>
                <div className="p-col-12">
                    <p>5 years of experience</p>
                </div>
                <div className="p-col-12">
                    <p>5 years of experience</p>
                </div>


            </div>
            {/*{therapistInfo ?*/
            }

            {/*    <div>*/
            }
            {/*        <MDBRow>*/
            }
            {/*            <MDBCol md="5">*/
            }
            {/*                <MDBCard cascade>*/
            }
            {/*                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">*/
            }
            {/*                        <img style={{width: "150px", height: "8em", paddingLeft: "1em"}}*/
            }
            {/*                             src={profile}*/
            }
            {/*                             className="img-fluid"*/
            }
            {/*                        />*/
            }
            {/*                        <div className="" style={{paddingTop: '1em', paddingLeft: "1em"}}>*/
            }
            {/*                        <span>*/
            }
            {/*           <Button icon="pi pi-comments" style={{marginRight: '.25em'}}/>*/
            }
            {/*          <Button icon="pi pi-clock" className="p-button-secondary"/>*/
            }
            {/*    </span></div>*/
            }
            {/*                    </div>*/
            }
            {/*                    <label className={classes.headerLabel}>*/
            }
            {/*                        /!*<MDBCardImage*!/*/
            }
            {/*                        /!*                        src={profile}*!/*/
            }
            {/*                        /!*                    />*!/*/
            }

            {/*                    </label>*/
            }

            {/*                    <Tabs defaultActiveKey="therapistInfo" transition={false}>*/
            }
            {/*                        <Tab eventKey="therapistInfo"*/
            }
            {/*                             title={therapistInfo.username} tabClassName={classes.tab}>*/
            }
            {/*                            {therapistInfoDisplay()}*/
            }
            {/*                        </Tab>*/
            }

            {/*                    </Tabs>*/
            }
            {/*                    /!*<div className="p-grid">*!/*/
            }

            {/*                    /!*    <div className="p-col-5"/>*!/*/
            }

            {/*                    /!*    <div className="p-col-4"/>*!/*/
            }
            {/*                    /!*</div>*!/*/
            }


            {/*                </MDBCard>*/
            }
            {/*            </MDBCol>*/
            }
            {/*        </MDBRow>*/
            }
            {/*    </div>*/
            }

            {/*    : null}*/
            }

        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTherapists: () => dispatch(profileActions.getAllTherapists()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapistProfile);
