//What is an array?

const arrayWithNoItems = []

const fullArray = ['a', 'b', 'c', 'd'] 
//index            //0  //1  //2  //3



//Calling an item an array

// fullArray[  index  ]


// console.log(fullArray[0])
// console.log(fullArray[1])
// console.log(fullArray[2])
// console.log(fullArray[3])



//Is there a better way to call all items in an array?

//The For Loop.

// for (starting point; ending point; rate through loop) {
// }


for (index = 0; index < fullArray.length; index++) { //index = index + 1 === index++
    console.log(fullArray[index])
}

//index = index +2 === index += 2

//array methods --> built in functions for the array

//.push() = adds an item to the end of an array

// fullArray.push('e')
// console.log(fullArray)

//.pop() = deletes the last item of an array

// fullArray.pop()
// console.log(fullArray)

//.splice = can add or delete, one or more items at a spesific part of an array
//(posision, how many to delete, what to add)

// fullArray.splice(0, 2, "c")
// console.log(fullArray)

//.map = go through every item in the array and manipulate it (coplicated)

//fullArray.map((element) => ) {
    // element = element + 1
//})