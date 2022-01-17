let switchBtn = document.querySelectorAll('.switch-btn');

function logoClick() {
    document.location.href = "admin_main.html";
  }

function correctUsers() {
  document.location.href = "correct_users.html";
}  

function deleteTamagotchi() {
  alert('Delete?');
}

switchBtn.forEach(item => {
  item.onclick = () => {
    item.classList.toggle('switch-on');
  }
})

function watchStatus() {
  document.location.href = "status_tama.html";
}


  
