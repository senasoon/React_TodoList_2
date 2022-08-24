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
  border: 1px solid ${(props) => props.invalid ? 'red' : 'tansparent'};
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
  const [inputs, setInputs] = useState({
    title: '',
    comment: '',
  });

  const { title, comment } = inputs;

  const [isValid, setIsValid] = useState(true);

  const titleChangeHandler = (event) => {
    setIsValid(true);
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const commentChangeHandler = (event) => {
    setIsValid(true);
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title.trim().length === 0){
      setIsValid(false);
      return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    }

    if (comment.trim().length === 0){
      setIsValid(false);
      return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음
    }

    dispatch(
      addTodo({
        title:title,
        comment:comment,
      })
    );

    setInputs({
      title: '',
      comment: '',
    });
  };


  return (
    <StContainer>
      <StHeader><h1>T O  D O  L I S T</h1></StHeader>
      <StForm onSubmit={onSubmitHandler} autocomplete="off">
        <StTitleAndContent>
          <StPtag>제목</StPtag>
          <StInput name="title" invalid={!isValid} onChange={titleChangeHandler} value={title} autocomplete="chrome-off"></StInput>
          <StPtag>내용</StPtag>
          <StInput name="comment" invalid={!isValid} onChange={commentChangeHandler} value={comment} autocomplete="chrome-off" ></StInput>
        </StTitleAndContent>
        <StButton>추가하기</StButton>
      </StForm>
      <List onClickDetailhandler={props.onClickDetailhandler}/>
    </StContainer>
  );
};

export default Main;