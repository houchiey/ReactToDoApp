import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import ToDoList from './components/pages/ToDoList';
import ToDoAdd from './components/pages/ToDoAdd';
import ToDoDetail from './components/pages/ToDoDetail';
import NotFound from './components/pages/error/NotFound';

function App() {
  return (
    <div>
      <h1>TODOアプリ</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">ToDo一覧</Link>
        </li>
        <li>
          <Link to="/todo/add">新規ToDo登録</Link>
        </li>
        <li>
          <Link to="/todo/1">ToDo詳細</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/todo/add" element={<ToDoAdd />} />
        <Route path="/todo/:toDoId" element={<ToDoDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
