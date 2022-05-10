import { REACT_FORWARD_REF_TYPE } from "../react/packages/shared/ReactSymbols";

export default function forwardRef(render) {
  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render
  };
}