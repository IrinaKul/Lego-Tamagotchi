let user1 = document.querySelector('.user_tama'),
    urlUser = 'https://tamagotchi-backend.herokuapp.com/user',
    result,
    user,
    name1;

 
var xhr = new XMLHttpRequest()
xhr.open('GET', urlUser, true)
xhr.send()
xhr.onload = function() { 
  if (xhr.readyState != 4) {
    return
  } 
  if (xhr.status === 200) {    
    result = JSON.parse(xhr.responseText);
    for (let i = 0; i <= result.length; i++) {  
      name2 =  result[i].login;
      let div = document.createElement('div');  
      div.className = 'user_tama';
      user1.after(div);
      let userName1 = document.createElement('p');
      userName1.innerHTML = name2;
      userName1.className = 'user_name';
      div.appendChild(userName1);
      let img1 = document.createElement('img');
      img1.src = '../img/boy.svg';
      img1.className = 'user_img';
      div.appendChild(img1);
      let deleteUser1 = document.createElement('img');
      deleteUser1.src = '../img/delete.svg';
      deleteUser1.className = 'user_delete';
      div.appendChild(deleteUser1); 
      deleteUser1.onclick = function() {
        let deluser = result[i].id;        
        xhr.open('DELETE', urlUser + `/${deluser}`, true);        
        xhr.send();
        div.remove();
        console.log(`delete ${deluser}`);        
      }      
     
  }      
    console.log('success');   
  } else {
    console.log('err', xhr.responseText)
  }  
}


