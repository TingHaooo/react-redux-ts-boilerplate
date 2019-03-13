import { INCREASE_ENTHUSIASM, DECREASE_ENTHUSIASM } from '../constants';

export interface IncreaseEnthusiasm  {
    type: INCREASE_ENTHUSIASM
}

export interface DecreaseEnthusiasm  {
    type: DECREASE_ENTHUSIASM
}

export type EnthusiasmAction = IncreaseEnthusiasm | DecreaseEnthusiasm;

export const increaseEnthusiasm = (): IncreaseEnthusiasm => {return {type: INCREASE_ENTHUSIASM}};
export const decreaseEnthusiasm = (): DecreaseEnthusiasm => {return {type: DECREASE_ENTHUSIASM}};