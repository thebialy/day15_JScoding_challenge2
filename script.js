/////////////////////////////////
// freeCodeCamp JS Challenges //
///////////////////////////////

// Challenge 1
// Return Largest Numbers in Arrays

const largestOfFour = (arr) => {
    const max = []
    
    for (let i=0; i < arr.length; i++) {
        let currentMax = arr[i][0]
        for(let j=0; j < arr[i].length; j++) {
            let currentNum = arr[i][j]
            if(currentNum >= currentMax) {
                currentMax = currentNum
            }
        }
        max.push(currentMax)
    }
    console.log(max)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18,26], [32, 35, 37, 39], [1000, 1001, 857, 1]])


// Challenge 2
// Confirm the Ending

const confirmEnding = (str, target) => {
    if(str.endsWith(target)) {
        console.log(true) ;
    } else {
        console.log(false)
    }
}

confirmEnding("Bastian", "n")
confirmEnding("Connor", "n")

// Challenge 3
// Repeat a string repeat a string

const repeatStringNumTimes = (str, num) => {
    if (num < 0){
        return ""
    } else {
        return str.repeat(num)
    } 
}

console.log(repeatStringNumTimes("abc", 10))