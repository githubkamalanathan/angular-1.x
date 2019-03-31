//1. The methods are defined in global namespace. Hence the method got overloaded.
// function utility(){
//     console.log("Utility A function.");
// }

// utility();

// function utility(){
//     console.log("Utility B function.");
// }

// utility();

//2. To overcome the above problem, use domain specific method.
// var com = {};
// com.mydomain = {};
// com.mydomain.myModuleA = {};


// com.mydomain.myModuleA.utility = function () {
//     console.log("Utility A function.");
// }

// com.mydomain.myModuleA.utility();

// function utility() {
//     console.log("Utility B function.");
// }

// utility();

//3. Standard way to express  & invoke self executable functions. Immediately Invoked Function Expression
(function () {
    var com = {};
    com.mydomain = {};
    com.mydomain.myModuleA = {};

    com.mydomain.myModuleA.utility = function () {
        console.log("Utility A function.");
    }

    com.mydomain.myModuleA.utility();

    function utility() {
        console.log("Utility B function.");
    }

    utility();
}());