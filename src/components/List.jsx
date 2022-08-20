import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';


const List = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h2>W O R K I N G</h2>
      <div>
        {todos.map((todo) => {
          if (todo.isDone===false){
            return <Todo key={todo.id} title={todo.title} body={todo.body}/>;
          } else {
            return null;
          }
        })}
      </div>
      <h2>D O N E</h2>
      <div>
        {todos.map((todo) => {
            if (todo.isDone){
              return <Todo key={todo.id} title={todo.title} body={todo.body}/>;
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default List;