// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  

var name = "Meri";



function names() {
    //fix the errors
    let firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    //let firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;

}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10  =" + "x = " + x;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1   =" + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Siamese", "Maine Coon", "Tabby"];
    document.getElementById("array").innerHTML = cats;

}