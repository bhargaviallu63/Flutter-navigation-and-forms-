function showMessage(){

document.getElementById("welcome")
.innerHTML =
"Welcome to the Advanced Navigation Project!";
}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML="☀️";
}else{
themeBtn.innerHTML="🌙";
}

});

const form =
document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name =
document.getElementById("name").value.trim();

let email =
document.getElementById("email").value.trim();

let message =
document.getElementById("message").value.trim();

if(
name==="" ||
email==="" ||
message===""){
alert("Fill all fields");
return;
}

if(!email.includes("@")){
alert("Enter valid email");
return;
}

localStorage.setItem("name",name);

document.getElementById("result")
.innerHTML =
"Form Submitted Successfully!";

form.reset();

});

const msg =
document.getElementById("message");

msg.addEventListener("input",()=>{

document.getElementById("counter")
.innerHTML =
msg.value.length + " / 200";

});

const topBtn =
document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};
