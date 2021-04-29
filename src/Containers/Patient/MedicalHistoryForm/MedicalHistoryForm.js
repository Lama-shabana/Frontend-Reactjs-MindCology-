import React, {useState} from 'react';
import {connect} from 'react-redux';
import classes from './MedicalHistoryForm.module.css';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from "primereact/dropdown";
import {CountryDropdown} from "react-country-region-selector";
import {Button} from "primereact/button";
import profilePic from "../../../assets/profile2.png";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {TabPanel, TabView} from "primereact/tabview";
import {Steps} from "primereact/steps";
import PhoneInput from "react-phone-number-input";
import {InputNumber} from "primereact/inputnumber";
import {InputTextarea} from "primereact/inputtextarea";
import {RadioButton} from "primereact/radiobutton";
import * as profileActions from "../store/PatientActions";
import {useHistory} from "react-router-dom";

const MedicalHistoryForm = (props) => {

    const steps = [
        {
            label: 'Part 1',
        },
        {
            label: 'Part 2',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0)


    let userID=JSON.parse(localStorage.getItem("auth")).id

    const [patientInfo, setPatientInfo] = useState(
    {
        patientId: userID,
        providedWithMentalHealthServices: "",
        sessionsLanguage: "",
        therapistGender: "",
        traumaticExperience: "",
        seekingHelpFor: "",
        mentalOrPhysicalDisorder: false,
        mentalOrPhysicalDisorderDetails: "",
        thinkAboutHarmingYourself: true,
        thinkAboutHarmingYourselfDetails: "",
        underMedications: true,
        underMedicationsDetails: ""

})


    const stepOne = () => {
        return <div className="p-grid">
            <div className="p-col-12">
                <label className={classes.questionLabels}> Have you ever been provided with mental health services
                    before? *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        providedWithMentalHealthService: e.value
                    })} checked={patientInfo.providedWithMentalHealthService === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">Yes</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">

                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        providedWithMentalHealthService: e.value
                    })} checked={patientInfo.providedWithMentalHealthService === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">No</label>
                </div>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>The language you would like to have sessions in. *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="Arabic" name="Arabic" value="Arabic" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        sessionsLanguage: e.value
                    })} checked={patientInfo.sessionsLanguage === 'Arabic'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="Arabic">Arabic</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="English" name="English" value="English" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        sessionsLanguage: e.value
                    })} checked={patientInfo.sessionsLanguage === 'English'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="English">English</label>
                </div>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>What gender do you prefer your therapist to be? *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="male" name="male" value="male" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        therapistGender: e.value
                    })} checked={patientInfo.therapistGender === 'male'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="male">Male</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="female" name="female" value="female" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        therapistGender: e.value
                    })} checked={patientInfo.therapistGender === 'female'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="female">Female</label>
                </div>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>Have you ever been through traumatic experiences? *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        traumaticExperience: e.value
                    })} checked={patientInfo.traumaticExperience === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">Yes</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        traumaticExperience: e.value
                    })} checked={patientInfo.traumaticExperience === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">No</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="maybe" name="maybe" value="maybe" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        traumaticExperience: e.value
                    })} checked={patientInfo.traumaticExperience === 'maybe'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="maybe">Maybe</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>What are exactly are you seeking help for? *</label>
            </div>
            <div className="p-col-12">
                <InputTextarea value={patientInfo.seekingHelpFor} onChange={(e) => setPatientInfo({
                    ...patientInfo,
                    seekingHelpFor: e.value
                })}
                               className={classes.textArea} autoResize/>
            </div>


        </div>
    }

    const stepTwo = () => {
        return <div className="p-grid">
            <div className="p-col-12">
                <label className={classes.questionLabels}>Do you have any mental or physical disorders that you know of?
                    *
                </label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        mentalOrPhysicalDisorder: e.value
                    })} checked={patientInfo.mentalOrPhysicalDisorder === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">Yes</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">

                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        mentalOrPhysicalDisorder: e.value
                    })} checked={patientInfo.mentalOrPhysicalDisorder === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">No</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>If answered "yes", what mental or physical
                    disorders do you have?</label>
            </div>

            <div className="p-col-12">
                <InputText value={patientInfo.mentalOrPhysicalDisorderDetails}
                           onChange={(e) => setPatientInfo({
                               ...patientInfo,
                               mentalOrPhysicalDisorderDetails: e.value
                           })}/>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>Have you ever tried or thought about harming yourself? *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        thinkAboutHarmingYourself: e.value
                    })} checked={patientInfo.thinkAboutHarmingYourself === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">Yes</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        thinkAboutHarmingYourself: e.value
                    })} checked={patientInfo.thinkAboutHarmingYourself === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">No</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>If answered "yes", what happened?</label>
            </div>

            <div className="p-col-12">
                <InputText value={patientInfo.thinkAboutHarmingYourselfDetails}
                           onChange={(e) => setPatientInfo({
                               ...patientInfo,
                               thinkAboutHarmingYourselfDetails: e.value
                           })}/>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>Are you under any medications? *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        underMedications: e.value
                    })} checked={patientInfo.underMedications === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">Yes</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        underMedications: e.value
                    })} checked={patientInfo.underMedications === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">No</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>If "yes", what medications are you under?</label>
            </div>

            <div className="p-col-12">
                <InputText value={patientInfo.thinkAboutHarmingYourselfDetails}
                           onChange={(e) => setPatientInfo({
                               ...patientInfo,
                               underMedicationsDetails: e.value
                           })}/>
            </div>


        </div>

    }

    const displayBasedOnActiveIndex = () => {

        if (activeIndex === 0) {
            return stepOne()
        } else return stepTwo()
    }

    let history = useHistory();

    function onSave() {

        console.log(patientInfo,"sent")
        props.addMedicalHistoryData(patientInfo).then((data)=>{
            history.push('/patientDashboard')

        })
        // props.editProfile({id:userID,patientInfo:{filledMedicalHistoryForm:true}})
    }

    return (
        <div className="p-grid" style={{marginTop: "5%"}}>

            <div className="p-col-12">
            <h2 className={classes.title}>
                Complete Your Medical History Data
            </h2>
                <hr/>
            </div>

            <div className="p-col-6">
                <img src={profilePic} className={classes.picture}/>
            </div>
            <div className="p-col-1"/>

            <Scrollbars style={{width: "33em", height: "30em"}}>
                <div className="p-col-5">

                    <div className={classes.form}>

                        <label className={classes.headerLabel}>Medical History</label>
                        <Steps model={steps} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)}
                               readOnly={false}/>

                        {displayBasedOnActiveIndex()}


                    </div>
                </div>
            </Scrollbars>
            <div className="p-col-8"/>

            <div className="p-col-2">
                <Button label="Submit" className="primaryBtn" icon="pi pi-check" style={{
                    width: "9em",
                    height: "3em",
                    marginLeft: "1em",
                    marginTop: "2em",
                    background: "#a474b7"
                }}
                        onClick={() => {
                            onSave()
                        }}
                />
            </div>



        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        addMedicalHistoryData: (data) => dispatch(profileActions.addMedicalHistoryData(data)),
        editProfile: (data) => dispatch(profileActions.editProfile(data)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalHistoryForm);
