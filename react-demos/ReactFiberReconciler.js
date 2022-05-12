export function createContainer(containerInfo, isConcurrent, hydrate) {
  return createFiberRoot(containerInfo, isConcurrent, hydrate);
}

export function updateContainer(element, container, parentComponent, callback) {
  const current = container.current;
  const currentTime = requestCurrentTime();
  const expirationTime = computeExpirationForFiber(currentTime, current); // expirationTime 非常重要
  return updateContainerAtExpirationTime(
    element,
    container,
    parentComponent,
    expirationTime,
    callback
  );
}

export function updateContainerAtExpirationTime(
  element,
  container,
  parentComponent,
  expirationTime,
  callback
) {
  const current = container.current;

  return scheduleRootUpdate(current, element, expirationTime, callback);
}

function scheduleRootUpdate(current, element, expirationTime, callback) {
  const update = createUpdate(expirationTime); // update 用来标记需要更新的地点
  update.payload = { element };

  enqueueUpdate(current, update); // 加入 Fiber 更新队列

  scheduleWork(current, expirationTime); // 开始进行任务调度
  return expirationTime;
}
