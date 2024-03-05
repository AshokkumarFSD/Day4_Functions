
// odd number in array - Anonymous function
let oddNumAnonymous = function (givenArray) {
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] % 2 !== 0) {
            console.log(givenArray[i]);
        }
    }
}
oddNumAnonymous([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// odd number in array - IIFE function
(function (givenArray) {
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] % 2 !== 0) {
            console.log(givenArray[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);




// Convert all the strings to title caps in a string array - Anonymous
let stringCaps = function (stringArray) {
    let resultArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let singleWord = stringArray[i];
        resultArray.push(singleWord.toUpperCase());
    }
    console.log(resultArray);
}
stringCaps(["JavaScript", "Html", "Css"]);

// Convert all the strings to title caps in a string array - IIFE
(function (stringArray) {
    let resultArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let singleWord = stringArray[i];
        resultArray.push(singleWord.toUpperCase());
    }
    console.log(resultArray);
})(["JavaScript", "Html", "Css"]);





// Sum of all numbers in an array - Anonymous
let sumOfNumberAnonymous = function (numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    console.log("Sum is : ", sum);
}
sumOfNumberAnonymous([1, 2, 3, 4, 5]);

// Sum of all numbers in an array - IIFE
(function (numArray) {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    console.log("Sum is : ", sum);
})([1, 2, 3, 4, 5]);



// Return all the prime numbers in an array - Anonymous
let primeNumbersAnonymous = function (numArray) {
    let primeNumbers = [];
    for (let i = 0; i < numArray.length; i++) {
        let getNum = numArray[i];
        let isPrime = true;
        for (let j = 2; j < getNum; j++) {
            if (getNum % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numArray[i]);
        }
    }
    return primeNumbers;
}
let primeNumberResult = primeNumbersAnonymous([1,2,3,4,5,6,7,8,9,10]);
console.log(primeNumberResult);


// Return all the prime numbers in an array - IIFE
let primeNumberResultIIFE = (function (numArray) {
    let primeNumbers = [];
    for (let i = 0; i < numArray.length; i++) {
        let getNum = numArray[i];
        let isPrime = true;
        for (let j = 2; j < getNum; j++) {
            if (getNum % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numArray[i]);
        }
    }
    return primeNumbers;
})([1,2,3,4,5,6,7,8,9,10]);
console.log(primeNumberResultIIFE);





// Return all the palindromes in an array - Anonymous
let palindromesInArray = function(stringArray)
{
    let resultArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let singleWord = stringArray[i].toLowerCase();
        let reverseStr = singleWord.split("").reverse().join("").toLowerCase();
        if(singleWord == reverseStr)
        {
            resultArray.push(stringArray[i]);
        }
    }
    return resultArray;
}
console.log(palindromesInArray(["Madam","Sun","rotator","Wow"]));

// Return all the palindromes in an array - IIFE
let palindromesInArrayIIFE = (function(stringArray)
{
    let resultArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let singleWord = stringArray[i].toLowerCase();
        let reverseStr = singleWord.split("").reverse().join("").toLowerCase();
        if(singleWord == reverseStr)
        {
            resultArray.push(stringArray[i]);
        }
    }
    return resultArray;
})(["Madam","Sun","rotator","Wow"]);
console.log(palindromesInArrayIIFE);



// Median of two sorted arrays of the same size. - Anonymous
// passing two sorted array as input
let medianOfSortedArray = function(numArray1,numArray2)
{
    let medianOfArray1 = numArray1[Math.floor(numArray1.length/2)];
    let medianOfArray2 = numArray2[Math.floor(numArray2.length/2)];
    return (medianOfArray1+medianOfArray2)/2;
}
console.log(medianOfSortedArray([1, 12, 15, 26, 38],[2, 13, 17, 30, 45]));


// Median of two sorted arrays of the same size. - IIFE
// passing two sorted array as input
let medianOfSortedArrayIIFE = (function(numArray1,numArray2)
{
    let medianOfArray1 = numArray1[Math.floor(numArray1.length/2)];
    let medianOfArray2 = numArray2[Math.floor(numArray2.length/2)];
    return (medianOfArray1+medianOfArray2)/2;
})([1, 12, 15, 26, 38],[2, 13, 17, 30, 45]);

console.log(medianOfSortedArrayIIFE);


// Remove duplicates from an array - Anonymous
let removeDuplicatesInArray = function(givenArray)
{
   let resultObj = {}; 
   for(let i=0;i<givenArray.length;i++)
   {
     let givenVal = givenArray[i];
     if(resultObj.hasOwnProperty(givenVal))
     {
       resultObj[givenVal] = resultObj[givenVal] + 1;
     }
     else{
        resultObj[givenVal] = 1;
     }
   }
   return Object.keys(resultObj);
}
console.log(removeDuplicatesInArray(["Ashok","Karan",3,4,"Ashok",3,5,4,3]));

// Remove duplicates from an array - IIFE
let removeDuplicatesInIIFE = (function(givenArray)
{
   let resultObj = {}; 
   for(let i=0;i<givenArray.length;i++)
   {
     let givenVal = givenArray[i];
     if(resultObj.hasOwnProperty(givenVal))
     {
       resultObj[givenVal] = resultObj[givenVal] + 1;
     }
     else{
        resultObj[givenVal] = 1;
     }
   }
   return Object.keys(resultObj);
})(removeDuplicatesInArray(["Ashok","Karan","Ashok",3,5,4,3]));
console.log(removeDuplicatesInIIFE);

// Rotate an array by k times - Anonymous
let rotateArray = function(givenArray,noOfTimes)
{
    if(noOfTimes<1)
    {
        return givenArray;
    }
    else{
        let singleShift = [];
        singleShift.push(givenArray[givenArray.length-1]);
        for(let i=0;i<givenArray.length-1;i++)
        {
            singleShift.push(givenArray[i]);
        }
        return rotateArray(singleShift, noOfTimes - 1);
    }
}
let resultAnonymous = rotateArray([1,2,3,4,5],2);
console.log(resultAnonymous);


// Rotate an array by k times - IIFE
let rotateArrayIIFE = (function(givenArray,noOfTimes)
{
    if(noOfTimes<1)
    {
        return givenArray;
    }
    else{
        let singleShift = [];
        singleShift.push(givenArray[givenArray.length-1]);
        for(let i=0;i<givenArray.length-1;i++)
        {
            singleShift.push(givenArray[i]);
        }
        return rotateArray(singleShift, noOfTimes - 1);
    }
})([1,2,3,4,5],2);
console.log(rotateArrayIIFE);




// odd number in array - Arrow function
let oddNumberUsingArrow = (givenArray) =>  {
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] % 2 !== 0) {
            console.log(givenArray[i]);
        }
    }
};
oddNumberUsingArrow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);




// Convert all the strings to title caps in a string array - Arrow Function
let stringCapsUsingArrow = (stringArray) => {
    let resultArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let singleWord = stringArray[i];
        resultArray.push(singleWord.toUpperCase());
    }
    console.log(resultArray);
}
stringCapsUsingArrow(["JavaScript", "Html", "Css"]);



// Sum of all numbers in an array - Arrow function
let sumOfNumberUsingArrow = (numArray) => {
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    console.log("Sum is : ", sum);
}
sumOfNumberUsingArrow([1, 2, 3, 4, 5]);


// Return all the prime numbers in an array - Arrow function
let primeNumbersUsingArrow = (numArray) => {
    let primeNumbers = [];
    for (let i = 0; i < numArray.length; i++) {
        let getNum = numArray[i];
        let isPrime = true;
        for (let j = 2; j < getNum; j++) {
            if (getNum % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(numArray[i]);
        }
    }
    return primeNumbers;
}
console.log(primeNumbersUsingArrow([1,2,3,4,5,6,7,8,9,10]));

// Return all the palindromes in an array - Arrow
let palindromesInArrayUsingArrow = (stringArray) =>
{
    let resultArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let singleWord = stringArray[i].toLowerCase();
        let reverseStr = singleWord.split("").reverse().join("").toLowerCase();
        if(singleWord == reverseStr)
        {
            resultArray.push(stringArray[i]);
        }
    }
    return resultArray;
}
console.log(palindromesInArrayUsingArrow(["Madam","Moon","Sun","rotator","Wow"]));