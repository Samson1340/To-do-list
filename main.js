const newItem = document.querySelector("#new-item");
const btnSubmit = document.querySelector("#submit");
const form = document.querySelector("#form");
const listItems = document.querySelector(".list-items");
const errorMsg = document.querySelector(".error-msg");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = newItem.value;

    if(!checkValue(value)){

        errorMsg.innerHTML = "The new item not be empty";
        errorMsg.classList.add("error");
        newItem.classList.add("error1");

    }
    // else if(!isLetter(value)){
    //     errorMsg.innerHTML = "The new item not be Number";
    //     errorMsg.classList.add("error");
    //     newItem.classList.add("error1");

    // }

    else{
        errorMsg.innerHTML = " ";
        errorMsg.classList.remove("error");
        newItem.classList.remove("error1");
        newItem.classList.add("success");
        creatList(value);
    }

});

function checkValue(value) {
    return value.length === 0 ? false : true;
}

// function isLetter(value) {
//     return isNumber(value) ? false : true;
// }


function creatList(value){
    let div = document.createElement('div');
    div.className = "list-single-item";

    let p = document.createElement('p');
    let text = document.createTextNode(value);
    p.appendChild(text);

    let span = document.createElement('span');
    let i = document.createElement('i');
    i.className ="lni lni-close";
    span.className = "close";
    span.appendChild(i);

    div.appendChild(p);
    div.appendChild(span);
    listItems.appendChild(div);
}

var close = document.getElementsByClassName("close");

close.addEventListener("click", function() {
    let div = this.parentElement;
    // div.remove();
    div.style.display = "none";
});

