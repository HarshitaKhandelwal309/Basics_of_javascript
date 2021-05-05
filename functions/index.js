// 8.Functions

function functionName() {
    //statement
}
functionName();// call function

// function declaration contain 3 parts  1 - name  2 . parameter  3 . statement

// 1.Normal Function

function add(num1, num2) {
    console.log(num1, num2);
    var result = num1 + num2;
    console.log(result);

}
add(67, 51);


// 2Return Function


function add(num1, num2) {
    console.log(num1, num2);
    var result = num1 + num2;
    return result;
    console.log("After return it will not execute further steps");// this step will not be executed
}
console.log(add(56, 568));
//  or
var resltAnswer = add(6, 9);
console.log(resltAnswer);


function agess(val) {
    if (val >= 18) {
        return "You can vote";
    }

    return "Ghr pe betho";
}

console.log(agess(5));



var foo = "foo1";
function bob() {
    var foo = "foo2";
    console.log(foo);
}
bob();
console.log(foo);

console.log(bob);



// 4.IIFE (Immediate function invoke expression)

(function bob() {
    var foo = "foo1";
    console.log(foo);
})();


// 5.Anonymnous function : A function without name

(function () {
    var foo = "foo1";
    console.log(foo);
})();



// 6 . pure function : it is same as normal function but it is logical : by giving same set of input will always get same output



function cal(val) {
    console.log(val);
    var result = val + 2;
    return result;

}

console.log(cal(2));


// 7 ImpureFunction : for the given set of input will always get different output

function calculate(val) {
    console.log(val);
    var result = (val + Math.random() * 100);
    return result;

}

console.log(calculate(2));


// 8 Recursive function
//  callitself from within its definition

// function hey()
// {
//     console.log("hello");
//    hey();   this function will run infinitely times to stop this we have to mention some conditions
// }
// hey();


function fun(val) {
    console.log("hello", val);
    if (val > 0) {
        val = val - 1;
        fun(val);
    }

}
fun(2)


// 9 Higher order function 
// a function that take another function as aparameter


function archit(para) {
    console.log(para);
    console.log("Hii chiks");
    para();
}

function chinki() {
    console.log("hello chits");
}

archit(chinki);