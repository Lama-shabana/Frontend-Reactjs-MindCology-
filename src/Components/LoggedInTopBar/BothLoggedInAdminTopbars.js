import React, {useState} from 'react';
import {connect} from 'react-redux';
import LoggedInAdminTopbar from "./LoggedInAdminTopbar";
import ArabicLoggedInAdminTopbar from "./ArabicLoggedInAdminTopbar";


const BothLoggedInAdminTopbars = (props) => {

    const lang = JSON.parse(localStorage.getItem("lang"))

    return (
        <div>

            {console.log(lang,"LANG")}
            {lang&&lang === "english" ?
                <LoggedInAdminTopbar/> :
                null
            }

            {lang&&lang === "arabic" ?
                <ArabicLoggedInAdminTopbar/> :
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

export default connect(mapStateToProps, mapDispatchToProps)(BothLoggedInAdminTopbars);
