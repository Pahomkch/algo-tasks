import { BST, BSTNodeElement, printBST } from "../helpers/BST";
const bst = new BST();

const elements: number[] = [50, 30, 70, 15, 40, 60, 90, 7, 20, 21, 35, 45, 55, 65, 85, 95];

for (const element of elements) {
  bst.insert(element);
}

printBST(bst.root);

function deep(node: BSTNodeElement, depthLevel: number, results: Array<number>) {
  if (!node.left && !node.right) {
    results.push(depthLevel)
  }

  depthLevel++

  if (node.left) {
    deep(node.left, depthLevel, results)
  }

  if (node.right) {
    deep(node.right, depthLevel, results)
  }
}



function findNodeDepth(rootNode: BSTNodeElement | null): Array<number> {
  let results: Array<number> = []
  let depthLevel = 1

  if (!rootNode) {
    return [0]
  }

  deep(rootNode, depthLevel, results)

  return results
}

console.log(Math.max(...findNodeDepth(bst.root)))
