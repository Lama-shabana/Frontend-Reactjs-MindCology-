import {createAction} from '@reduxjs/toolkit';
import * as actions from '../../../constants/actionTypes/interfaceUtilityActionTypes';

export const showLoading = createAction(actions.SHOW_LOADING);
export const hideLoading = createAction(actions.HIDE_LOADING);
export const showMessage = createAction(actions.SHOW_MESSAGE);
export const showMenu = createAction(actions.SHOW_MENU);
export const hideMenu = createAction(actions.HIDE_MENU);

