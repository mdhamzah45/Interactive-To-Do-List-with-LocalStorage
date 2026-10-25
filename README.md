# Interactive To-Do List

This project is a simple to-do app built with HTML, CSS, and JavaScript.

## Features

- Add tasks with a text input and submit button
- Mark tasks as complete with a checkbox
- Delete tasks from the list
- Save and reload tasks using `localStorage`
- Rebuild the list from a single source of truth in JavaScript

## How to view locally

From this folder, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Data persistence

The app stores the task array in `localStorage` using `JSON.stringify()`, and loads it back with `JSON.parse()` when the page refreshes. This keeps tasks available after a page reload.
