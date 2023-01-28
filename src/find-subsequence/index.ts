/**
 take first element of subsequence,
 go through array, check if first element === currentElement
 if true, then take second element of sequence
 and continue compare with next element of array
*/
function findSubsequence(array: Array<number>, subsequence: Array<number>) {
  let currentIndex = 0

  for (const number of array) {
    const element = subsequence[currentIndex]

    if (number === element) {
      if (currentIndex === subsequence.length - 1) {
        return true
      }

      currentIndex++
    }
  }

  return false
}

const sortArray = [-4, -1, 1, 3, 5, 11, 12, 13]
console.log('** Find subsequence **')
console.log(findSubsequence(sortArray, [-1, 1, 11])) //true
console.log(findSubsequence(sortArray, [6, 5, 3])) // false
console.log(findSubsequence(sortArray, [11, 12, 13])) // true
console.log(findSubsequence(sortArray, [11, 1, 12])) // false
console.log(findSubsequence(sortArray, [-4, 5, 13])) // true
