import React, {useState} from 'react';
import {connect} from 'react-redux';
import ViewPatients from "./ViewPatients";
import ArabicViewPatients from "./ArabicViewPatients";



const BothViewPatients = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <ViewPatients/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicViewPatients/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothViewPatients);
