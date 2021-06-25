import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import HistoryPatientsRecord from "./HistoryPatientsRecord";
import ArabicHistoryPatientsRecord from "./ArabicHistoryPatientsRecord";


const BothHistoryPatientRecords = (props) => {

    // const lang = JSON.parse(localStorage.getItem("lang"))


    const [lang,setLang]=useState(null)

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("lang"))){
            setLang(JSON.parse(localStorage.getItem("lang")))
            // window.location.reload()
        }
    },[localStorage.getItem("lang")])


    return (
        <div>

            {console.log(lang,"both entered")}
            {lang === "english" ?
                <HistoryPatientsRecord props={props}/> :
                null
            }

            {lang === "arabic" ?
                <ArabicHistoryPatientsRecord props={props}/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothHistoryPatientRecords);
