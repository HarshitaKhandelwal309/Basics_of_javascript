// Loops in Javascript 
// easy way to do something repeatedly

// Syntax
// for(intialization; testing condition ; increament/decreament)
// {
//     statement
// }

//1 example

for (var i = 0; i < 20; i = i + 2) {
    console.log(i);
}
console.log(i);


//2 example 

for(var i = 10 ; i>-1;i--)
{
    console.log(i);
}


//3 example

var fruits = ["apple", "mango","kiwi","banana"]
for(var i=0 ;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}

//for-of loop
// if we want to iterate iterable
// syntax:
// for(variable of iterable)
// {
//     statement
// }

//4 example
var fruits = ["apple", "mango","kiwi","banana"]

for(var i of fruits)
{
    console.log(i);
}

//5 example

var name = "harshiii";
for(var n of name)
{
    console.log(n);
}


//additional thing
var a = 10;
console.log(a);
    console.log(a+1) ;
// a++;
console.log(a++);


//for-in loop
// provide similar way to iterate through the properties of the object

// syntax:
// for(variable in object)
// {
//     statement
// }

//6 example
 
var employee = {"firstName": "harshi", "lastName": "Khandelwal","age":21 }
console.log(employee)
for(var i in employee)
{
    console.log(i)
}

//7 example
var fruits = ["apple", "mango","kiwi","banana"]

for(var i in fruits)
{
    console.log(i);
}

//for in loop iterates through properties or indexes