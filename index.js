let form = document.getElementById("addForm");
let items = document.getElementById("items");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let newItem = document.getElementById("item").value;

    let li = document.createElement("li");
    li.className="list-group-item";

    li.appendChild(document.createTextNode(newItem));


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

items.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        if(confirm("Are you Sure?")){
            let li = e.target.parentElement;
            items.removeChild(li);
        }
    }
});