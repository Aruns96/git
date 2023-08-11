console.log(document.title);


console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
document.all[10].textContent="hello";
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);


let headTitle = document.getElementById("header-title");
console.log(headTitle);
headTitle.textContent = "hello";
headTitle.innerText = "world";
headTitle.innerHTML = "<h3>hello hai</h3>";


let header = document.getElementById("main-header");
header.style.borderBottom = "solid 5px #000"; 

let addItem = document.getElementById("add-item");
addItem.style.color = "green";
addItem.style.fontWeight = "bold";

let items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "green";

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}

