import React from 'react';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? 'completed' : ''}>
          <span onClick={() => toggleTodo(index)}>{todo.text}</span>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
