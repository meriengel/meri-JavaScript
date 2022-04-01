let contacts = [];

function addme() {
    // get your form items, create an object
    // and add to contacts
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;


    let contact = {};
    contact.fname = fname;
    contact.lname = lname;
    contact.email = email;
    contact.phone = phone;

    let myJSON = JSON.stringify(contact);
    document.getElementById("json-value").innerHTML = myJSON;
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";


}