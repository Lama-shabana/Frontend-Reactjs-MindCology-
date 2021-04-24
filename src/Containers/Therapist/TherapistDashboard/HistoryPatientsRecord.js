import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from "../../Patient/MedicalHistoryForm/MedicalHistoryForm.module.css";
import './HistoryPatientsRecord.css';
import record from '../../../assets/images.png';
import {waitFor} from "@testing-library/react";
import { PrimeIcons } from 'primereact/api';
const HistoryPatientsRecord = (props) => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("https://localhost:44383/api/MedicalHistoryForm/")
            .then(res => res.json())
            .then(
                (result) => {

                    setItems(result);
                },

                (error) => {

                }
            )
    }, [])

//     <ul>
//     {items.map(item => (
//             <li key={item.id}>
//                 {item.name} {item.price}
//             </li>
//         ))}
// </ul>
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
                <label  key={items.id} className={classes.questionLabels}>patient  Name:
                    {/*{setItems().name}*/}
                </label>
                    </div>
            </div>
                    <div className="p-col-12">
                <div className="p-grid">

                <label  className={classes.questionLabels}>
                    patient Age:
                    {/*{setItems().Age}*/}

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
                </div>

                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>The language you would like to have sessions in: </label>
                </div>
                <line>____________________________________________________________________________________________</line>


                <div className="p-col-12">
                    <label className={classes.questionLabels}> the gender do you prefer your therapist to be: </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>Have you ever been through traumatic experiences? </label>
                </div>
                <div className="p-col-12">
                    <label className={classes.questionLabels}> if answer "yes" ,
                        Traumatic Experiences Details:  </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>What are exactly are you seeking help for? </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>Do you have any mental or physical disorders that you know of?</label>
                </div>

                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>If answered "yes",
                        Mental Or Physical Disorder Details: </label>
                </div>
                <div className="p-col-12">
                    <label className={classes.questionLabels}> Have you ever tried or thought about harming yourself? </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>  If answered "yes", what happened? </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}> Are you under any medications? </label>
                </div>
                <line>____________________________________________________________________________________________</line>

                <div className="p-col-12">
                    <label className={classes.questionLabels}>if you under Medications ,
                        under Medications Details : </label>
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
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoryPatientsRecord);
