import { createAsyncThunk} from "@reduxjs/toolkit";
import * as actions from '../../../../constants/actionTypes/AdminActionTypes';
import * as uiActions from "../../../InterfaceUtility/store/InterfaceUtilityActions";
import axios from "axios";

export const createAccountForTherapist = createAsyncThunk(<actions className="CREATE_ACCOUNT_FOR_THERAPIST"></actions>, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.post('api/Users',
        payload
        ,{
            // headers:{
            //     Authorization: thunkAPI.getState().login.token
            // }
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
