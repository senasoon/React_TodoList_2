import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import { addTodo } from '../redux/modules/todos';

const Main = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(3);

  const titleText = (event) => {
    setTitle(event.target.value);
  }

  const bodyText = (event) => {
    setBody(event.target.value);
  }

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    if (body === "") return;

    dispatch(
      addTodo({
        id: id,
        title:title,
        body:body,
        isDone:false
      })
    );

    setTitle("");
    setBody("");
    setId(id+1);
  };

  return (
    <div>
      <header><h1>T O  D O  L I S T</h1></header>
      <form onSubmit={onSubmitHandler}>
        <div>
          <p>제목</p>
          <input onChange={titleText} value={title}></input>
          <p>내용</p>
          <input onChange={bodyText} value={body}></input>
        </div>
        <button>추가하기</button>
      </form>
      <List />
    </div>
  );
};

export default Main;