import { INCREASE_ENTHUSIASM, DECREASE_ENTHUSIASM, GET_USERNAME, GET_USERNAME_ERR} from '../constants';
import { StoreState } from "../types";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import axios, {AxiosError} from "axios";

export interface IncreaseEnthusiasmAction  {
    type: INCREASE_ENTHUSIASM
};

export interface DecreaseEnthusiasmAction  {
    type: DECREASE_ENTHUSIASM
};

export interface GetUserNameAction {
    type: GET_USERNAME,
    userName: string
}

export interface GetUserNameErrAction {
    type: GET_USERNAME_ERR,
    err: AxiosError
}

export type EnthusiasmAction = IncreaseEnthusiasmAction | DecreaseEnthusiasmAction;
export type UserAction = GetUserNameAction | GetUserNameErrAction;

type MyThunkAction<R> = ThunkAction<R, StoreState, undefined, Action> 

const USER_URL = "https://jsonplaceholder.typicode.com/users";

export const getUserName= (): MyThunkAction<void> => async (dispatch) => { 
    try {
        let users = await axios.get(USER_URL);
        dispatch({type: GET_USERNAME, userName: users.data[0].name});
    }
    catch (e){
        dispatch({type: GET_USERNAME_ERR, err: e});
    }
};

export const increaseEnthusiasm = (): MyThunkAction<void> => (dispatch) => { 
    dispatch({type: INCREASE_ENTHUSIASM});
};

export const decreaseEnthusiasm = (): MyThunkAction<void> => (dispatch) => {
      dispatch({type: DECREASE_ENTHUSIASM}) ;
};