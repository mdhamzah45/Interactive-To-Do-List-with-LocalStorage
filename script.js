const STORAGE_KEY = 'todo-list-items';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');

let tasks = loadTasks();

function loadTasks() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  if (!savedTasks) {
    return [];
  }

  try {
    return JSON.parse(savedTasks);
  } catch (error) {
    console.error('Could not parse saved tasks:', error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderList() {
  todoList.innerHTML = '';

  if (tasks.length === 0) {
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const taskMain = document.createElement('div');
    taskMain.className = 'task-main';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', `Mark ${task.text} as complete`);

    const text = document.createElement('span');
    text.textContent = task.text;
    text.className = `task-text${task.completed ? ' completed' : ''}`;

    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderList();
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', `Delete task ${task.text}`);

    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      saveTasks();
      renderList();
    });

    taskMain.appendChild(checkbox);
    taskMain.appendChild(text);
    li.appendChild(taskMain);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

function addTask(event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  tasks.push({
    id: Date.now(),
    text,
    completed: false,
  });

  saveTasks();
  renderList();
  todoForm.reset();
  todoInput.focus();
}

todoForm.addEventListener('submit', addTask);

todoInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask(event);
  }
});

renderList();
