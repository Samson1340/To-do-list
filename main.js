const newItem = document.querySelector("#new-item");
const btnSubmit = document.querySelector("#submit");
const form = document.querySelector("#form");
const listItems = document.querySelector(".list-items");
const errorMsg = document.querySelector(".error-msg");


// On submit validation part 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = newItem.value;
    newItem.value = "";

    if(!checkValue(value)){

        errorMsg.innerHTML = "The new item not be empty";
        errorMsg.classList.add("error");
        newItem.classList.add("error1");

    }
    else if(!isLetter(value)){
        errorMsg.innerHTML = "The new item not be Number";
        errorMsg.classList.add("error");
        newItem.classList.add("error1");
    }
    else{
        errorMsg.innerHTML = " ";
        errorMsg.classList.remove("error");
        newItem.classList.remove("error1");
        newItem.classList.add("success");
        createList(value);
    }
});



// function for to check the empty values 

function checkValue(value) {
    return value.length === 0 ? false : true;
}

// function for to check the input is Number or not 

function isLetter(value) {
    return isNaN(value) ? true : false;
}



// function for creating the new to do list items 

function createList(value){
    let div = document.createElement('div');
    div.className = "list-single-item";

    let p = document.createElement('p');
    let text = document.createTextNode(value);
    p.className = "list";
    p.appendChild(text);

    let span = document.createElement('span');
    let i = document.createElement('i');
    i.className ="lni lni-close";
    span.className = "close";
    span.appendChild(i);

    div.appendChild(p);
    div.appendChild(span);
    listItems.appendChild(div);
    deleteList();
    completed(value);

}

// Function for completed tasks mark

function completed(value){
    const div = document.querySelectorAll(".list-single-item");
    const list = document.querySelectorAll(".list");
    for (let i = 0; i < div.length; i++) {
    div[i].addEventListener("dblclick", (event) => {
        list[i].textContent = value + " : Completed";
        list[i].style.color = "green";
    });
}
}

// Function for delete a list function 

function deleteList(){
const close = document.querySelectorAll(".close");
for (let i = 0; i < close.length; i++) {
close[i].addEventListener("click", (event) => {
        close[i].parentElement.remove();
    });
}
}




