var submit = document.getElementById('button');
var news = document.querySelector('.user-box');
submit.addEventListener('click', function(){
    var name = document.getElementById('username').value;
    var pass = document.getElementById('passw').value;
    var name1 = localStorage.getItem(`${name}`);
    localStorage.setItem('current',name);
    if(name1 === null || name1 != pass)
    {
        // const one = document.createElement('h3');
        // one.textContent = "wong name or password";
        // console.log(one);
        // news.appendChild(one);
        alert("wrong id or pass")
    }
    else if(name1 === pass)
    {
        window.open("home.html");
    }


})