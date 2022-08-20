import React from 'react';
import { useSelector } from 'react-redux';

const Todo = ({title, body}) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <div>
        <button type="button">삭제하기</button>
        <button type="button">{todos.isDone? "취소":"완료"}</button>
      </div>
    </div>
  );
}

export default Todo;