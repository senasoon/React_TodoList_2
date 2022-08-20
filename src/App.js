import React, { useState } from 'react';
import Main from './pages/Main';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from './redux/modules/todos';

const App = () => {
  return <Main/>;
}

export default App;