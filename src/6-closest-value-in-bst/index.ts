import { BST, BSTNodeElement } from "../BST";

// Создание экземпляра BST
const bst = new BST();

// Вставка элементов от 1 до 100
const elements: number[] = [10, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45, 55, 12, 65, 75, 85, 15, 95, 5, 90, 100];
for (const element of elements) {
  bst.insert(element);
}


// Compare node value and find value
// If = 0, then return node value
// If less than compareValue, save new closest value
// If it more, take left node, else take right

function findClosestValuesInBST(value: number) {
  let closest = Infinity
  let comparingValue = Infinity

  function compareElement(node: BSTNodeElement | null): number {
    if (node?.data) {
      const compare = Math.abs(node.data - value)

      if (compare === 0) {
        return node.data
      }

      if (compare < comparingValue) {
        comparingValue = compare
        closest = node.data
      }

      if (node.data > value) {
        return compareElement(node.left)
      } else {
        return compareElement(node.right)
      }
    } else {
      return closest
    }
  }

  return compareElement(bst.root)
}

console.log(findClosestValuesInBST(12))
