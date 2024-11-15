import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';

const App = () => {
  const headStyle = {
    textAlign: "center",
  }
  return (
    <div>
      <h1 style={headStyle}>
        Todo List
      </h1>
      <Router>
        <Routes>
          <Route path='/' element={<Todo />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
