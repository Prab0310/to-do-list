function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed'); 
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => {
        li.remove();
    };

    li.appendChild(taskSpan);
    li.appendChild(completeButton);
    li.appendChild(removeButton);

    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    taskInput.value = '';
}
