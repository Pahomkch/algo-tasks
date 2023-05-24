const sortArray = [-4, -1, 1, 3, 5, 11, 12, 13]
const array = [5, 6, 11, 4, 3, 1, -4, -1, 13, 12]

/**
 take first and last element of array,
 x+y=target
 3+7=10
 10-7=3
 if sum > target move up left pointer
 if sum < target less down right pointer
*/
function findSumForSortArray(array: Array<number>, target: number) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  while (leftIndex < rightIndex) {
    const sum = array[leftIndex] + array[rightIndex]

    if (sum === target) {
      return [array[leftIndex], array[rightIndex]]
    } else if (sum < target) {
      leftIndex++
    } else {
      rightIndex--
    }
  }

  return []
}

console.log('** SORT **')
console.log(findSumForSortArray(sortArray, 23))
console.log(findSumForSortArray(sortArray, 11))
console.log(findSumForSortArray(sortArray, 6))
console.log(findSumForSortArray(sortArray, 25))
console.log(findSumForSortArray(sortArray, 4))
console.log(findSumForSortArray(sortArray, -6))
console.log(findSumForSortArray(sortArray, 16))

/**
 go throw all array. Create a hash-table (obj)
 for each number check has result of `target sum - current number` in hash table
 if yes result [currentNumber, sumInHashTable]
 if no just write that result to hash table
*/
//  [5, 6, 11, 4, 3, 1, -4, -1, 13, 12]  \  4;

function forUnSortArray(array: Array<number>, target: number) {
  const results: Record<number | string, number | true> = {}

  for (const number of array) {
    const needForTarget = target - number

    if (results[needForTarget]) {
      return [number, needForTarget]
    } else {
      results[number] = true
    }
  }

  return []
}

console.log('\n** NOT SORT **')
console.log(forUnSortArray(array, 11))
console.log(forUnSortArray(array, 6))
console.log(forUnSortArray(array, 25))
console.log(forUnSortArray(array, 17))
console.log(forUnSortArray(array, -6))
console.log(forUnSortArray(array, 16))
