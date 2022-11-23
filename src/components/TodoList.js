import React from 'react'

const TodoList = ({ todos, setTodos, setEditTodo, setCurrentPage }) => {

    const handleCompleted = (todo) => {
        setTodos(
            todos.map((item) => { //map遍歷每個陣列值，但回傳新陣列
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }; //false變true 
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        setCurrentPage('From');
        const findToDo = todos.find((todo) => todo.id === id);  //js find 回傳第一個滿足條件的元素
        setEditTodo(findToDo);
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        //js filter 經指定的韓式運算後，回傳一個新陣列，原陣列不便
    }
    // https://ithelp.ithome.com.tw/articles/10229458

    return (
        <div>
            {/* map(物件)有key(名稱)和value(值) */}
            {todos.map((todo) => (
                <li className="list-item" style={{minwidth: '380px' }}
                    key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <input style={{fontSize: '15px', textAlign: 'end', display: 'block'}}
                        type="text"
                        value={todo.time}
                        className={`time ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleCompleted(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
            <br></br>
            <div className="initial-page-btn">
                <button className="button-plus" onClick={() => setCurrentPage('From')}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    )
}

export default TodoList;
