import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/modules/todos';
import { toggleStatusTodo } from '../redux/modules/todos';
import styled from "styled-components";

const StContainer = styled.div`
  border: 2px solid #000E3F;
  border-radius: 10px;
  width: 200px;
  margin: 0 5px;
  color: #000E3F;
  padding: 10px;
  flex: 0 0 auto;
`;

const StPtag = styled.p`
  color: #000E3F;
  margin: 5px;
  font-size: 12px;
  white-space:normal;
  word-wrap:break-word;
  width: 190px;
  height: 40px;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const StBtn = styled.button`
  cursor: pointer;
  color: #ffff;
  background-color: #000E3F;
  border-radius: 2px;
  border: 0;
  font-size: 12px;
  margin: auto 5px;
  &:hover {
  background-color: rgb(241, 241, 241);
  color: #000E3F;
}
`;

const StDetailBtn = styled.button`
  cursor: pointer;
  color: #000E3F;
  background-color: #ffff;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
`;

const Todo = ({todo, onClickDetailhandler}) => {
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
    <StContainer>
      <StDetailBtn type="button" onClick={()=>onClickDetailhandler(todo.id)}>상세보기</StDetailBtn>
      <h3 style={{marginLeft:"5px"}}>{todo.title}</h3>
      <StPtag>{todo.body}</StPtag>
      <StButtonBox>
        <StBtn type="button" onClick={()=>onDeleteHandler(todo.id)}>삭제하기</StBtn>
        <StBtn type="button" onClick={()=>onUpdateHandler(todo.id)}>{todo.isDone? "취소":"완료"}</StBtn>
      </StButtonBox>
    </StContainer>
  );
}

export default Todo;