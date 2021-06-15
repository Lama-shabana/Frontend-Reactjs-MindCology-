import React, {useState} from 'react';
import {connect} from 'react-redux';
import ViewTherapists from "./ViewTherapists";
import ArabicViewTherapists from "./ArabicViewTherapists";



const BothViewTherapists = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <ViewTherapists/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicViewTherapists/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothViewTherapists);
