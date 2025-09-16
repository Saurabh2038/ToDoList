console.log("ToDoList");

const inputTask = document.querySelector("#inputTask");
const taskList = document.querySelector("#taskList");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
    let kaam = inputTask.value.trim();

    if (kaam !== "") {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        let span = document.createElement("span");
        span.textContent = kaam;
        span.style.fontSize = "1.4rem"
        span.style.color = "white";
        span.style.margin = "0 8px"; 

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete"; 
        delBtn.className = "delete-btn"; 


        checkbox.addEventListener("change", () => {
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

       
        delBtn.addEventListener("click", () => {
            li.remove();
        });

        li.append(checkbox, span, delBtn);

        list.append(li);
    }

    inputTask.value = "";
})