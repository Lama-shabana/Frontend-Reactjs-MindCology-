import React, {useState} from 'react';
import {connect} from 'react-redux';
import PatientProfile from "./PatientProfile";
import ArabicPatientProfile from "./ArabicPatientProfile";


const BothPatientProfiles = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <PatientProfile/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicPatientProfile/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothPatientProfiles);
