import React from "../react/packages/react/src/React";

const TargetComponent = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
)); // TargetComponent = { $$typeof: REACT_FORWARD_REF_TYPE }

class Component extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  render() {
    return <TargetComponent ref={this.ref} />;
    // <TargetComponent /> => React.createElement(TargetComponent) =>
    // { $$typeof: REACT_ELEMENT_TYPE, type: { $$typeof: REACT_FORWARD_REF_TYPE } }
  }
}

export default Component;
