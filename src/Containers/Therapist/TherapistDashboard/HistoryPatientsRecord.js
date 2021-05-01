import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from "../../Patient/MedicalHistoryForm/MedicalHistoryForm.module.css";
import './HistoryPatientsRecord.css';
import record from '../../../assets/images.png';
import {waitFor} from "@testing-library/react";
import { PrimeIcons } from 'primereact/api';

import * as MedicalActions from "../../Patient/store/PatientActions";
import {MiddlewareArray} from "@reduxjs/toolkit";
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";
const HistoryPatientsRecord = (props) => {


    const [MedicalInfo, setMedicalInfo] = useState( null)



    let userID=JSON.parse(localStorage.getItem("auth")).id

    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.viewMedicalHistoryData({id: userID}).then((data) => {
                setMedicalInfo(data.payload)
                {console.log(data, data.payload,"")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    return (
        <div className="record">
         {/*   <div className="p-col-11">*/}
         {/*<img src={record}/>*/}
         {/*       </div>*/}
            <div className="p-grid">
            <div className="p-col-12">
                {/*<i style={{paddingTop:"2em",marginLeft: "2em",fontSize:"2em"}} className="pi pi-id-card"/>*/}
                    <label  className={classes.headerLabel}>
                        <img style={{borderRadius:"50%"}} src={record}/>
                        <span> history Patient's Record</span>

                    </label>
     <line style={{fontSize:"2em",color:"gray"}}>_____________________________________________________</line>
            </div>
            </div>
            <div className="p-grid">
                <div className="p-col-12">
                <label
                    key={MedicalInfo.id}
                  // value= {patientInfo.name}
                    className={classes.questionLabels}>patient  Name:

                </label>
                    </div>
            </div>
                    <div className="p-col-12">
                <div className="p-grid">

                <label  className={classes.questionLabels}>
                    patient Age:
                    {/*{patientInfo.age}*/}

                </label>
                </div>
                    </div>
            <div className="p-grid">
                <line>____________________________________________________________________________________________</line>
  <div className="p-col-12">
                <h3> Medical history for patient </h3>
</div>
</div>
            <div className="p-grid">
                <div className="p-col-12">
                    <label
                        className={classes.questionLabels}>Have you ever been provided with mental health services
                        before?  </label>

                        <InplaceDisplay>
                            {MedicalInfo.providedWithMentalHealthServices}
                        </InplaceDisplay>


                </div>

                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>The language you would like to have sessions in: </label>
                    <InplaceDisplay>
                        {MedicalInfo.sessionsLanguage}
                    </InplaceDisplay>

                </div>
                <line>____________________________________________________________________________________________</line>


                <div className="p-col-12">
                    <label className={classes.questionLabels}> the gender do you prefer your therapist to be: </label>
                    <InplaceDisplay>
                        {MedicalInfo.therapistGender}
                    </InplaceDisplay>

                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>Have you ever been through traumatic experiences? </label>
                    <InplaceDisplay>
                        {MedicalInfo.traumaticExperience}
                    </InplaceDisplay>
                </div>
                <div className="p-col-12">
                    <label className={classes.questionLabels}> if answer "yes" ,
                        Traumatic Experiences Details:  </label>
                    <InplaceDisplay>
                        {MedicalInfo.traumaticExperience}
                    </InplaceDisplay>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>What are exactly are you seeking help for? </label>
                    <InplaceDisplay>
                        {MedicalInfo.seekingHelpFor}
                    </InplaceDisplay>

                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>Do you have any mental or physical disorders that you know of?</label>
                    <InplaceDisplay>
                        {MedicalInfo.mentalOrPhysicalDisorder}
                    </InplaceDisplay>
                </div>

                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>If answered "yes",
                        Mental Or Physical Disorder Details: </label>
                    <InplaceDisplay>
                        {MedicalInfo.mentalOrPhysicalDisorderDetails}
                    </InplaceDisplay>
                </div>
                <div className="p-col-12">
                    <label className={classes.questionLabels}> Have you ever tried or thought about harming yourself? </label>
                    <InplaceDisplay>
                        {MedicalInfo.thinkAboutHarmingYourself}
                    </InplaceDisplay>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>  If answered "yes", what happened? </label>
                    <InplaceDisplay>
                        {MedicalInfo.thinkAboutHarmingYourselfDetails}
                    </InplaceDisplay>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}> Are you under any medications? </label>
                    <InplaceDisplay>
                        {MedicalInfo.underMedications}
                    </InplaceDisplay>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>if you under Medications ,
                        under Medications Details : </label>
                    <InplaceDisplay>
                        {MedicalInfo.underMedicationsDetails}
                    </InplaceDisplay>
                </div>
                <line>____________________________________________________________________________________________</line>

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
        viewMedicalHistoryData: (data) => dispatch(MedicalActions.viewMedicalHistoryData()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryPatientsRecord);
