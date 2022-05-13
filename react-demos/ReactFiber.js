type Fiber = {
  // 单链表树 (Singly Linked List Tree)
  // 父节点
  return: Fiber | null,
  // 第一个子节点
  child: Fiber | null,
  // 下一个兄弟节点
  sibling: Fiber | null,
  index: number
};
