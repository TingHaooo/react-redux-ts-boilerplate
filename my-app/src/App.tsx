import * as React from 'react';
import FlowHelloCC from './components/FlowHelloCC'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <FlowHelloCC name="Jason"/>
      </div>
    );
  }
}

export default App;
