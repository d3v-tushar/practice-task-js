//২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
var money = 100000;
if(money >= 80000){
    console.log('I will buy a Mac!! Yeeey');
}
else if(money >= 60000){
    console.log('I will buy a gaming laptop :D');
}
else if(money >= 40000){
    console.log('I will buy Lenovo Yoga :)')
}
else if(money >= 20000){
    console.log('I have to buy a secound hand laptop :/')
}
else{
    console.log('I have to work with Mobile :( ')
}




//২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
var dialouge = "Aske amar mon valo nei"
for(var i = 0; i < 39; i++){
    console.log(dialouge);
}


//২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও। 
for(var i = 58; i <= 98; i++){
    console.log(i);
}


//৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও। 
for(var i = 412; i <= 456; i+= 2){
    console.log(i);
}


//৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও। 
for(var i = 581; i <= 623; i+= 2){
    console.log(i);
}


//৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
var learned = ['HTML5', 'CSS3', 'Bootstrap5', 'Tailwind', 'Javascript'];
for(var i = 0; i < learned.length; i++){
    console.log(learned[i]);
}


//৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও।
var mobiles = ['Nokia', 'Samsung', 'Sony Ericssion', 'Lumia', 'Asus', 'iPhone', 'Xiaomi', 'Realme'];
for(var i= 0; i < mobiles.length; i++){
    console.log(mobiles[i])
}


//৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও।
for(var i = 30; i <= 86; i++){
    if(i == 44){
        break
    }
    console.log(i);
}


//৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। //
var bookPrice = [350, 260, 180, 520, 150, 80, 160, 650, 50];
for(var i = 0; i < bookPrice.length; i++){
    if(bookPrice[i] > 200){
        continue
    }
    console.log(bookPrice[i]);
}