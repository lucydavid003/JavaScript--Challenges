//sum of positives//

function sumOfPositives(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num > 0) {
      sum = sum + num;
    }
  }
  return sum;
}

console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
console.log(sumOfPositives([-3, -6, 7, -8]));

//Find Maximum value//

function findMax(arr2) {
  let max = arr2[0];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 5]));

//Election Winner//
const findWinner = (object) => {
  let winner = object[0];

  for (let i = 1; i <= object.length - 1; i++) {
    if (object[i].votes > winner.votes) {
      winner = object[i];
    }
  }
  return winner;
};
const candidates = [
  { name: "Alice", votes: 80 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 25},
];
console.log(findWinner(candidates));


//Find longestword//

function findLongestWords(arrOfString) {
  let longestWord = "";
  let len = 0;
  for (let i = 0; i < arrOfString.length; i++) {
if (len < arrOfString[i].length){
        len = arrOfString[i].length;
        longestWord = arrOfString[i]
    }
  }
  return longestWord;
}

console.log(findLongestWords(["apple", "banana", "pear", "grapefruit", 
    "mylovelyorandes"]));

    //count properties//

    function countProperties(item) {
        

        console.log(Object.keys(item).length)
    }
    countProperties({ name: "Alice", age: 25, city: "Paris" })

    //Filter by Length//
    function filterByLength(arr,minLength){
        // arr.filter((item)=> item.length >= minLength)
        console.log(arr.filter((item)=> item.length >= minLength))
    }
 filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)

 //Sum of Even Numbers//
 function sumOfEvenNumbers(array){
    
    let filteredEvenNumbers =array.filter((item)=>item%2 ===0)
     let sum = 0;
  for (const num of filteredEvenNumbers){
    if (num > 0) {
      sum = sum + num;
    

    }

}

return sum
 }
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]))

// Difference Between Sum of Even and Odd Numbers//

function differenceEvenOdd(arr3){
    let filteredEven =arr3.filter((item)=>item%2 ===0)
    let filteredOdd =arr3.filter((item)=>item%2 ===1)
    let sumEven =0;
    let sumOdd =0;
    for (const num of filteredEven){    
    if (num > 0) {
      sumEven = sumEven + num;}
    }
for (const num of filteredOdd){    
    if (num > 0) {
      sumOdd = sumOdd + num;}
    }
      return sumEven - sumOdd

}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))

// Count Truthy//
const countTruthy = (object) => {
  let count = 0;
  for (let key in object) {
    if (object[key]) {
      count = count + 1;
    }
  }
  return count;
};
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));




//average numbers//
const average = (arr7) => {
  let sum = 0;
  for (let i = 0; i < arr7.length; i++) {
    sum = +arr7[i];
  }
  let average = sum / arr7.length;
  return average;
};

console.log(average([2, 4, 6, 8]));

//Linear Search//
function linearSearch (arra4,value){
    for (let i=0; i<arra4.length; i++){
        if (arra4[i]===value){
            return i
        }

    }
    return -1
}
console.log(linearSearch([5, 3, 7, 1, 4], 9))

//Reverse linear//

function reverseLinearSearch (arra5,value){
    let index = []
    for (let i=0; i<arra5.length; i++){
        if (arra5[i]===value){
            index.push(i)
             
        }

    }
    return index.pop()||-1
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10) )

//Linear Search All Indices//
function linearSearchAll (arra6,value){
    let index = []
    for (let i=0; i<arra6.length; i++){
        if (arra6[i]===value){
            index.push(i)
             
        }

    }

    return index||[]
}

console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7))
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))

// Count Occurrences//
const countOccurrences = (arr8) => {
  const countOfObjectS = {};

  for(let i = 0; i < arr8.length; i++){
    let item =arr8[i];
    if (countOfObjects[item]) {
      countOfObjectS[item] += 1;
    } else {
      countOfObjectS[item] = 1;
    }
  }
  return countOfObjectS;
};
console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));


//Remove Duplicates//
const removeDuplicates = (arr9) => {
  const noDuplicate = [];
  for (let i = 0; i < arr9.length; i++) {
    if (!noDuplicate.includes(arr9[i])) {
      noDuplicate.push(arr9[i]);
    }
  }
  return noDuplicate;
};
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// Most Frequent//
const mostFrequent = (arr10) => {

  let maximumcount = 0;
  let mostFrequent =[];
  

  for (let i = 0; i < arr10.length; i++) {
    let count = 0;
    
    for (let j = 0; j < arr10.length; j++) {
      if (arr10[i] == arr10[j]) {
        count++;
      }
      if (count > maximumcount) {
        maximumcount = count;
        mostFrequent = arr10[i];
      }
    }
  }
  return mostFrequent;
};
console.log(
  mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));



