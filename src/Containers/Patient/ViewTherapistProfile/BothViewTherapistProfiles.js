import React, {useState} from 'react';
import {connect} from 'react-redux';
import ViewTherapistProfile from "./ViewTherapistProfile";
import ArabicViewTherapistProfile from "./ArabicViewTherapistProfile";

const BothViewTherapistProfiles = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <ViewTherapistProfile/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicViewTherapistProfile/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothViewTherapistProfiles);
