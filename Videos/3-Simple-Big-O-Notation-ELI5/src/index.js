
console.log('3-Simple-Big-O-Notation-For-Dummies');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(1) : Constant Time
const arr1Index = arr1[3];
const arr2Index = arr2[7];

// O(N) : Linear Time
let totalArr1 = 0;
let totalArr2 = 0;
for (let i = 0; i < arr1.length; i++) {
    totalArr1 += arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    totalArr2 += arr2[i];
}

// O(N^2) : Quadratic Time
for (let i = 0; i < arr1.length; i++) {
    var outerItem = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
        var innerItem = arr2[j];
        let someSum = outerItem + innerItem;
    }
}