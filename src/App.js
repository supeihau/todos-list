import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import Plus from "./components/Plus";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import { Box, Modal, Typography } from "@mui/material";

const App = () => {
  const [input, setInput] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [time, setTime] = useState("");
  const [editTime, setEditTime] = useState(null);
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const [currentPage, setCurrentPage] = useState('InitialPage');

  return (
    <div className="container">
      {currentPage === 'InitialPage' && (
        <div className="app-wrapper">
          <Header />
          <InitialPage
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {currentPage === 'From' && (
        <div className="app-wrapper" style={{minHeight: '380px' }}>
          <Header />
          <Form
            input={input} //props 將這些資料傳給From
            setInput={setInput}

            time={time}
            setTime={setTime}

            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}

            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
      
      {currentPage === 'TodoList' && (
        <div className="app-wrapper" style={{minHeight: '380px'}}>
          <Header />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>

  );
}

export default App;
