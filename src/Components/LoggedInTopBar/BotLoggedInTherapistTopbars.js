import React, {useState} from 'react';
import {connect} from 'react-redux';
import ArabicLoggedInTherapistTopbar from "./ArabicLoggedInTherapistTopbar";
import LoggedInTherapistTopbar from "./LoggedInTherapistTopbar";




const BothLoggedInTherapistTopbars = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <LoggedInTherapistTopbar/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicLoggedInTherapistTopbar/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothLoggedInTherapistTopbars);
