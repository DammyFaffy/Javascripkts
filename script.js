
//Number 1
function reverseArray (str){
    return str.split('').reverse().join('')
}

let reversed = reverseArray("Damilola")
console.log(reversed)



//Number 2
function count(characters){
    return characters.length
}

let countChar = count("Damilola")
console.log (countChar);

console.log(count("object"));


//Number3
function capitalize(words){
    return words.charAt(0).toUpperCase() + words.slice(1)
}

console.log(capitalize("abject"));


//Number 4
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([ 1, 2, 3, 4, 5 ]))

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([ 1, 2, 3, 4, 5 ]))


//Number 5

function sumOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfArray([ 1, 2, 3, 4, 10 ]));


//Number 6

function filterArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filterArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]));



//Number 7

function factorialOfNumber(num){
    if (num === 0){
        return 1;
    }
    return num * factorialOfNumber(num - 1);
}

console.log(factorialOfNumber(5));


//Number 8

function primeNumbers(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(primeNumbers(4));


//Number 9

function fibonacci(num){
let fibonacciSequence = [0, 1]
    

    for (let i = 2; i < num; i++) {

        let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    
    return fibonacciSequence;
}

console.log(fibonacci(10));


