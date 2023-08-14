const form = document.querySelector("#my-form");
const nam = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const users = document.querySelector("#users");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${nam.value} ,${email.value},${phone.value}`));
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