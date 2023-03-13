/**
  if next value > previous sum + 1 than it the result
*/
function nonConstructibleChange(array: Array<number>) {
  let change = 0

  for (const number of array) {
    if (number > change + 1) {
      return change + 1
    }

    change += number
  }

  return change + 1
}

const case1 = [1, 1, 2, 5]
const case2 = [3, 5, 7, 9]
const case3 = [1, 1, 1, 1]
const case4 = [2, 3, 6, 10]
const case5 = [1, 2, 4, 8, 15, 22, 23, 24, 25, 26, 27 ]
console.log('** Non constructable change **')
console.log(nonConstructibleChange(case1))
console.log(nonConstructibleChange(case2))
console.log(nonConstructibleChange(case3))
console.log(nonConstructibleChange(case4))
console.log(nonConstructibleChange(case5))
