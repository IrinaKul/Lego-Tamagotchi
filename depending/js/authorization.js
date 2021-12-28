let form = document.querySelector(".form"),
    name = document.querySelector(".name"),
    password = document.querySelector(".password");

window.onload = function () {
  name.value = localStorage.getItem("name") || '';  
  password.value = localStorage.getItem("password") || '';
}

function checkForm(nameElem, passwordElem) {
	if (nameElem === "admin" && passwordElem === "123456789") {
		return true
	} else {
		  alert("Неверный логин или пароль");		  
		  return false
	}	  
}

function logoClick() {
  document.location.href = "../index.html";
}

function link() {
  if (name.value === "admin" && password.value === "123456789") {		
		document.location.href = "admin_main.html";
	} else {
		  alert("Неверный логин или пароль");		   
	}	  
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	checkForm(name.value, password.value);
	if (checkForm(name.value, password.value)) {		
		document.location.href = "admin_main.html";		
	}  
	event.target.reset(); 
})