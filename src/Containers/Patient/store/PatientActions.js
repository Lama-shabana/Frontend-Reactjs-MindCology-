import {createAsyncThunk} from "@reduxjs/toolkit";
import * as actions from "../../../constants/actionTypes/PatientActionTypes";
import * as uiActions from "../../InterfaceUtility/store/InterfaceUtilityActions";
import axios from "axios";

export const editProfile = createAsyncThunk(actions.EDIT_PATIENT_PROFILE, async (payload, thunkAPI) => {
    let errMsg=''
    console.log(payload,"before sending")
    console.log('api/Patient/'+payload.id,"route")
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.put('api/Patient/'+payload.id,
        payload.patientInfo
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

export const getProfileData = createAsyncThunk(actions.GET_PROFILE_DATA, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.get('api/Patient/'+payload.id,
        {
            // headers:{
            //     Authorization: thunkAPI.getState().login.token
            // }
        }).catch((e) => {
        thunkAPI.dispatch(uiActions.hideLoading());
        errMsg = 'error at API call ' + e.message;
    });
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


export const addMedicalHistoryData = createAsyncThunk(actions.ADD_MEDICAL_HISTORY_DATA, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.post('/api/MedicalHistoryForm',
        payload
        ,{
            // headers:{
            //     Authorization: thunkAPI.getState().login.token
            // }
        }).catch((e) => {
        thunkAPI.dispatch(uiActions.hideLoading());
        errMsg = 'error at API call ' + e.message;
    });
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

export const viewMedicalHistoryData= createAsyncThunk(actions.VIEW_MEDICAL_HISTORY_DATA, async (payload, thunkAPI) => {
    let errMsg=''
    console.log(payload,"before sending")
    console.log('api/MedicalHistoryForm/'+payload.id,"route")
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.get('api/MedicalHistoryForm/'+payload.id,
        {
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

