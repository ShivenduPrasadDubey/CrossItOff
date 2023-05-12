let username = document.getElementById('username');
const submitButton = document.querySelector('#button');
submitButton.addEventListener('click', function (){
    var name = document.getElementById('username').value;
    var pass = document.getElementById('passw').value;
    localStorage.setItem(`${name}`,pass);
    window.open("login.html")
})



 