import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { toggleStatusTodo } from '../redux/modules/todos';

const Todo = ({todo}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);


  const onDeleteHandler = (id) => {
    dispatch(
      deleteTodo(id)
    );
  }

  const onUpdateHandler = (id) => {
    dispatch(
      toggleStatusTodo(id)
    );
  }

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div>
        <button type="button" onClick={()=>onDeleteHandler(todo.id)}>삭제하기</button>
        <button type="button" onClick={()=>onUpdateHandler(todo.id)}>{todo.isDone? "취소":"완료"}</button>
      </div>
    </div>
  );
}

export default Todo;