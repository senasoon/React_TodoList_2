import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import { addTodo } from '../redux/modules/todos';
import styled from "styled-components";

const StContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100%;
  margin: auto auto 30px auto;
`;

const StHeader = styled.header`
  text-align: center;
  color: #000E3F;
`;

const StForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000E3F;
  border-radius: 50%;
  padding: 20px;
`;

const StTitleAndContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const StPtag = styled.p`
  color: #ffff;
  margin-right: 5px;
`;

const StInput = styled.input`
  background-color: transparent;
  color: white;
  margin-right: 5px;
`;

const StButton = styled.button`
  cursor: pointer;
  color: #000E3F;
  background-color: #ffff;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
`;

const Main = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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
        title:title,
        body:body,
      })
    );

    setTitle("");
    setBody("");
  };


  return (
    <StContainer>
      <StHeader><h1>T O  D O  L I S T</h1></StHeader>
      <StForm onSubmit={onSubmitHandler}>
        <StTitleAndContent>
          <StPtag>제목</StPtag>
          <StInput onChange={titleText} value={title}></StInput>
          <StPtag>내용</StPtag>
          <StInput onChange={bodyText} value={body}></StInput>
        </StTitleAndContent>
        <StButton>추가하기</StButton>
      </StForm>
      <List onClickDetailhandler={props.onClickDetailhandler}/>
    </StContainer>
  );
};

export default Main;