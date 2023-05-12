var nam = localStorage.getItem('current');
const todo = document.getElementById("btn");
let count = "x";
const ab = document.querySelector(".work");
window.addEventListener("load", function(){
    todos = JSON.parse(localStorage.getItem(`${nam}1`)) || [];
    displayTodos();
})
todo.addEventListener("click", function(e){
    const tsk = document.getElementById("tod");
    const desc = document.getElementById("desc");
    const task = document.getElementById("appt");
    const todo = {
        title: tsk.value,
        desci: desc.value,
        time: task.value,
        done: false
    }
    todos.push(todo);
    localStorage.setItem(`${nam}1`, JSON.stringify(todos));
    displayTodos();
})
function displayTodos(){
    ab.innerHTML = '';
    todos.forEach(todo =>{
        const one = document.createElement('div');
        one.classList.add('one');
        one.classList.add('abbb');
        const three = document.createElement('div');
        three.classList.add('three');
        const main1 = document.createElement('h1');
        const main2 = document.createElement('p');
        const main3 = document.createElement('p');
        main1.textContent = `${todo.title}`;
        main1.classList.add("main");
        main2.textContent = `${todo.desci}`;
        main2.classList.add("main");
        main3.textContent = `${todo.time}`;
        main3.classList.add("main");
        const edit = document.createElement('div');
        edit.classList.add('edits');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.classList.add('checkbo');
        const but = document.createElement('button');
        but.classList.add('two');
        const fontaw = document.createElement('i');
        fontaw.classList.add('fa-solid');
        fontaw.classList.add('fa-circle-xmark');
        fontaw.classList.add('ab');
        but.appendChild(fontaw);
        edit.appendChild(input);
        edit.appendChild(but);
        three.appendChild(main1);
        three.appendChild(main2);
        three.appendChild(main3);
        one.appendChild(three);
        one.appendChild(edit);
        ab.appendChild(one);
        but.addEventListener('click', function(e){
            todos = todos.filter(t => t!= todo);
            localStorage.setItem(`${nam}1`,JSON.stringify(todos));
            displayTodos();
        })
        console.log(input.checked);
        if(todo.done)
        {
            three.classList.add('appo');
        }
        input.addEventListener('click', e=>{
            todo.done = e.target.checked;
            localStorage.setItem(`${nam}1`,JSON.stringify(todos));
            if(todo.done){
                three.classList.add('appo');
            }
            else{
                three.classList.remove('appo');
            }
        })
    })
    
}
