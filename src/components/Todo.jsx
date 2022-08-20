import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';

const Todo = ({title, body, id}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);


  const onDeleteHandler = (id) => {
    dispatch(
      deleteTodo(id)
    );
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div>
        <button type="button" onClick={()=>onDeleteHandler(id)}>삭제하기</button>
        <button type="button">{todos.isDone? "취소":"완료"}</button>
      </div>
    </div>
  );
}

export default Todo;