const form = document.querySelector("#my-form");
const number = document.querySelector("#number");
const desc = document.querySelector("#desc");
const typeExp = document.querySelector("#type-expense");
const users = document.querySelector("#users");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${number.value},${desc.value},${typeExp.value}`));
    const btn = document.createElement("input");
    btn.setAttribute("type","button");
    btn.setAttribute("value","delete");
    btn.setAttribute("class","delete");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);

    const editBtn = document.createElement("input");
    editBtn.setAttribute("type","button");
    editBtn.setAttribute("value","edit");
    editBtn.setAttribute("class","edit");
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    users.appendChild(li);
    var obj = {
        number : number.value,
        desc : desc.value,
        typeExp : typeExp.value
    }
    
    localStorage.setItem(desc.value,JSON.stringify(obj));
    number.value = "";
    desc.value = "";
    typeExp.value = "";
   
    btn.onclick=(e)=>{
        let li = e.target.parentElement;
        users.removeChild(li);
        let rmv = obj.desc; 
        localStorage.removeItem(rmv); 
    }
    editBtn.onclick=(e)=>{
        let li = e.target.parentElement;
        users.removeChild(li);
        let rmv = obj.desc; 
        localStorage.removeItem(rmv); 
        number.value = obj.number;
        desc.value = obj.desc;
        typeExp.value = obj.typeExp;
    }

});

