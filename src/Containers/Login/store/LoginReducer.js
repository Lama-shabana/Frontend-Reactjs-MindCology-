import {createReducer} from "@reduxjs/toolkit";
import * as actions from './LoginActions';
import React from "react";

const initialState = {

    auth:null,
}
const reducer = createReducer(initialState, {

    [actions.login.fulfilled]: (state, action) => {
        state.auth = action;

        console.log(action,"reducer payload")
    },

    [actions.logout.fulfilled]: (state, action) => {
        localStorage.clear()
        console.log(action,"reducer payload")
    },
    // [actions.createAccount.fulfilled]: (state, action) => {
    //     console.log(action.payload.length,"ll")
    //     state.createAccount=action.payload
    // },



});


export default reducer;
