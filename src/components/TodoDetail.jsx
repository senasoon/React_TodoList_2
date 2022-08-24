import React from 'react';
import styled from "styled-components";

const StContainer = styled.div`
  width: 400px;
  height: 300px;
  margin: 100px auto;
  background-color: #000E3F;
  color: #ffff;
  padding: 20px;
`;

const StSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StButton = styled.button`
  cursor: pointer;
  color: #000E3F;
  background-color: #ffff;
  border-radius: 5px;
  border: 0;
  font-size: 12px;
  height: 20px;
`;

const TodoDetail = ({ id, title, comment, onClickMainHandler }) => {
  return (
    <StContainer>
      <StSection>
        <p>ID :{id}</p>
        <StButton onClick={onClickMainHandler}>이전으로</StButton>
      </StSection>
      <h1>{title}</h1>
      <p>{comment}</p>
    </StContainer>
  );
}

export default TodoDetail;