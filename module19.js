////////////////////////////   MODULE - 19   ////////////////////////////


// 1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.
function foo(){
    console.log('foo');
    bar()
}
foo()

function bar(){
    console.log('bar')
}


// 2) Write a function called make_avg() which will take an three integers and return the
// average of those values.
function make_avg(a, b, c){
    var total = a + b + c;
    var avg = total / 3;
    return avg;
}
var intAvg = make_avg(25, 30, 45);
console.log('Average of 3 Integers is :', intAvg.toFixed(2));


// 3) Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.
function make_avg(intArray, intLength){
    let total = 0;
    for(var i = 0; i < intLength; i++){
        total += intArray[i];
    }
    let avg = total / intLength;
    return avg;
}
let intArray = [50, 36, 87, 53, 55, 51];
let intLength = intArray.length;
console.log('The Avarage of the array is :',make_avg(intArray, intLength).toFixed(2));


// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

function odd_even(intValue){ // ● No return + Has parameter
    let number = intValue % 2;
    if(number == 0){
        console.log(intValue, 'is an even number');
    }
    else{
        console.log(intValue, 'is an odd number');
    }
}
let intValue = 84;
odd_even(intValue)

function odd_even(intValue){ // ● Has return + Has parameter
    let number = intValue % 2;
    if(number == 0){
       return (console.log(intValue, 'is an even number'));
    }
    else{
       return (console.log(intValue, 'is an odd number'));
    }
}



// 5) You are in a hurry to go to your school on time. But when you are crossing the road, the
// traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
// danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
// coloured traffic signal, you should cross the road. So write a JS code, where there is a
// variable called signal. Its value can be green, yellow or red & we will get different activities as
// output depending on the variable. So, hurry up.

const trafficSignal  = 'green';
switch(trafficSignal){
    case 'green':
        console.log('Cross The Road');
        break;
    case 'yellow':
        console.log('Should Stop');
        break;
    case 'red':
        console.log('Maybe in Danger');
        break;
    default:
        console.log('Take Footover');
}

////////////////////// EXTRA PROBLEMS //////////////////////

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
let number = 13;
for(let i = 1; i <= 10; i++){
    const result = i * number;
    console.log(`${number} x ${i} = ${result}`);
}


// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
let squareNumber = 5;
function square(){
    let squareNum = Math.pow(squareNumber, 2);
    return squareNum;
}
console.log('Square Value is :', square())
