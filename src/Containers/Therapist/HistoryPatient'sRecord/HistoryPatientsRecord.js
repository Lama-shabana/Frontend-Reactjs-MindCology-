import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from "./historyPatientRecord.module.css";
import medical from '../../../assets/medical.png';
import * as patientProfileActions from "../../Patient/store/PatientActions";
import * as therapistProfileActions from "../store/TherapistActions";
import {useHistory} from "react-router-dom";

const HistoryPatientsRecord = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))
    const patientId = props.props.match.params.id
    // const id = JSON.parse(localStorage.getItem("auth"))?.id
    let loaded = false;
    let history = useHistory()

    const [userData, setUserData] = useState(null)
    const [historyPatientData, setHistoryPatientData] = useState(null)
    useEffect(() => {
        // if(lang==="arabic"){
        //     history.push("/historyPatient/" + patientId)
        // }else
            // window.location.reload()
            if (loaded === false) {
                props.getProfileData({id: patientId}).then((data) => {
                    console.log(data.payload)
                    setUserData(data.payload)
                    props.viewMedicalHistoryData({id: patientId}).then((data) => {
                        console.log(data.payload)
                        setHistoryPatientData(data.payload)
                    })

                })
                loaded = true
            }
    }, [])


    return (
        <div className={classes.form}>
            {console.log(lang,"english page entered")}
            {historyPatientData &&userData?
                <div className={classes.record} style={{marginRight: "12em", paddingTop: "5em"}}>
                    <div className="p-grid">
                        <div className="p-col-12">
                            {/*<i style={{paddingTop:"2em",marginLeft: "2em",fontSize:"2em"}} className="pi pi-id-card"/>*/}
                            <label className={classes.headerLabel}>
                                <img style={{fontSize:"xx-small",width:"11em"}} src={medical}/>
                                <span>Patient's Medical History </span>
                            </label>
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <label
                                className={classes.questionLabels}>Patient Name:
                                {userData.firstName}  {userData.lastName}
                            </label>
                        </div>
                    </div>
                    <div className="p-col-12">
                        <div className="p-grid">
                            <label className={classes.questionLabels}>
                                Age:
                                {userData.age}

                            </label>
                        </div>
                    </div>
                    <div className="p-grid">

                        <div className="p-col-12">
                            <div className="p-col-4"/>
                            <h5  className={classes.H3}>  Medical History for {userData.firstName}  {userData.lastName}</h5>
                        </div>

                    </div>

                    <div className="p-grid">
                        <div className="p-col-12">
                            <label
                                className={classes.questionLabels}>mental health
                                services :
                            </label>


                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>
                                {historyPatientData.providedWithMentalHealthServices}
                            </label>
                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabels}>language you would like to have sessions
                                in:</label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.sessionsLanguage}
                            </label>
                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabels}>the gender do you prefer your therapist to
                                be: </label>


                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.therapistGender}
                            </label>
                        </div>


                        <div className="p-col-12">
                            <label className={classes.questionLabels}>
                                Traumatic Experiences Details: </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.traumaticExperience}
                            </label>
                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabels}>Seeking help
                                for:</label>


                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.seekingHelpFor}
                            </label>
                        </div>


                        <div className="p-col-12">
                            <label className={classes.questionLabels}>
                                Mental Or Physical Disorder Details: </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.mentalOrPhysicalDisorderDetails}
                            </label>
                        </div>

                        {/*<div className="p-col-12">*/}
                        {/*    <label className={classes.questionLabels}>  Ever tried or thought about harming*/}
                        {/*        yourself: </label>*/}

                        {/*</div>*/}
                        {/*<div className="p-col-12">*/}
                        {/*    <label className={classes.questionLabelsNotBold}>*/}

                        {/*        {historyPatientData.thinkAboutHarmingYourself}*/}
                        {/*    </label>*/}
                        {/*</div>*/}

                        <div className="p-col-12">
                            <label className={classes.questionLabels}>Details  about harming
                                yourself: </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.thinkAboutHarmingYourselfDetails}
                            </label>
                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabels}>
                                Medications Details : </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.underMedicationsDetails}
                            </label>
                        </div>

                    </div>

                </div>
                : null}

        </div>

    );
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        viewMedicalHistoryData: (data) => dispatch(patientProfileActions.viewMedicalHistoryData(data)),
        getAllAppointments: () => dispatch(therapistProfileActions.getAllAppointments()),
        getProfileData: (data) => dispatch(patientProfileActions.getProfileData(data)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryPatientsRecord);
