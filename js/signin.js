 let signup=JSON.parse(localStorage.getItem("signup")) || [];
 let signin=JSON.parse(localStorage.getItem("signin")) || [];
let form=document.querySelector("form");
let signindata=JSON.parse(localStorage.getItem("signin")) || [];
form.addEventListener("submit",function(event){
event.preventDefault()
let obj={
    id:form.id.value,
    password:form.password.value
}
for(let i=0;i<signin.length;i++){
    if((obj.id==signin[i].name && obj.password==signin[i].password) || (obj.id==signin[i].email && obj.password==signin[i].password)){
        alert("You are already logedin");
        return;
    }
}

let flag=false;
for(let i=0;i<signup.length;i++){
    if((obj.id==signup[i].name && obj.password==signup[i].password) || (obj.id==signup[i].email && obj.password==signup[i].password)  ){
        alert("signin successful");
        flag=true;
    }
}
if(flag){
    signindata.push(obj);
    // console.log(obj);
    localStorage.setItem("signin",JSON.stringify(signindata));
    window.location.href = "https://www.pluralsight.com/";
}else{
    alert("wrong cresidential");
}

});