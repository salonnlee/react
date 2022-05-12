import * as DOMRenderer from "../react/packages/react-reconciler/src/ReactFiberRoot";

const ReactDOM = {
  hydrate(element, container, callback) {
    return legacyRenderSubtreeIntoContainer(
      null,
      element,
      container,
      true, // 服务端渲染
      callback
    );
  },

  render(element, container, callback) {
    return legacyRenderSubtreeIntoContainer(
      null,
      element,
      container,
      false, // 客户端渲染
      callback
    );
  }
};

function legacyRenderSubtreeIntoContainer(
  parentComponent,
  children,
  container,
  forceHydrate,
  callback
) {
  let root = container._reactRootContainer;
  if (!root) {
    // Initial mount
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
        container,
      forceHydrate
    );
    if (typeof callback === "function") {
      const originalCallback = callback;
      callback = function () {
        const instance = DOMRenderer.getPublicRootInstance(root._internalRoot);
        originalCallback.call(instance);
      };
    }
    // Initial mount should not be batched.
    DOMRenderer.unbatchedUpdates(() => {
      if (parentComponent != null) {
        root.legacy_renderSubtreeIntoContainer(
          parentComponent,
          children,
          callback
        );
      } else {
        root.render(children, callback);
      }
    });
  } else {
    if (typeof callback === "function") {
      const originalCallback = callback;
      callback = function () {
        const instance = DOMRenderer.getPublicRootInstance(root._internalRoot);
        originalCallback.call(instance);
      };
    }
    // Update
    if (parentComponent != null) {
      root.legacy_renderSubtreeIntoContainer(
        parentComponent,
        children,
        callback
      );
    } else {
      root.render(children, callback); // => ReactRoot.prototype.render()
    }
  }
  return DOMRenderer.getPublicRootInstance(root._internalRoot);
}

function legacyCreateRootFromDOMContainer(container, forceHydrate) {
  const shouldHydrate = forceHydrate;
  // First clear any existing content.
  // 如果不是服务端渲染, 那么就需要把 root 节点下所有节点移除
  if (!shouldHydrate) {
    let rootSibling;
    while ((rootSibling = container.lastChild)) {
      container.removeChild(rootSibling);
    }
  }
  // Legacy roots are not async by default.
  const isConcurrent = false;
  return new ReactRoot(container, isConcurrent, shouldHydrate);
}

function ReactRoot(container, isConcurrent, hydrate) {
  // DOMRenderer.createContainer() 创建了 FiberRoot
  const root = DOMRenderer.createContainer(container, isConcurrent, hydrate);
  this._internalRoot = root;
}
ReactRoot.prototype.render = function (children, callback) {
  const root = this._internalRoot;
  const work = new ReactWork(); // ReactWork 不重要
  callback = callback === undefined ? null : callback;
  if (callback !== null) {
    work.then(callback);
  }
  DOMRenderer.updateContainer(children, root, null, work._onCommit);
  return work;
};

function ReactWork() {}
