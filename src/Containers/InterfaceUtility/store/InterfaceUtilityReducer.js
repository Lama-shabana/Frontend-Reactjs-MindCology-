import {createReducer} from "@reduxjs/toolkit";
import * as actions from './InterfaceUtilityActions';

const initialState = {
    menuVisible: false,
    loading: false,
    messages: []
};

const reducer = createReducer(initialState, {
    [actions.showLoading]: (state, action) => {
        state.loading = true;
    },
    [actions.hideLoading]: (state, action) => {
        state.loading = false;
    },
    [actions.showMenu]: (state, action) => {
        state.menuVisible = true;
    },
    [actions.hideMenu]: (state, action) => {
        state.menuVisible = false;
    },
    [actions.showMessage]: (state, action) => {
        let messages = [];
        console.log(action)
        messages.push(action.payload.message);
        state.messages = messages;
    }

});

export default reducer;