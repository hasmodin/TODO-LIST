let inputTask = document.querySelector(".input-task");
let taskBtn = document.querySelector(".taskbtn");

let errorMsg = document.querySelector(".error-msg");
let taskContainer = document.querySelector(".task-container");



const addTask = () => {
    taskBtn.addEventListener("click", () => {
       if(inputTask.value == "") {

        errorMsg.innerHTML = "Error! Please add your task";
        

       }else {
        let newElement = document.createElement('ol');
        newElement.innerHTML = `${inputTask.value} 
         <i class="fa-solid fa-trash"></i>`;
         taskContainer.appendChild(newElement);
        
         inputTask.value = "";
         errorMsg.innerHTML ="";

         const remove = () => {
            newElement.remove();
         }
         newElement.querySelector('i').addEventListener('click', remove);
       }
       
        
    })
}

addTask();
