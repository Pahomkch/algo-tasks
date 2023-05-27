import { BST, BSTNodeElement, printBST } from "../helpers/BST";
const bst = new BST();

const elements: number[] = [50, 30, 70, 15, 40, 60, 90, 7, 20, 35, 45, 55, 65, 85, 95];

for (const element of elements) {
  bst.insert(element);
}

printBST(bst.root);

function branchSum(node: BSTNodeElement, currentBranchSum: number, results: Array<number>) {
  if (!node.left && !node.right) {
    results.push(currentBranchSum + node.data)
    return
  }

  if (node.left) {
    branchSum(node.left, currentBranchSum + node.data, results)
  }

  if (node.right) {
    branchSum(node.right, currentBranchSum + node.data, results)
  }

}



function findBranchesSum(rootNode: BSTNodeElement | null) {
  const result: Array<number> = []

  if (!rootNode) {
    return result
  }

  branchSum(rootNode, 0, result)

  return result
}

console.log(findBranchesSum(bst.root))
