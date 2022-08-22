// src/redux/modules/todos.js

// Action Value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";
const TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "todos/GET_TODO_BY_ID";

// Action Creator
let id = 3;
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: {id: id++, ...payload, isDone: false}
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

export const getTodoById = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// Initial State
const initialState = {
  todos:[
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: false
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type){
    case ADD_TODO:
      return {
        // ...state,
        todos: [ ...state.todos, action.payload ],
      };
    
    case DELETE_TODO:
      return {
        // ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
  
    case TOGGLE_STATUS_TODO:
      return {
        // ...state,
        todos: state.todos.map((todo)=> todo.id === action.payload ? {...todo, isDone:!todo.isDone}:todo),
      };
    
    // case GET_TODO_BY_ID:
    //   return {
    //     ...state,
    //     todos: state.todos.find((todo) => todo.id === parseInt(action.payload))
    //   };
    
    default:
      return state;
  }
}

export default todos;

