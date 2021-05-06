// there are two types of Scope
//  1. Global
//  2. Local

// 1. Global
// If we declare a variable outside of any function 
// or {}  then that variable is accessible everywhere in code

//Example

let food = "GarlicBread";
function ILoveFood()
{
    console.log(food);
}
ILoveFood();

// 2. Local 
// it is further divided into two parseInt

// 2.1 functional scope
// 2.2 block scope

    // 1. functional scope
    // if we declare a variable inside a function than 
    // that variable is accessible within that function only

    function greeting()
    {
      var sayHii ="Hello";
        console.log(sayHii);
    }
    greeting()
    // console.log(sayHii);//it will give an error


//block scope
// if we declare a variable within curly braces or floor braces
// with const and let only then it will be accessible 
// within that block only

{
    let  firstName = "Harshi";
    const LastName = "khandelwal";
    var age = 21;
    console.log(firstName,LastName, age)
}
console.log( age)
// it means var keyword is accesible within and outside of
// {} these brackets or block



// Example

// function myName()
// {
//     var chits ="abc";
// }
// function greet()
// {
//     myName();
//     console.log(chits);
    
// }
// greet()


//it will give error becz each fction has its own scope


function kids()
{
    var name= "emii"
    function parent ()
    {
        console.log(name);
       
    }
    return parent;

}
var caal = kids();
console.log(caal);
caal();

var batch = "sixth";
function classes()
{
    var batch = "seventh";
    function subClass()
    {
        var batch = "eight";
        console.log(batch);
    }
    subClass();
}
classes();




// Another concept

// closure or nested scope

// when one function is defined within another function

// In this case inner function can access variable scope of the outer function
// these nesting of function also result in
// nesting of scope

// function outer()
// {
//    var name = "Archii";
// function inner()
// {
// console.log(name);
// }
// inner();
// }
// outer();

//it will give utput wether var const or let 
// it creates closure

function superOuter(){
    var name = "Archii";
function outer()
{
   var tests="test"
function inner()
{
console.log(name,tests);
}
inner();
}
outer();

}
superOuter();


