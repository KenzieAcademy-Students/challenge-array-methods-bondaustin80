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