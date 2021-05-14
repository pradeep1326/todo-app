import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Todo-app';
  todos = [
    {
      label: 'Bring Milk',
      done: false,
      priority: 3,
    },
    {
      label: 'study',
      done: true,
      priority: 1,
    },
    {
      label: 'play music',
      done: false,
      priority: 4,
    },
    {
      label: 'play cricket',
      done: false,
      priority: 5,
    },
  ];

  addTodo(newTodoLabel) {
    const newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false,
    };

    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter((t) => t.label !== todo.label);
  }
}
