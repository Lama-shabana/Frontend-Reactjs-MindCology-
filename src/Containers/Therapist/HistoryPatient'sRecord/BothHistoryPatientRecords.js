import React, {useState} from 'react';
import {connect} from 'react-redux';
import HistoryPatientsRecord from "./HistoryPatientsRecord";
import ArabicHistoryPatientsRecord from "./ArabicHistoryPatientsRecord";


const BothHistoryPatientRecords = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <HistoryPatientsRecord/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicHistoryPatientsRecord/> :
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
