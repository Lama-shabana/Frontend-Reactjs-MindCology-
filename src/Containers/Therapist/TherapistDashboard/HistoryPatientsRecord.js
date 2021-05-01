import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from "../../Patient/MedicalHistoryForm/MedicalHistoryForm.module.css";
import './HistoryPatientsRecord.css';
import record from '../../../assets/images.png';
import * as MedicalActions from "../../Patient/store/PatientActions";
const HistoryPatientsRecord = (props) => {


    const [MedicalInfo, setMedicalInfo] = useState( null)


    let dataLoaded = false;
    useEffect(() => {
        if (dataLoaded === false) {
            props.viewMedicalHistoryData().then((data) => {
                setMedicalInfo(data.payload)
                console.log(data, data.payload, " view medical history data ")
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    return (
        <div className="record" style={{marginRight:"12em"} }>
            <div className="p-grid">
            <div className="p-col-12">
                {/*<i style={{paddingTop:"2em",marginLeft: "2em",fontSize:"2em"}} className="pi pi-id-card"/>*/}
                    <label  className={classes.headerLabel}>
                        <img style={{borderRadius:"50%"}} src={record}/>
                        <span> history Patient's Record</span>

                    </label>

            </div>
            </div>
            <div className="p-grid">
                <div className="p-col-12">
                <label
                    // key={MedicalInfo.id}
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
                       <div  className="p-col-12">
                        <label  className={classes.questionLabels}>
                            {/*{MedicalInfo.providedWithMentalHealthServices}*/}
                        </label>
                       </div>

                </div>

                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>The language you would like to have sessions in: </label>
                    <label>
                        {/*{MedicalInfo.sessionsLanguage}*/}
                    </label>

                </div>
                <line>____________________________________________________________________________________________</line>


                <div className="p-col-12">
                    <label className={classes.questionLabels}> the gender do you prefer your therapist to be: </label>
                    <label>
                        {/*{MedicalInfo.therapistGender}*/}
                    </label>

                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>Have you ever been through traumatic experiences? </label>
                    <label>
                        {/*{MedicalInfo.traumaticExperience}*/}
                    </label>
                </div>
                <div className="p-col-12">
                    <label className={classes.questionLabels}> if answer "yes" ,
                        Traumatic Experiences Details:  </label>
                    <label>
                        {/*{MedicalInfo.traumaticExperience}*/}
                    </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>What are exactly are you seeking help for? </label>
                    <label>
                        {/*{MedicalInfo.seekingHelpFor}*/}
                    </label>

                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>Do you have any mental or physical disorders that you know of?</label>
                    <label>
                        {/*{MedicalInfo.mentalOrPhysicalDisorder}*/}
                    </label>
                </div>

                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>If answered "yes",
                        Mental Or Physical Disorder Details: </label>
                    <label>
                        {/*{MedicalInfo.mentalOrPhysicalDisorderDetails}*/}
                    </label>
                </div>
                <div className="p-col-12">
                    <label className={classes.questionLabels}> Have you ever tried or thought about harming yourself? </label>
                    <label>
                        {/*{MedicalInfo.thinkAboutHarmingYourself}*/}
                    </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>  If answered "yes", what happened? </label>
                    <label>
                        {/*{MedicalInfo.thinkAboutHarmingYourselfDetails}*/}
                    </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}> Are you under any medications? </label>
                    <label>
                        {/*{MedicalInfo.underMedications}*/}
                    </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>if you under Medications ,
                        under Medications Details : </label>
                    <label>
                        {/*{MedicalInfo.underMedicationsDetails}*/}
                    </label>
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
        viewMedicalHistoryData: () => dispatch(MedicalActions.viewMedicalHistoryData()),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryPatientsRecord);
