import React from "../react/packages/react/src/React";

const { Provider, Consumer } = React.createContext("contextDefaultValue");

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contextValue: "contextStateValue"
    };
  }
  render() {
    return <Provider value={contextValue}>{this.props.children}</Provider>;
  }
}

class ChildComponent extends React.Component {
  render() {
    return <Consumer>{(value) => <p>contextValue: {value}</p>}</Consumer>;
  }
}

export default () => (
  <ParentComponent>
    <ChildComponent />
  </ParentComponent>
);
