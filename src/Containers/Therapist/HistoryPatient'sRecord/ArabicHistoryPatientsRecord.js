import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from "./historyPatientRecord.module.css";
import medical from '../../../assets/medical.png';
import * as patientProfileActions from "../../Patient/store/PatientActions";
import * as therapistProfileActions from "../store/TherapistActions";
import {useHistory} from "react-router-dom";

const ArabicHistoryPatientsRecord = (props) => {

    const patientId = props.props.match.params.id
    // const id = JSON.parse(localStorage.getItem("auth"))?.id

    let loaded = false;

    const [userData, setUserData] = useState(null)
    const [historyPatientData, setHistoryPatientData] = useState(null)
    const lang = JSON.parse(localStorage.getItem("lang"))

    let history = useHistory()

    useEffect(() => {
        // if (lang === "english") {
        //     history.push("/historyPatient/" + patientId)
        // } else
            if (loaded === false && lang === "arabic") {
            props.getProfileData({id: patientId}).then((data) => {
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
            {console.log(lang, "arabic page entered")}

            {historyPatientData && userData ?
                <div className={classes.record} style={{marginRight: "12em", paddingTop: "5em"}}>
                    <div className="p-grid">
                        <div className="p-col-12">
                            {/*<i style={{paddingTop:"2em",marginLeft: "2em",fontSize:"2em"}} className="pi pi-id-card"/>*/}
                            <label className={classes.headerLabel}>
                                <img style={{fontSize: "xx-small", width: "11em"}} src={medical}/>
                                <span> سجل المريض الطبي </span>
                            </label>
                        </div>
                    </div>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <label
                                className={classes.questionLabels}>اسم المريض:
                                {userData.firstName} {userData.lastName}
                            </label>
                        </div>
                    </div>
                    <div className="p-col-12">
                        <div className="p-grid">
                            <label className={classes.questionLabels}>
                                عمر المريض:
                                {userData.age}

                            </label>
                        </div>
                    </div>
                    <div className="p-grid">

                        <div className="p-col-12">
                            <div className="p-col-4"/>
                            <h5 className={classes.H3}>   {userData.firstName} {userData.lastName}السجل الطبي ل </h5>
                        </div>

                    </div>

                    <div className="p-grid">
                        <div className="p-col-12">
                            <label
                                className={classes.questionLabels}>: خدمات الصحة النفسية
                            </label>


                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>
                                {historyPatientData.providedWithMentalHealthServices}
                            </label>
                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabels}>اللغة التي ترغب في إجراء الجلسات بها
                                في: </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.sessionsLanguage}
                            </label>
                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabels}> الجنس الذي تفضله لمعالجك
                                يكون: </label>


                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.therapistGender}
                            </label>
                        </div>


                        <div className="p-col-12">
                            <label className={classes.questionLabels}>
                                تفاصيل التجارب الصادمة: </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.traumaticExperience}
                            </label>
                        </div>

                        <div className="p-col-12">
                            <label className={classes.questionLabels}>طلب الحاجة لمساعدة: </label>


                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.seekingHelpFor}
                            </label>
                        </div>


                        <div className="p-col-12">
                            <label className={classes.questionLabels}>
                                تفاصيل الاضطراب العقلي أو البدني: </label>

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
                            <label className={classes.questionLabels}> تفاصيل حول تفكيره بالانتحار </label>

                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabelsNotBold}>

                                {historyPatientData.thinkAboutHarmingYourselfDetails}
                            </label>
                        </div>
                        <div className="p-col-12">
                            <label className={classes.questionLabels}>
                                تفاصيل الأدوية التي يتلقاها: </label>

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
export default connect(mapStateToProps, mapDispatchToProps)(ArabicHistoryPatientsRecord);
