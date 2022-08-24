import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import styled from "styled-components";

const StContainer = styled.div`
  margin: 20px 20px 0px 20px;
`;

const StBox = styled.div`
  height: 230px;
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}
  &::-webkit-scrollbar-thumb {
  background-color: #000E3F;
  border-radius: 10px;
  background-clip: padding-box;
  border: 6px solid transparent;
}
  &::-webkit-scrollbar-track {
  background-color: transparent;
  box-shadow: inset 0px 0px 3px white;
}
`;

const StHtag = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const List = (props) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <StContainer>
      <StHtag>W O R K I N G</StHtag>
      <StBox>
        {todos.map((todo) => {
          if (todo.isDone===false){
            return <Todo key={todo.id} {...todo} onClickDetailhandler={props.onClickDetailhandler}/>;
          } else {
            return null;
          }
        })}
      </StBox>
      <StHtag>D O N E</StHtag>
      <StBox>
        {todos.map((todo) => {
            if (todo.isDone){
              return <Todo key={todo.id} {...todo} onClickDetailhandler={props.onClickDetailhandler}/>;
            } else {
              return null;
            }
          })}
      </StBox>
    </StContainer>
  );
}

export default List;