const form = document.querySelector("#my-form");
const nam = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const users = document.querySelector("#users");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nam.value} ,${email.value},${phone.value}`));
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
    let obj = {
        username : nam.value,
        useremail : email.value,
        userphone : phone.value
    }

    let objS = JSON.stringify(obj);
    localStorage.setItem(email.value,objS);

    nam.value = "";
    email.value = "";
    phone.value = "";
});

users.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        let li = e.target.parentElement;
        users.removeChild(li);
    }
    if(e.target.classList.contains("edit")){
        let li = e.target.parentElement;
        users.removeChild(li);
        nam.value = Array.from(e.target.parentElement.textContent).join("").split(",")[0];
        email.value = Array.from(e.target.parentElement.textContent).join("").split(",")[1];
        phone.value = Array.from(e.target.parentElement.textContent).join("").split(",")[2].substring(0,Array.from(e.target.parentElement.textContent).join("").split(",")[2].length-10);
    }

    let mail = Array.from(e.target.parentElement.textContent).join("").split(",")[1];
    localStorage.removeItem(mail);
});

