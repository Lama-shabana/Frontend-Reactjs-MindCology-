import {createReducer} from "@reduxjs/toolkit";
import * as actions from './RegistrationActions';
import React from "react";

const initialState = {

}
const reducer = createReducer(initialState, {

    // [actions.createAccount.fulfilled]: (state, action) => {
    //     state.createAccount = action.payload.data;
    // },[actions.createAccount.fulfilled]: (state, action) => {
    //     console.log(action.payload.length,"ll")
    //     state.createAccount=action.payload
    // },



});


export default reducer;
