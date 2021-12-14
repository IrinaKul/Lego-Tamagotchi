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

function link() {
  if (name.value === "admin" && password.value === "123456789") {
		document.body.innerHTML='<object type="text/html" data="admin_main.html" ></object>';
	} else {
		  alert("Неверный логин или пароль");		  
	}	  
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	checkForm(name.value, password.value);
	if (checkForm(name.value, password.value)) {		
		document.body.innerHTML='<object type="text/html" data="admin_main.html" ></object>';
	}
})