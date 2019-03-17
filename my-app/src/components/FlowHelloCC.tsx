import * as React from 'react';
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { StoreState } from '../store/types'
import * as helloActions from '../store/actions/helloActions'

interface Props {
    name: undefined | string,
    enthusiasmLevel?: number
    incEnthusiasmLevel: () => void,
    decEnthusiasmLevel: () => void,
    getUserName: () => void
}

class FlowHelloCC extends React.Component<Props> {

    componentDidMount() {
        this.props.getUserName()
    }

    render() {
        const { incEnthusiasmLevel, decEnthusiasmLevel, enthusiasmLevel} = this.props;

        return (
            <div className="Hello">
                <div className="greeting">
                    Hello {(this.props.name || "") + getExclamanationMarks(enthusiasmLevel || 1)}
                </div>
                <button className="enthusiasm-btn" onClick={incEnthusiasmLevel}>+</button>
                <button className="enthusiasm-btn" onClick={decEnthusiasmLevel}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    console.log(state)
    return ({
        enthusiasmLevel: state.helloStore.enthusiasmLevel,
        name: state.helloStore.name
    })
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, undefined, helloActions.EnthusiasmAction | helloActions.UserAction>) => {
    return ({
        incEnthusiasmLevel: () => dispatch(helloActions.increaseEnthusiasm()),
        decEnthusiasmLevel: () => dispatch(helloActions.decreaseEnthusiasm()),
        getUserName: () => dispatch(helloActions.getUserName())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowHelloCC);

// utility
function getExclamanationMarks(numChar: number) : string{
    return Array(numChar + 1).join("!");
}