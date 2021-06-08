import React, {useState} from 'react';
import {connect} from 'react-redux';
import AddTherapist from "./AddTherapist";
import ArabicAddTherapist from "./ArabicAddTherapist";


const BothAddtherapists = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <AddTherapist/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicAddTherapist/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothAddtherapists);
