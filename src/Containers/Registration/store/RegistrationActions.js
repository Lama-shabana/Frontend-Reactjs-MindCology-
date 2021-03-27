import { createAsyncThunk} from "@reduxjs/toolkit";
import * as actions from '../../../constants/actionTypes/registrationActionTypes';
import * as uiActions from "../../InterfaceUtility/store/InterfaceUtilityActions";
import axios from "axios";

export const createAccount = createAsyncThunk(actions.CREATE_ACCOUNT, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.post('/users', {
        payload
    },{
        headers:{
            // Authorization: thunkAPI.getState().login.token
        }
    }).catch((e) => {
        thunkAPI.dispatch(uiActions.hideLoading());
        errMsg = 'error at API call ' + e.message;
    });
    console.log(payload)
    if (response) {

        if (response.data.valid) {
            thunkAPI.dispatch(uiActions.hideLoading());
            console.log(response.data+" <- valid response");
            return response.data;
        } else {
            thunkAPI.dispatch(uiActions.hideLoading());
            errMsg = response.data.responseMessage;
            return thunkAPI.rejectWithValue(response.data);
        }
    } else {
        console.log('no response -> ' + response)
        return thunkAPI.rejectWithValue(errMsg);
    }
});

// export const changePassword = createAsyncThunk(actions.CHANGE_PASSWORD, async (payload, thunkAPI) => {
//     let errMsg=''
//     thunkAPI.dispatch(uiActions.showLoading());
//     const response = await axios.post('/register/editPassword', {
//         payload
//     },{
//         headers:{
//             Authorization: thunkAPI.getState().login.token
//         }
//     }).catch((e) => {
//         thunkAPI.dispatch(uiActions.hideLoading());
//         errMsg = 'error at API call ' + e.message;
//     });
//     console.log(payload)
//     if (response) {
//
//         if (response.data.valid) {
//             thunkAPI.dispatch(uiActions.hideLoading());
//             console.log(response.data+" <- valid response");
//             return response.data;
//         } else {
//             thunkAPI.dispatch(uiActions.hideLoading());
//             errMsg = response.data.responseMessage;
//             return thunkAPI.rejectWithValue(response.data);
//         }
//     } else {
//         console.log('no response -> ' + response)
//         return thunkAPI.rejectWithValue(errMsg);
//     }
// });
//
// export const checkIfUsernameExists = createAsyncThunk(actions.CHECK_IF_USERNAME_EXISTS, async (payload, thunkAPI) => {
//     let errMsg=''
//     thunkAPI.dispatch(uiActions.showLoading());
//     const response = await axios.post('/register/checkIfUsernameExists', {
//         payload
//     },{
//         headers:{
//             Authorization: thunkAPI.getState().login.token
//         }
//     }).catch((e) => {
//         thunkAPI.dispatch(uiActions.hideLoading());
//         errMsg = 'error at API call ' + e.message;
//     });
//     console.log(payload)
//     if (response) {
//
//         if (response.data.valid) {
//             thunkAPI.dispatch(uiActions.hideLoading());
//             console.log(response.data+" <- valid response");
//             return response.data;
//         } else {
//             thunkAPI.dispatch(uiActions.hideLoading());
//             errMsg = response.data.responseMessage;
//             return thunkAPI.rejectWithValue(response.data);
//         }
//     } else {
//         console.log('no response -> ' + response)
//         return thunkAPI.rejectWithValue(errMsg);
//     }
// });
// export const checkIfEmailExists = createAsyncThunk(actions.CHECK_IF_EMAIL_EXISTS, async (payload, thunkAPI) => {
//     let errMsg=''
//     thunkAPI.dispatch(uiActions.showLoading());
//     const response = await axios.post('/register/checkIfEmailExists', {
//         payload
//     },{
//         headers:{
//             Authorization: thunkAPI.getState().login.token
//         }
//     }).catch((e) => {
//         thunkAPI.dispatch(uiActions.hideLoading());
//         errMsg = 'error at API call ' + e.message;
//     });
//     console.log(payload)
//     if (response) {
//
//         if (response.data.valid) {
//             thunkAPI.dispatch(uiActions.hideLoading());
//             console.log(response.data+" <- valid response");
//             return response.data;
//         } else {
//             thunkAPI.dispatch(uiActions.hideLoading());
//             errMsg = response.data.responseMessage;
//             return thunkAPI.rejectWithValue(response.data);
//         }
//     } else {
//         console.log('no response -> ' + response)
//         return thunkAPI.rejectWithValue(errMsg);
//     }
// });