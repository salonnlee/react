import {
  count,
  forEach,
  map,
  only,
  toArray
} from "../react/packages/react/src/ReactChildren";

import { createRef } from "../react/packages/react/src/ReactCreateRef";
import {
  Component,
  PureComponent
} from "../react/packages/react/src/ReactBaseClasses";

import { createContext } from "../react/packages/react/src/ReactContext";
import forwardRef from "../react/packages/react/src/forwardRef";
import { lazy } from "../react/packages/react/src/ReactLazy";
import memo from "../react/packages/react/src/memo";

import {
  REACT_FRAGMENT_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_CONCURRENT_MODE_TYPE,
  REACT_PROFILER_TYPE
} from "../react/packages/shared/ReactSymbols";

import {
  createElement,
  cloneElement,
  createFactory,
  isValidElement
} from "../react/packages/react/src/ReactElement";

import ReactVersion from "../react/packages/shared/ReactVersion";
import ReactSharedInternals from "../react/packages/react/src/ReactSharedInternals";

const React = {
  Children: {
    map,
    forEach,
    count,
    toArray,
    only
  },

  createRef,
  Component,
  PureComponent,

  createContext,
  forwardRef,
  lazy,
  memo,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  Profiler: REACT_PROFILER_TYPE,

  createElement,
  cloneElement,
  createFactory,
  isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

export default React;
