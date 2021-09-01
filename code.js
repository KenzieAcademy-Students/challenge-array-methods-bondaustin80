// Your Code Here.

function displayToPage(x) {
    let element = document.createElement("p")
    element.innerText = x
    document.body.append(element)
}


//Basic

let array1 = [1, 2, 3, 4, 5]

let array2 = ["dog", "cat", "bird", "snake", "turtle"]

function newIncludes(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            displayToPage(true)
            return true
        }
    }
    displayToPage(false)
    return false
}

console.assert(
    newIncludes(array1, 3) === true,
    "newIncludes does not return true with an array of numbers"
)

console.assert(
    newIncludes(array1, 8) === false,
    "newIncludes does not return false with an array of numbers"
)

console.assert(
    newIncludes(array2, "snake") === true,
    "newIncludes does not return true with an array of strings"
)

console.assert(
    newIncludes(array2, "pig") === false,
    "newIncludes does not return false with an array of strings"
)

function newConcat(arrayA, arrayB) {
    let newArray = []
    for (let i = 0; i < arrayA.length; i++) {
        newArray.push(arrayA[i])
    }
    for (let j = 0; j < arrayB.length; j++) {
        newArray.push(arrayB[j])
    }
    displayToPage(newArray)
    return newArray
}

console.assert(
    JSON.stringify(newConcat(array1, array2)) === JSON.stringify([1, 2, 3, 4, 5, "dog", "cat", "bird", "snake", "turtle"]),
    "newConcat does not work properly with an array of numbers and array of strings"
)

console.assert(
    JSON.stringify(newConcat([4, 12, 5], [1, 6, 17])) === JSON.stringify([4, 12, 5, 1, 6, 17]),
    "newConcat does not work properly with 2 arrays containing numbers"
)

function newJoin(array, operator) {
    let result = ""
    let op
    if (operator === undefined) {
        op = ","
    } else {
        op = operator
    }
    for (let i = 0; i < array.length; i++) {
        if (result !== "") {
            result = result + op
        }
        result = result + array[i]
    }
    displayToPage(result)
    return result
}

console.assert(
    newJoin(array1, "-") === array1.join("-"),
    "newJoin does not word properly if operator is received"
)

console.assert(
    newJoin(array2) === array2.join(),
    "newJoin does not work properly if operator is missing"
)

//Intermediate


//Callback Functions
function isEven(number) {
    if (number % 2 === 0) {
        return true
    }
    return false
}

function greaterThanTen(number) {
    if (number > 10) {
        return true
    }
    return false
}

function isSnake(animal) {
    if (animal === "snake") {
        return true
    }
    return false
}

function isChicken(animal) {
    if (animal === "chicken") {
        return true
    }
    return false
}

function newSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            displayToPage(true)
            return true
        }
    }
    displayToPage(false)
    return false
}

console.assert(
    newSome(array1, isEven) === true,
    "newSome does not return true when an array of numbers fulfills the condition"
)

console.assert(
    newSome(array1, greaterThanTen) === false,
    "newSome does not return false when an array of numbers does not fulfill the condition"
)

console.assert(
    newSome(array2, isSnake) === true,
    "newSome does not return true when an array of strings fulfills the condition"
)

console.assert(
    newSome(array2, isChicken) === false,
    "newSome does not return true when an array of string does not fulfill the condition"
)

function newFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            displayToPage(i)
            return i
        }
    }
    displayToPage(-1)
    return -1
}

console.assert(
    newFindIndex(array1, isEven) === 1,
    "newFindIndex does not return correct index of array of numbers"
)

console.assert(
    newFindIndex(array1, greaterThanTen) === -1,
    "newFindIndex does not return -1 with array of numbers"
)

console.assert(
    newFindIndex(array2, isSnake) === 3,
    "newFindIndex does not return correct index with array of strings"
)

console.assert(
    newFindIndex(array2, isChicken) === -1,
    "newFindIndex does not return -1 with array of strings"
)

//callback function

function addByTwo(element) {
    return element + 2
}

function newMap(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    displayToPage(newArray)
    return newArray
}

console.assert(
    JSON.stringify(newMap(array1, addByTwo)) === JSON.stringify([3, 4, 5, 6, 7]),
    "newMap does not return correct array"
)

console.assert(
    JSON.stringify(newMap(array2, addByTwo)) === JSON.stringify(["dog2", "cat2", "bird2", "snake2", "turtle2"]),
    "newMap does not return correct array"
)

function newFilter(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i])
        }
    }
    displayToPage(newArray)
    return newArray
}

console.assert(
    JSON.stringify(newFilter(array1, isEven)) === JSON.stringify([2, 4]),
    "newFilter does not return correct array with array of numbers"
)

console.assert(
    JSON.stringify(newFilter(array2, isSnake)) === JSON.stringify(["snake"]),
    "newFilter does not return correct array with array of string"
)