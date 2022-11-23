import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"; //是讓分佈式系統中的所有元素，都能有唯一的辨識信息

const Form = (props) => {
    const { input, setInput,
        time, setTime,
        todos, setTodos, editTodo, setEditTodo, setCurrentPage } = props;

    const updateTodo = (title, id, completed, time) => { //參數為title id completed
        const newTodo = todos.map((todo) => //參數todo: 每一格
            todo.id === id ? { title, id, completed, time } : todo //成立的話修改成新的值，否則維持原樣
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]); //如果setInput editTodo變動的話就會觸發useEffect

    //onClick/ onChange都會有一個event產生
    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onTimeChange = (event) => {
        setTime(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault(); //js 有執行事件但是不要跳轉網頁
        setCurrentPage('TodoList');
        if (!editTodo) { //如果不是editToDo就正常執行
            setTodos([...todos, { id: uuidv4(), title: input, completed: false, time: time }]);
            setInput("");
        } else { //否則抓取輸入及editToDo的欄位 進updateToDo函式
            updateTodo(input, editTodo.id, editTodo.completed, time)
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <form onSubmit={onFormSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter a Todo..."
                        className="task-input"
                        value={input}
                        required
                        onChange={onInputChange}
                    />
                    <br></br>
                    <input
                        type="date"
                        className="date-input"
                        value={time}
                        required
                        onChange={onTimeChange}
                    />
                </div>

                <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                    <div className="btn-add" style={{ display: 'inline-block'}}>
                        <button type="submit" className="button-plus" >
                            <i className="fa fa-plus-circle"></i>
                        </button>
                    </div>
                    <div className="btn-closed" style={{ display: 'inline-block', marginLeft: '50px' }}>
                        <button type="button" className="button-plus" onClick={() => setCurrentPage('InitialPage')}>
                            <i className="fa fa-times-circle"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form