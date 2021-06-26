import React, {useState} from 'react';
import {connect} from 'react-redux';
import classes from './MedicalHistoryForm.module.css';
import {InputText} from 'primereact/inputtext';
import {Button} from "primereact/button";
import profilePic from "../../../assets/profile2.png";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {Steps} from "primereact/steps";
import {InputTextarea} from "primereact/inputtextarea";
import {RadioButton} from "primereact/radiobutton";
import {useHistory} from "react-router-dom";
import * as profileActions from "../store/PatientActions";

const ArabicMedicalHistoryForm = (props) => {

    const steps = [
        {
            label: ' جزء 1',
        },
        {
            label: 'جزء 2',
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
                <label className={classes.questionLabels}> هل سبق أن تم تزويدك بخدمات الصحة العقلية من
                    قبل؟ *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        providedWithMentalHealthService: e.value
                    })} checked={patientInfo.providedWithMentalHealthService === 'yes'}/>
                    <label style={{float:"right" , paddingRight:"1em"}} className={classes.questionLabelsNotBold} htmlFor="yes">نعم</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">

                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        providedWithMentalHealthService: e.value
                    })} checked={patientInfo.providedWithMentalHealthService === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">لا</label>
                </div>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>اللغة التي ترغب في إجراء الجلسات بها. *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="Arabic" name="Arabic" value="Arabic" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        sessionsLanguage: e.value
                    })} checked={patientInfo.sessionsLanguage === 'Arabic'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="Arabic">العربية</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="English" name="English" value="English" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        sessionsLanguage: e.value
                    })} checked={patientInfo.sessionsLanguage === 'English'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="English">الانجليزية</label>
                </div>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>ما هو الجنس الذي تفضله أن يكون معالجك؟ *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="male" name="male" value="male" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        therapistGender: e.value
                    })} checked={patientInfo.therapistGender === 'male'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="male">ذكر</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="female" name="female" value="female" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        therapistGender: e.value
                    })} checked={patientInfo.therapistGender === 'female'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="female">انثى</label>
                </div>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>هل مررت بتجارب مؤلمة من قبل؟ *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        traumaticExperience: e.value
                    })} checked={patientInfo.traumaticExperience === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">نعم</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        traumaticExperience: e.value
                    })} checked={patientInfo.traumaticExperience === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">لا</label>
                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="maybe" name="maybe" value="maybe" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        traumaticExperience: e.value
                    })} checked={patientInfo.traumaticExperience === 'maybe'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="maybe">ربما</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>ما الذي تبحث عنه بالضبط؟*</label>
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
                <label className={classes.questionLabels}>هل لديك أي اضطرابات عقلية أو جسدية تعرفها؟
                    *
                </label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        mentalOrPhysicalDisorderBoolean: e.value
                    })} checked={patientInfo.mentalOrPhysicalDisorderBoolean === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">نعم</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">

                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        mentalOrPhysicalDisorderBoolean: e.value
                    })} checked={patientInfo.mentalOrPhysicalDisorderBoolean === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">لا</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>إذا كانت الإجابة "نعم" ، فما هي العقلية أو الجسدية
                    هل لديك اضطرابات؟</label>
            </div>

            <div className="p-col-12">
                <InputText value={patientInfo.mentalOrPhysicalDisorderDetails}
                           onChange={(e) => setPatientInfo({
                               ...patientInfo,
                               mentalOrPhysicalDisorderDetails: e.value
                           })}/>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>هل سبق لك أن حاولت أو فكرت في إيذاء نفسك؟ *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        thinkAboutHarmingYourselfBoolean: e.value
                    })} checked={patientInfo.thinkAboutHarmingYourselfBoolean === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">نعم</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        thinkAboutHarmingYourselfBoolean: e.value
                    })} checked={patientInfo.thinkAboutHarmingYourselfBoolean === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">لا</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>إذا كانت الإجابة "نعم" ، ماذا حدث؟</label>
            </div>

            <div className="p-col-12">
                <InputText value={patientInfo.thinkAboutHarmingYourselfDetails}
                           onChange={(e) => setPatientInfo({
                               ...patientInfo,
                               thinkAboutHarmingYourselfDetails: e.value
                           })}/>
            </div>


            <div className="p-col-12">
                <label className={classes.questionLabels}>هل أنت تأخذ أي أدوية؟ *</label>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="yes" name="yes" value="yes" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        underMedicationsBoolean: e.value
                    })} checked={patientInfo.underMedicationsBoolean === 'yes'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="yes">نعم</label>

                </div>
            </div>

            <div className="p-col-12">
                <div className="p-field-radiobutton">
                    <RadioButton inputId="no" name="no" value="no" onChange={(e) => setPatientInfo({
                        ...patientInfo,
                        underMedicationsBoolean: e.value
                    })} checked={patientInfo.underMedicationsBoolean === 'no'}/>
                    <label className={classes.questionLabelsNotBold} htmlFor="no">لا</label>
                </div>
            </div>

            <div className="p-col-12">
                <label className={classes.questionLabels}>إذا كانت الإجابة "نعم" ، فما الأدوية التي تتناولها؟</label>
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
            props.editProfile({id: patientInfo.patientId, patientInfo:{filledMedicalHistoryForm:true,active:true}})
            console.log(data,"returned")
            // history.push('/patientDashboard')

        })
        // props.editProfile({id:userID,patientInfo:{filledMedicalHistoryForm:true}})
    }

    return (
        <div className="p-grid" style={{marginTop: "5%"}}>
            <div className="p-col-12">
                <h2  style={{textAlign:"right", paddingRight:"1em"}} className={classes.title} >
                  اكمل السجل الصحي الخاص فيك
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

                        <label className={classes.headerLabel}>السجل الصحي </label>
                        <Steps model={steps} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)}
                               readOnly={false}/>

                        {displayBasedOnActiveIndex()}


                    </div>
                </div>
            </Scrollbars>

            <div className="p-col-8"/>

            <div className="p-col-2">
                <Button label="ارسال" className="primaryBtn" icon="pi pi-check" style={{
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

export default connect(mapStateToProps, mapDispatchToProps)(ArabicMedicalHistoryForm);
