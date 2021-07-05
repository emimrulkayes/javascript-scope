// <== Global scope

"use strict" // if you want only you use your js so write "use strict" otherwise window use her global js.
// parent 
var x = 25; // parent scope
// child 
function myFunction() { //child scope start
    var x = 10;
    console.log(`${x} from myFunction()`);
} //child scope end

myFunction();

console.log(x);


if (true) {
    var myVar = "this is global variable";
}
console.log(myVar);

if (true) {
    let myLetVar = "this is block scope variable";
    myLetVar = "let variable updated"; //we can reasign let.


    console.log(myLetVar);
}

if (true) {
    // const myCon = "this is constant";
    // myCon = "update constant";
    const myF = {
        name: 'Abdullah',
        age: '25 years',
        NickName: 'Mamun'
    };
    myF.age = '20'; // we can update value but can't reasign.
    console.log(myF);
}



// JavaScript closure  

function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function() {
        return balance;
    };
}

var account = bankAccount(50000);
console.dir(account);

// asyncronus 
function async() {
    var a = 50;

    setTimeout(() => {
        console.log(a);
    }, 3000);
}

async();