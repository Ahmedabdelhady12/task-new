let username =document.querySelector("#username")
let email =document.querySelector("#email")
let password =document.querySelector("#pwd")

let registerBtn =document.querySelector("#sign_up")

registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(username.value ==="" || email.value ==="" || password.value ==="" ){
        alert("plaese fill data")
    }else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);


        setTimeout(() => {
            window.location ="login.html"
        }, 1500);
    }
})
