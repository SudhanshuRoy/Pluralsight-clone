let form=document.querySelector("form");
let signUpdata=JSON.parse(localStorage.getItem("signup")) || [];
form.addEventListener("submit",function(event){
event.preventDefault()
let obj={
    name:form.name.value,
    email:form.email.value,
    password:form.password.value
}
if(obj.name=="" || obj.email=="" || obj.password==""){
alert("kindly fill required data");
return;
}else{
signUpdata.push(obj);
localStorage.setItem("signup",JSON.stringify(signUpdata));
alert("signup successful");
window.location.href = "sign.html";

}

// console.log(signUpdata);
});