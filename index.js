const form = document.querySelector("#my-form");
const nam = document.querySelector("#name");
const email = document.querySelector("#email");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    localStorage.setItem("username",nam.value);
    localStorage.setItem("useremail",email.value);
});