(async function() {
    //consts for input field, button, and list of tasks
    const taskInput = document.getElementById("new");
    const addButton = document.getElementById("add");
    const tasks = document.getElementById("tasks");

    //add event listeners for add button and input field
    addButton.addEventListener("click", addNewItem);
    taskInput.addEventListener("keyup", processKeyPress);

    //get todos as a blank array
    const items = [];

    //loop through the list of items and append them to tasks
    for (let item of items) {
        const li = createElementForTask(item);
        tasks.appendChild(li);
    }

    //when you enter text, disable the add button, otherwise allow add
    function processKeyPress(event) {
        addButton.disabled = event.target.value.trim() === "";
        if (event.key === "Enter") {
            addNewItem();
        }
    }

    //initial routine for creating a new task - build a new line
    function createElementForTask(item) {
        const template = document.getElementById("taskTemplate");
        const newListItem = template.content.cloneNode(true);

        const checkbox = newListItem.querySelector(".item-check");
        const text = newListItem.querySelector(".item-text");
        const deleteButton = newListItem.querySelector(".delete");

        text.innerText = item.value;
        checkbox.checked = item.complete;

        deleteButton.onclick = function(event) {
            event.target.closest("li").remove();
            items.splice(items.indexOf(item), 1);
            //save items to local storage. Note they aren't displayed in the UI on browser refresh
            saveItems();
        };

        checkbox.onchange = function(event) {
            item.complete = event.target.checked;
            saveItems();
        };

        return newListItem;
    }

    //when a new item is added, this function fires
    function addNewItem() {
        const task = {
            value: taskInput.value,
            complete: false
        };

        items.push(task);
        saveItems();

        let newItem = createElementForTask(task);
        tasks.appendChild(newItem);

        taskInput.value = "";
        taskInput.focus();
    }

    //save items to localStorage
    async function saveItems() {
        const data = JSON.stringify(items);
        localStorage.setItem("items", data);
    }
}());