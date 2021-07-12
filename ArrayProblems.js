//problem 1
//create a for loop for the provided array. The for loop should increase all items by 1
//output = [2, 3, 4, 5, 6]

// const intArray = [1, 2, 3, 4, 5]

// for (index = 0; index < intArray.length; index++){
//     return intArray[index]+1
// }

// console.log(intArray)

//problem 2
//using array methods, alter the given array to match the output
//output = [1, 2, 3, 4, 5]

// inputArray = [2, 3, 1, 5, 5, 6]

// const problem_2 = (array) => {
//     array.pop()
//     array.splice(2, 2, 4)
//     array.splice(0, 0, 1)
//     return array
// }

// console.log(problem_2(inputArray))

//problem 3
//using only three for loops

const csFirstUniqueChar = (input_str) => {
    const array = input_str.split("")
    for (index = 0; index < 20; index++){
        if (array[index] === array[index - 1]) {
        } else if (index != 0) {
            return index
        } 
    }
}

console.log(csFirstUniqueChar('aaabcccdeee'))

//output = '3'

/*
turn the string into an array
run the array through a loop to check each index
test each index against the next index
return the position of the different item
*/
