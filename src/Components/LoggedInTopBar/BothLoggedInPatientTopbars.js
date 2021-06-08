import React, {useState} from 'react';
import {connect} from 'react-redux';
import ArabicLoggedInPatientTopbar from "./ArabicLoggedInPatientTopbar";
import LoggedInPatientTopbar from "./LoggedInPatientTopbar";



const BothLoggedInPatientTopbars = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <LoggedInPatientTopbar/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicLoggedInPatientTopbar/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothLoggedInPatientTopbars);
