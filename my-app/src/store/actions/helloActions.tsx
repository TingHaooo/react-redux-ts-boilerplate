import { INCREASE_ENTHUSIASM, DECREASE_ENTHUSIASM } from '../constants';
import { StoreState } from "../types"
import { ThunkAction } from 'redux-thunk';

export interface IncreaseEnthusiasm  {
    type: INCREASE_ENTHUSIASM
}

export interface DecreaseEnthusiasm  {
    type: DECREASE_ENTHUSIASM
}

export type EnthusiasmAction = IncreaseEnthusiasm | DecreaseEnthusiasm;

type MyThunkAction<R> = ThunkAction<R, StoreState, undefined, EnthusiasmAction> 

export const increaseEnthusiasm = (): MyThunkAction<void> => (dispatch) => { 
    dispatch({type: INCREASE_ENTHUSIASM})
};

export const decreaseEnthusiasm = (): MyThunkAction<void> => (dispatch) => {
      dispatch({type: DECREASE_ENTHUSIASM}) 
};