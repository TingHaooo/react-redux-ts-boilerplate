import { INCREASE_ENTHUSIASM, DECREASE_ENTHUSIASM } from '../constants';
import { EnthusiasmAction} from '../actions/helloActions';
import { HelloStore } from '../types'

const HelloReducer = (state: HelloStore = { enthusiasmLevel: 1}, action: EnthusiasmAction) => {
    switch(action.type) {
        case INCREASE_ENTHUSIASM:
            return {...state, enthusiasmLevel: state.enthusiasmLevel + 1};
        case DECREASE_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
        default:
            return state
    }
};

export default HelloReducer;