import React, {useState} from 'react';
import {connect} from 'react-redux';
import TherapistProfile from "./TherapistProfile";
import ArabicTherapistProfile from "./ArabicTherapistProfile";



const BothTherapistProfiles = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <TherapistProfile/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicTherapistProfile/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothTherapistProfiles);
