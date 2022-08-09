// // ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

// let array1 = [48, 22, 85, 56, 32];
// let smallestInArray = Math.min(...array1);
// console.log(smallestInArray);


// // ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  
// let a = 5;
// let b = 9;
// let c = 4;
// console.log(Math.min(a, b, c));


// // ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।
// function avarageNum(array2){
//     let sum = 0;
//     for(let i = 0; i < array2.length; i++){
//         sum+= array2[i];
//     }
//     let avg = sum / array2.length;
//     return avg;

// }
// let array2 = [48, 22, 85, 56, 32];
// let avarage = avarageNum(array2);
// console.log(Math.floor(avarage));


// // ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
// function areaOfRectangle(){
//     let area = hight * length
//     return area;
// }
// let hight = 5;
// let length = 6;
// let RectangleArea = areaOfRectangle(length, hight);
// console.log(RectangleArea);


// // ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে secondond largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

// function secondLargest(){
//     let largest = array3[0];
//     let = secondLargest = 0;

//     for(let i = 0; i < array3.length; i++){
//         let element = array3[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     for(let i = 0; i < array3.length; i++ ){
//         if(array3[i] > secondLargest && array3[i] < largest){
//             secondLargest = array3[i];
//           }
//     }
//     return secondLargest;
// }
// let array3 = [48, 22, 85, 56, 32];
// const secondLargestNum= secondLargest(array3);
// console.log(secondLargestNum);


//-------------------- Home Work --------------------

// Problem-1: White a function and find The lowest number of an array.
function findLowestNumber(){
    let number = array4[0];
    for(let i = 0; i < array4.length; i ++){
        let element =  array4[i];
        if(element < number){
            number = element;
        }
    }
    return number;
}   

let array4= [45, 24, 36, 13, 85, 7, 69];
const lowestNumber = findLowestNumber(array4);
console.log(lowestNumber);

// Problem-2: White a code with string and reverse the string.
function stringReverse(){
   let reversedString = str.split(' ');
   let reverse = [];
   for(let i = reversedString.length-1; i >= 0; i--){
    reverse.push(reversedString[i]);
   }

   return reverse;
}
let str = 'I am a Web Developer';
let reversed = stringReverse(str);
console.log(reversed);