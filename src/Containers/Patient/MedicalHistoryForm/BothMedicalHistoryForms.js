import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import MedicalHistoryForm from "./MedicalHistoryForm";
import ArabicMedicalHistoryForm from "./ArabicMedicalHistoryForm";

const BothMedicalHistoryForms = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    useEffect(()=>{
        if(lang===null){
            window.location.reload()
        }
    },[JSON.parse(localStorage.getItem("lang"))])
    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <MedicalHistoryForm/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicMedicalHistoryForm/> :
               null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BothMedicalHistoryForms);
