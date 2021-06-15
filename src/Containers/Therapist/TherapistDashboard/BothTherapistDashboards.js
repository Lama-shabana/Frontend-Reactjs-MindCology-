import React, {useState} from 'react';
import {connect} from 'react-redux';
import TherapistDashboard from "./TherapistDashboard";
import ArabicTherapistDashboard from "./ArabicTherapistDashboard";

const BothTherapistDashboards = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <TherapistDashboard/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicTherapistDashboard/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothTherapistDashboards);
