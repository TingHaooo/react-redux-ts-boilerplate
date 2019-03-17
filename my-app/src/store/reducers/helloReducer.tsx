import { INCREASE_ENTHUSIASM, DECREASE_ENTHUSIASM, GET_USERNAME, GET_USERNAME_ERR} from '../constants';
import { EnthusiasmAction, UserAction} from '../actions/helloActions';
import { HelloStore } from '../types';

const HelloReducer = (state: HelloStore = { enthusiasmLevel: 1, name: undefined}, action: EnthusiasmAction | UserAction) => {
    switch(action.type) {
        case INCREASE_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREASE_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        case GET_USERNAME:
            return {...state, name: action.userName};
        case GET_USERNAME_ERR:
            return state;
        default:
            return state;
    }
};

export default HelloReducer;