import ReactCurrentOwner from "./ReactCurrentOwner";

function resolveDispatcher() {
  const dispatcher = ReactCurrentOwner.currentDispatcher;
  return dispatcher;
}

export function useContext(Context, observedBits) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useContext(Context, observedBits);
}

export function useState(initialState) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

export function useReducer(reducer, initialState, initialAction) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialState, initialAction);
}

export function useRef(initialValue) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

export function useEffect(create, inputs) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

export function useLayoutEffect(create, inputs) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

export function useCallback(callback, inputs) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

export function useMemo(create, inputs) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

export function useImperativeMethods(ref, create, inputs) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useImperativeMethods(ref, create, inputs);
}
