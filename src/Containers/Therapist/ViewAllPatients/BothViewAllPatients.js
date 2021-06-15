import React, {useState} from 'react';
import {connect} from 'react-redux';
import ViewAllPatients from "./ViewAllPatients";
import ArabicViewAllPatients from "./ArabicViewAllPatients";

const BothViewAllPatients = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <ViewAllPatients/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicViewAllPatients/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothViewAllPatients);
