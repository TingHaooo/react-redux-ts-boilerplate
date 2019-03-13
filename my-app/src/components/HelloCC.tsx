import * as React from 'react';

interface Props {
    name: string,
    enthusiasmLevel?: number
}

interface State {
    curEnthusiasmLevel: number
}

class HelloCC extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { curEnthusiasmLevel: props.enthusiasmLevel || 1}
    }

    incEnthusiasmLevel = () => this.updateEnthusiasmLevel(this.state.curEnthusiasmLevel + 1);
    decEnthusiasmLevel = () => this.updateEnthusiasmLevel(this.state.curEnthusiasmLevel - 1);

    render() {
        return (
            <div className="Hello">
                <div className="greeting">
                Hello {this.props.name + getExclamanationMarks(this.state.curEnthusiasmLevel)}
                </div>
                <button className="enthusiasm-btn" onClick={this.incEnthusiasmLevel}>+</button>
                <button className="enthusiasm-btn" onClick={this.decEnthusiasmLevel}>-</button>
            </div>
        );
    }

    updateEnthusiasmLevel = (level: number): void => {
        this.setState({curEnthusiasmLevel: level})
    }
}

export default HelloCC;

// utility
function getExclamanationMarks(numChar: number) : string{
    return Array(numChar + 1).join("!");
}