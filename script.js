const addTaskBtn=document.querySelector("#add-task-btn");
const newTaskInput=document.querySelector("#new-task");
const taskList=document.querySelector("#task-list");

function addTask(){
    if(newTaskInput.value.trim()!==''){
        const newTask=document.createElement('li');
        const deleteBtn=document.createElement('button');
        newTask.innerText=newTaskInput.value;
        deleteBtn.innerText="X";
        deleteBtn.classList.add("delete-btn");
        taskList.appendChild(newTask);
        newTask.appendChild(deleteBtn);

        newTaskInput.value = '';

    }else{
        alert("Please enter a task.");
    }
}
addTaskBtn.addEventListener("click", addTask);

taskList.addEventListener("click",function(event){
 if(event.target.nodeName==='BUTTON'){
    let listItem=event.target.parentElement;
    listItem.remove();
 }
});
