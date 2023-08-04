const addBtn = document.getElementById('addBtn');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

addBtn.addEventListener('click', () => {
    const todoInput = document.getElementById('todo');
    const datetimeInput = document.getElementById('datetime');

    if (todoInput.value !== "") {
        const taskItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = todoInput.value + ' - ' + new Date(datetimeInput.value).toLocaleString();

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete';
        completeButton.addEventListener('click', () => {
            taskItem.classList.add('completed');
            taskItem.removeChild(completeButton);
            const incompleteButton = document.createElement('button');
            incompleteButton.textContent = 'Incomplete';
            incompleteButton.className = 'incomplete';
            incompleteButton.addEventListener('click', () => {
                taskItem.classList.remove('completed');
                taskItem.removeChild(incompleteButton);
                taskItem.appendChild(completeButton);
                pendingTasksList.appendChild(taskItem);
                completedTasksList.removeChild(taskItem);
            });
            taskItem.appendChild(incompleteButton);
            completedTasksList.appendChild(taskItem);
            pendingTasksList.removeChild(taskItem);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            const newTodo = prompt('Edit the task:', taskText.textContent.split(' - ')[0]);
            if (newTodo !== null) {
                taskText.textContent = newTodo + ' - ' + new Date(datetimeInput.value).toLocaleString();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                if (taskItem.classList.contains('completed')) {
                    completedTasksList.removeChild(taskItem);
                } else {
                    pendingTasksList.removeChild(taskItem);
                }
            }
        });


        taskItem.appendChild(taskText);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        pendingTasksList.appendChild(taskItem);

        todoInput.value = "";
        datetimeInput.value = "";
    }
});
