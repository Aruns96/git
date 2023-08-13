let form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
let filter = document.getElementById("filter");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newItem = document.getElementById("item").value;
    let newItem2 = document.getElementById("description").value;

    let li = document.createElement("li");
    li.className="list-group-item";

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + newItem2));


    let delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger btn-sm float-right delete";
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-success btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("edit"));
    li.appendChild(editBtn);

    
    items.appendChild(li)


});

itemsList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        if(confirm("Are you Sure?")){
            let li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
});

filter.addEventListener("keyup",(e)=>{
    let text = e.target.value.toLowerCase();
    

    let items = itemsList.getElementsByTagName("li");

    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        let itemName2 = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }

    })
});