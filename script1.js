/*
commented out for previous lecture
let hs = 'amazing'
//if (hs == 'amazing') alert('Henry is an amazing person');
console.log(40 + 6 + 7 - 10);
console.log("Debby is my gfrnd");
let firstName = "Deborah";
let lastName = "Allucard"
console.log(firstName, lastName);
let country = 36272;
let continent = 46282984;
let population = 489573754;
console.log(country, population, continent);
*/
// true;
// let javascri = true;
// console.log(javascri)
// console.log(typeof true)
// console.log(typeof 24);
// /* const is to make a variable that cannot be changed*/
// const birthyear = 1997;

// const now = 2020;
// const ageHenry = now - 1997
// console.log(ageHenry)
// const ageToDrink = 21;
// if (ageHenry > ageToDrink) console.log("You can drink")
// if (ageHenry < ageToDrink) console.log("You cannot drink")

// test code 1
const markT1mass = 78;
const markT1height = 1.69;
const johnT1mass = 95;
const johnT1height = 1.95;
const bmiMarkT1 = markT1mass / markT1height ** 2;
const bmiJohnT1 = johnT1mass / johnT1height ** 2;
console.log(bmiJohnT1);
console.log(bmiMarkT1);
if (bmiMarkT1 > bmiJohnT1) console.log("Mark has a higher bmi")
else console.log("John has a higher bmi")
const markT2mass = 95;
const markT2height = 1.88;
const johnT2mass = 85;
const johnT2height = 1.76;
const bmiMarkT2 = markT2mass / markT2height ** 2;
const bmiJohnT2 = johnT2mass / johnT2height ** 2;
console.log(bmiMarkT2);
console.log(bmiJohnT2);
if (bmiMarkT2 > bmiJohnT2) console.log("Mark has a higher bmi")
if (bmiMarkT2 < bmiJohnT2) console.log("John has a higher bmi")

const name = "Henry"
const job = "student"
const bornyear = "1997"
console.log("Hello my name is" + " " + name + "." + " " + "I am a" + " " + job + " " + "and I was born in" + " " + bornyear)
//"`" this is for making the string with spaces.. eg:
const henry67 = `My name is ${name}, a ${job} at Lehman college and I was born in ${bornyear}`
console.log(henry67);