import {createAsyncThunk} from "@reduxjs/toolkit";
import * as actions from "../../../constants/actionTypes/TherapistActionTypes";
import * as uiActions from "../../InterfaceUtility/store/InterfaceUtilityActions";
import axios from "axios";

export const editProfile = createAsyncThunk(actions.EDIT_ThERAPIST_PROFILE, async (payload, thunkAPI) => {
    let errMsg=''
    console.log(payload,"before sending")
    console.log('api/Therapist/'+payload.id,"route")
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.put('api/Therapist/'+payload.id,
        payload.therapistInfo
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
    const response = await axios.get('api/Therapist/'+payload.id,
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

export const getAllTherapists = createAsyncThunk(actions.GET_ALL_THERAPISTS, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.get('api/Therapist',
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

export const getAllAppointments= createAsyncThunk(actions.GET_ALL_APPOINTMENTS, async (payload, thunkAPI) => {
    let errMsg=''

    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.get('api/Appointments',
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
export const getAppointment = createAsyncThunk(actions.GET_APPOINTMENT, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.get('api/Appointments/'+payload.id,
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

export const deleteAppointment = createAsyncThunk(actions.DELETE_APPOINTMENT, async (payload, thunkAPI) => {
    let errMsg=''
    thunkAPI.dispatch(uiActions.showLoading());
    const response = await axios.delete('api/Appointments/'+payload.id,
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
