import { REACT_MEMO_TYPE } from "../react/packages/shared/ReactSymbols";

export default function memo(type, compare) {
  return {
    $$typeof: REACT_MEMO_TYPE,
    type,
    compare: compare === undefined ? null : compare
  };
}
