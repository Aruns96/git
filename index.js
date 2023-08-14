const form = document.querySelector("#my-form");
const nam = document.querySelector("#name");
const email = document.querySelector("#email");


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = {
        username : nam.value,
        useremail : email.value
    }

    let objS = JSON.stringify(obj);
    localStorage.setItem("userdetails",objS);
    
});