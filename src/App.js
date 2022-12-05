import React, { useState } from "react";
import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [input, setInput] = useState(""); //輸入代辦名稱
  const [time, setTime] = useState(""); //輸入時間
  const [todos, setTodos] = useState([]); //初建立的代辦事項props
  const [editTodo, setEditTodo] = useState(null); //更改的代辦

  const [currentPage, setCurrentPage] = useState('InitialPage');
  // currentPage 預設是InotialPage， 當currentPage變動時使用setCurrentPage去更改顯示的頁面

  return (
    <div className="container">
      {currentPage === 'InitialPage' && (
        <div className="app-wrapper">
          <Header />
          <InitialPage
            setCurrentPage={setCurrentPage} //props傳送到InitialPage的頁面
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
