class JNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class JBinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
        continue;
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right;
        continue;
      }
    }
    return false;
  }

  insert(value) {
    const newNode = new JNode(value);
    if (this.size === 0) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
          } else {
            currentNode.left = newNode;
            break;
          }
        }

        if (currentNode.value < value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          } else {
            currentNode.right = newNode;
            break;
          }
        }
      }
    }
    this.size++;
  }

  bfs() {
    const queue = [];
    const list = [];
    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  bfsRecursive(queue = [this.root]) {
    if (queue.length === 0) {
      return [];
    }

    const currentNode = queue.shift();
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return [currentNode.value].concat(this.bfsRecursive(queue));
  }

  dfsInOrder(currentNode = this.root, list = []) {
    if (currentNode.left) {
      this.dfsInOrder(currentNode.left, list);
    }
    list.push(currentNode.value);
    if (currentNode.right) {
      this.dfsInOrder(currentNode.right, list);
    }
    return list;
  }

  dfsPreOrder(currentNode = this.root, list = []) {
    list.push(currentNode.value);
    if (currentNode.left) {
      this.dfsPreOrder(currentNode.left, list);
    }
    if (currentNode.right) {
      this.dfsPreOrder(currentNode.right, list);
    }
    return list;
  }

  dfsPostOrder(currentNode = this.root, list = []) {
    if (currentNode.left) {
      this.dfsPostOrder(currentNode.left, list);
    }
    if (currentNode.right) {
      this.dfsPostOrder(currentNode.right, list);
    }
    list.push(currentNode.value);
    return list;
  }
}

//              10
//                  30
//            20         50
//         15    25   40    100
//                        55
