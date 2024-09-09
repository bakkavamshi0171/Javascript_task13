
// [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed().

let arr = [12.345, 67.890, 34.567]
let round = arr.map(ele => Math.round(ele));
console.log(round);

// ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()
let arr2 = ['123abc', '456def', '789ghi']
let parsing = arr2.map(ele=> parseInt(ele));
console.log(parsing);

// [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()
let arr3 = [12, 34.56, 78, 90.12]
let integerOrNot = arr3.filter(ele => (Number.isInteger(ele)));
console.log(integerOrNot);

// ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()
arr4 = ['abc', 123, 'def', 456];
let non = arr4.filter(ele => isNaN(ele));
console.log(non);

// [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()
arr5 = [123.456, 789.012, 345.678];
arr6 =[]
for (let i of arr5){
    arr6.push(i.toPrecision(4));
}
console.log(arr6);

// generate random otp 6 digit num using math.random
function generateOtp(){
    let num = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    // let num = Math.floor( 1 + Math.random()* 900000);
    document.querySelector("#ids-display").innerText = num;

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}