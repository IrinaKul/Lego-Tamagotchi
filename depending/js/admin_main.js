
//возврат на страницу администратора
function logoClick() {
    document.location.href = "admin_main.html";
  }


//переход на страницу управления пользователями  
function correctUsers() {
  document.location.href = "correct_users.html";
}  

//функция удаления пользователя
function deleteTamagotchi() {
  alert('Delete?');
}

//выбор пользователя
let switchBtn = document.querySelectorAll('.switch-btn');

switchBtn.forEach(item => {
  item.onclick = () => {
    item.classList.toggle('switch-on');    
  }
})

//переход на страницу состояний 
function watchStatus() {
  document.location.href = "status_tama.html";
}

//сплэш скрин
let screen = document.querySelector('.mask_img'),
    flag = false;
      
function chooseImg() {
  if (!flag) {
    screen.src = "../img/lego_new.png";
    flag = true;
  } else {
    screen.src = "../img/mask_group.svg";
  }  
  
  let url = "https://drive.google.com/file/d/1ydeqyF9u_Ib6a0BVWJYAv4deN2eZQrJy/view?usp=sharing";
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://tamagotchi-backend.herokuapp.com/uidata/splashscreen_image_url", true);
  let json = JSON.stringify(url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhr.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDMxMTY5NTUsImV4cCI6MTY0MzIwMzM1NSwianRpIjoiMmUzOGIxZjUtODM2Yi00MWVmLWFiZDMtY2I3NTIwYTkzZTZlIiwiaWQiOjEsInJscyI6ImFkbWluIiwicmZfZXhwIjoxNjQ1NzA4OTU1fQ.FFj14rV8We60Vv2cDjAVFwDVJsoPQT548Ad8N14Io6U');
  xhr.setRequestHeader("splashscreen_image_url", json);
  xhr.send(json);
}
  
