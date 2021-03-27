import React from 'react';
import {connect} from "react-redux";
import * as actions from "./store/InterfaceUtilityActions";
import classes from './InterfaceUtility.module.css';
import {ProgressSpinner} from "primereact/progressspinner";

const InterfaceUtility = (props) => {
    let content = null;
    if (props.loading)
            content = <div className={classes.Loading}>
            <div className={classes.Spinner}>
                <ProgressSpinner style={{width: '200px', height: '200px'}} strokeWidth="2" animationDuration="1.5s"/>
            </div>
        </div>;

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )

}


const mapStateToProps = state => {
    return {
        loading: state.ui.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        showLoading: (userSubmitForm) => dispatch(actions.showLoading),
        hideLoading: (userSubmitForm) => dispatch(actions.hideLoading)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceUtility);