import TodoDetail from '../components/TodoDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getTodoById } from '../redux/modules/todos';
import React, { useEffect } from 'react';

const Details = (props) => {
  const param = useParams();
  const todos = useSelector((state) => state.todos.todos);


  const todo = todos.find((todo)=> todo.id === parseInt(param.id));

  return (
      <TodoDetail key={todo.id} {...todo} onClickMainHandler={props.onClickMainHandler}/>
    );
};

export default Details;