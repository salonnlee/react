import { createHostRootFiber } from "../react/packages/react-reconciler/src/ReactFiber";
import { NoWork } from "./ReactFiberExpirationTime";

export function createFiberRoot(containerInfo, isConcurrent, hydrate) {
  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  const uninitializedFiber = createHostRootFiber(isConcurrent);

  const root /* : FiberRoot */ = {
    // Root Fiber <= root 节点对应的 Fiber 对象
    current: uninitializedFiber,
    // root 节点 <= ReactDOM.render(<App />, document.getElementById("root"))
    containerInfo: containerInfo,
    // ReactDOM 不会用到
    pendingChildren: null,

    // 时间变量 <= 各种更新涉及的时间以及区分不同任务的优先级
    earliestPendingTime: NoWork,
    latestPendingTime: NoWork,
    earliestSuspendedTime: NoWork,
    latestSuspendedTime: NoWork,
    latestPingedTime: NoWork,

    // 渲染过程是否出现错误
    didError: false,

    pendingCommitExpirationTime: NoWork,
    finishedWork: null,
    timeoutHandle: noTimeout,
    // 顶层 context 对象 <= renderSubtreeIntoContainer() (基本不会用到)
    context: null,
    pendingContext: null,
    // 第一次渲染是否需要进行节点合并
    hydrate,
    nextExpirationTimeToWorkOn: NoWork,
    expirationTime: NoWork,
    firstBatch: null,
    // root 单链表指针 <= 指向下一个 root Fiber (如果有的话)
    nextScheduledRoot: null
  };

  uninitializedFiber.stateNode = root;

  return root;
}
