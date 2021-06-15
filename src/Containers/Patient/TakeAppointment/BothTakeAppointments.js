import React, {useState} from 'react';
import {connect} from 'react-redux';
import TakeAppointment from "./TakeAppointment";
import ArabicTakeAppiontment from "./ArabicTakeAppiontment";

const BothTakeAppiontments = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <TakeAppointment/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicTakeAppiontment/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothTakeAppiontments);
