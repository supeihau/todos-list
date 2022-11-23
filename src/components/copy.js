// import React from 'react';
// import Header from "./components/Header";
// import Form from "./components/Form";
// import TodoList from "./components/TodoList";
// import "./App.css";

// const Plus = () => {
//     const initialState = JSON.parse(localStorage.getItem("todos")) || [];
//     // const[想要監控的資料, 修改該資料的方法] = useState(預設值)
//     const [input, setInput] = useState("");
//     const [todos, setTodos] = useState([]);
//     const [editTodo, setEditTodo] = useState(null);
  
//     useEffect(() => {
//       localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);
  
//   return (
//     <div className="container">
//       <div className="app-wrapper">
//         <div>
//           <Header />
//         </div>
//         <div className="img">
//           <img src="https://fakeimg.pl/200x200/"></img>
//         </div>
//         <div>
//           <Form 
//             input={input} //props 將這些資料傳給From
//             setInput={setInput}
//             todos={todos}
//             setTodos={setTodos}
//             editTodo={editTodo}
//             setEditTodo={setEditTodo}
//           />
//         </div>
//         <div>
//           <TodoList
//             todos={todos}
//             setTodos={setTodos}
//             setEditTodo={setEditTodo}
//           />
//         </div>
//         <div className="initial-page-btn">
//           <button className="button-plus">
//             <i class="fa fa-plus-circle"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Plus