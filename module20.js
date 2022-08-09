
//------------------------------------------------------------
//----------------------- Module 20 --------------------------
//------------------------------------------------------------

//(Practice Problem: 1) Write a function that will take hour as the input parameter and will
// convert it into minutes and will return the result in minutes.
function minutesConverter(){
    let result = hour * 60;
    return result;
}
let hour = 6;
let mins = minutesConverter(hour);
console.log(mins);



//(Practice Problem: 2) Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.
function leapYearFinding(){
    let leapArray = [];
    for(let i = 0; i < years.length; i++){
        if(years[i] % 4 == 0 && years[i] % 100 !==0){
            leapArray.push(years[i]);
        }
    }
    return leapArray;
}
let years = [2023, 2024, 2025, 2028, 2030];
let leapYear = leapYearFinding(years);
console.log(leapYear);



//(Practice Problem: 3) Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.
function oddArray(){
    let oddNum = [];
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        if(element % 2 !== 0){
            oddNum.push(element);
        }
    }
    return oddNum;
}
function sumOddNum(oddArrayNum){
    let sum = 0;
    for(let i = 0; i < oddArrayNum.length; i++){
        sum += oddArrayNum[i];
    }
    return sum;
}
let array = [5, 7, 8, 10, 45, 30];
let oddArrayNum = oddArray(array);
let sum = sumOddNum(oddArrayNum);
console.log(sum);



//------------------------------ প্রাকটিস চ্যালেঞ্জ-৩ টা: ------------------------------//

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
function leapYear(){
    if(year % 4 == 0 && year % 100 != 0){
        return true;
    }
    else{
        return false;
    }
}
const year = 2023;
console.log(leapYear(year));


// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
function myAge(){
    if(age % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
const age = 25;
console.log(myAge(age));


// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
function minutesConverter(){
    let result = hour * 60;
    return result;
}
let hours = 6;
let minutes = minutesConverter(hour);
console.log(minutes);


// ৪. মনে করো তোমার ৪ ঘণ্টা লাগবে ঢাকাই পোঁছতে। তুমি এখন এ ভ্যালু ৪ কে একটা ফাংশনে পাঠাবা এবং সে ফাংশন ভেলু ৪ কে second এ convert করে তোমাকে রিটার্ন করবে।
function hour2sec(){
    let sec = (totalHours * 60) * 60;
    return sec;
}
let totalHours = 4;
console.log(hour2sec(totalHours));