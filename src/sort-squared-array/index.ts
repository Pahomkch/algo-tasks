/**
  First step we sort arguments array (log N)
  than we take module of first and last element, compare them and put biggest to last array position
*/
function sortSquaredArray(array: Array<number>) {
  const output = []
  const sortedArray = [...array].sort((a, b) => a - b)
  let startIndex = 0
  let lastIndex = array.length - 1

  for (let step = array.length - 1; step >= 0; step--) {
    const firstNumber = sortedArray[startIndex]
    const lastNumber = sortedArray[lastIndex]

    if (Math.abs(firstNumber) > Math.abs(lastNumber)) {
      output[step] = Math.pow(firstNumber, 2)
      startIndex++
    } else {
      output[step] = Math.pow(lastNumber, 2)
      lastIndex--
    }
  }

  return output
}

const case1 = [0, 1, 2, 3]
const case2 = [3, 5, 1, 2]
const case3 = [-1, 2, 33, 0]
const case4 = [-11, -22, -5, -3]
const case5 = [0, 0, 0, -1, 2, -3]
console.log('** Sort squared array **')
console.log(sortSquaredArray(case1))
console.log(sortSquaredArray(case2))
console.log(sortSquaredArray(case3))
console.log(sortSquaredArray(case4))
console.log(sortSquaredArray(case5))
