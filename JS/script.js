const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active") === true) {
      removeActiveClasses();
    } else {
        removeActiveClasses();
        panel.classList.add("active");
    }
    
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const mainTexthomeP = document.textContent("#mainText")

function store(){

    let name = document.getElementById('name');
    let email = document.getElementById('email')
    let pw = document.getElementById('pw');
    let radioMr = document.getElementById('radioMr');
    let radioMs = document.getElementById('radioMs');


    if(name.value.length == 0){
        alert('Please fill in name');

    }else if(email.value.length == 0){
            alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0 && email.value.length){
        alert('Please fill in name , email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');
    }else{

        localStorage.setItem('name', name.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('pw', pw.value);
        // localStorage.setItem('radioMs',radioMs.value);
        // localStorage.setItem('radioMr',radioMr.value);
        alert('Your account has been created');
    }
}



function check(){
   
    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        // alert('You are logged in.')
       location.href ='/HTML/index.html';
     //let logButton = document.querySelector('#login_btn').innerHTML = "You are logged in."+window.location.href = 'HTML/index.html';
     // location.href = '/HTML/index.html'
        // let url = "/HTML/index.html"
        // window.location(url)
    }else{
        alert('Error on login');
    }
}


