// var fruits = ["apple","mango","banana","kiwi"]
// console.log(fruits[3]);
// fruits[3] =  "cherry";
// console.log(fruits)

//array can store any type of data

var arr = ["apple", 50, true, null, { name: "abc" }, function () { console.log("fun") }]
// we can access any data by using index
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4].name)
// console.log(arr[5]()); 
arr[5]();                  


// 1st method

// convert Arrray into string

// we use toString method

// example

var arr = ["apple", "mango", "Kiwi", "banana", "Grapes"]
console.log(arr.toString());


//if we want to convert array to   string   separated by special charachter then we have one method i.e. join

console.log(arr.join("*"));
console.log(arr.join(" "));
console.log(arr.join("+"));

// 2nd method
// if we want to remove last element from an array then there is one method

// Pop()
var arr = ["apple", "mango", "Kiwi", "banana", "Grapes"]
console.log(arr.pop());
console.log(arr);
console.log(arr.pop());
console.log(arr);


// 3rd method
// if we want to add last element from an array then there is one method

// Push()
var city = ["Bhilwara", "Jaipur", "Udaipur", "Chittor", "Jodhpur"]
city.push("Banglore");
console.log(city);
city.push("Pune");
console.log(city);

//4th method 
//if we want to remove an element from the begining of an array
// shift();

var cars = ["audi", "mercedes", "fortuner", "jaguar", "baleno"];
console.log(cars);
console.log(cars.shift());
console.log(cars);


//5th method 
//if we want to insert an element at the begining of an array 
// unshift()method

var phones = ["Samsung", "Iphone", "Realme", "Poko"];
phones.unshift("Mi");
console.log(phones);


//* important 
//we dont use delete keyword becz it give undefined holes in an array
var phones = ["Samsung", "Iphone", "Realme", "Poko"];
delete phones[2];

console.log(phones);

// 6th method
//if we want to add and remove a element from an array from any index then 

//splice method

// SyntaxError
// Array.splice(where an element should be added(index) , how many element want to remove  , want to add something)

var arr = ["apple", "mango", "Kiwi", "banana", "Grapes"]


// arr.splice(2,0,"chiku","pomegranate")
// console.log(arr);

// arr.splice(0,5,"chiku","pomegranate")
// console.log(arr);

arr.splice(2, 2);
console.log(arr);

arr.splice(1, 5);
console.log(arr);


//7th method 
// using this method we can use slice to remove the element without leaving holes in the array
// it do not change in existing array 
//it will give new array

// Array.slice(starting PointerEvent, ending point)
// here end point is upto the end it will not include end point 


var arr = ["apple", "mango", "Kiwi", "banana", "Grapes"]

var slicedArray = arr.slice(0, 3);
console.log(slicedArray);
console.log(arr);

// 8 th method  
//if we want to merge two array 
//concat method is present

var arr = ["apple", "mango", "Kiwi"]
var arr1 = ["banana", "Grapes"]
var arr2 = ["papaya"]

var mergedArray = arr.concat(arr1,arr2,50,"helloo");
console.log(mergedArray);


// in concatination we can concat any no. of array , value , numbers , strings


//9th method 
// if we want to sort an array
// then we have an method
// sort() method

var arr = ["apple", "mango", "kiwi", "banana", "grapes"]
arr.sort();
console.log(arr);
console.log(arr.reverse())

// but
//but

var arr=[40,50,100.23,85]
console.log(arr.sort);

// we can not sort array consist of numbers sort method work only on string it treats number as string

// to sort number

var arr=[40,50,100,23,85]
console.log(arr.sort(function(a,b){return a-b})) // it will sort in ascending order

var arr=[40,50,100,23,85]
console.log(arr.sort(function(a,b){return b-a})) // it will sort in descending order


//10 th method

// if we want to get index of particular element
// we have indexOf method


var arr = ["apple", "mango", "kiwi", "banana", "grapes"]

console.log(arr.indexOf("mango")) // it will give index

// if we want to get indexOf that element which is not present in an array 
//then it will give -1 as a output

console.log(arr.indexOf("alloobada"))  // output -1

//if an element occur more than one time
//and want to get index of that element 
//than in output we get index of that element which will come first

var arr = ["apple", "mango", "kiwi", "banana", "kiwi", "grapes" , "kiwi"]
console.log(arr.indexOf("kiwi")) // it will give index 2 becz at two kiwi occurs first tym



// but hume specific position se search krna he to

console.log(arr.indexOf("kiwi",3)) //  3 se kiwi search krna start krega

//but if we want last value kb aa rhi he\

console.log(arr.lastIndexOf("kiwi"));


// 11th method
// if we want to iterate and got value as well as index then what will do?

// their is one method

// for each method

var arr = ["apple", "mango", "kiwi", "banana", "grapes"];
arr.forEach(function( value ,index){console.log(value,index);});


var a = [1,2,3,4]

var squareArray = [];

a.forEach(function(value,index)
{squareArray.push(value+5)}
);
console.log(squareArray);

//12th method
//map method

//it works same as a forEach but it create a separate array do  not change in existing array

var arr = [1,2,3,4,5]
var mapArray = arr.map(function(value)
{return value*2});

console.log(arr);
console.log(mapArray);


//13th method
//filter method
//it also create a new array with array elemnt that pass some test

var arr=[1,20,56,89,300,56,45,78,63,439,753,953,754]

var filteredArray = arr.filter(function(value)
{ return value<=100});

console.log(filteredArray);


//14th method

//runa a sfunction o each array element 
//but it always produces single value

var ar =[2,1,4,3,5]
var reduced = ar.reduce(redFun);
console.log(reduced);
function redFun( total,value)
{
    return total+value;
}











