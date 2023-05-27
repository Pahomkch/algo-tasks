export class BSTNodeElement {
  data: number;
  left: BSTNodeElement | null;
  right: BSTNodeElement | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  root: BSTNodeElement | null;

  constructor() {
    this.root = null;
  }

  insert(data: number): void {
    if (this.root === null) {
      this.root = new BSTNodeElement(data);
    } else {
      this._insertRecursive(this.root, data);
    }
  }

  private _insertRecursive(node: BSTNodeElement, data: number): void {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new BSTNodeElement(data);
      } else {
        this._insertRecursive(node.left, data);
      }
    } else if (data > node.data) {
      if (node.right === null) {
        node.right = new BSTNodeElement(data);
      } else {
        this._insertRecursive(node.right, data);
      }
    }
  }
}


export function printBST(node: BSTNodeElement | null, indent = "") {
  if (!node) {
    return 'Empty BST'
  }

  console.log(indent + node.data);

  if(node.left) {
    console.log(indent + "  L: ");
    printBST(node.left, indent + "    ");
  }

  if(node.right) {
    console.log(indent + "  R: ");
    printBST(node.right, indent + "    ");
  }
}
