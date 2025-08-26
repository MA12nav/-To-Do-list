const form = document.getElementsByClassName("todo-form");
const input = document.getElementsByClassName("todo-input");
const list = document.getElementById("todo-list");
//load saved task
lettodos = JSON.parse(localStorage.getItem("todos"))||[];
renderTodos();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text = input.value.trim();
    if(text === "") return;
    const todo = {text,completed: false};
    todo.push(todo);
    saveTodos();
    renderTodos();
    input.value = "";
});
function renderTodos(){
    list.innerHTML ="";
    todos.forEach((todo, index)=>{
const li = document.createElement("li");
li.textContent = todo.text;
if(todo.completed) li.classList.add("completed");
//toggle complete on click
li.addEventListener("click",()=>{
    todo[index].completed  = !todo[index].completed;
    saveTodos();
    renderTodos();
});
//delete button
const btn = document.createElement("button");
btn.textContent="X";
btn.addEventListener("click", (e)=>{
    e.stopPropagation();
    todo.splice(index,1);
    saveTodos();
    renderTodos();
});
li.appendChild(btn);
list.appendChild(li);
    });
}
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}