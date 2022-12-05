import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid"; //是讓分佈式系統中的所有元素，都能有唯一的辨識信息

const Form = (props) => {
    const { input, setInput,
        time, setTime,
        todos, setTodos, //初輸入
        editTodo, setEditTodo, //更改已輸入的資訊
        setCurrentPage } = props;

    const updateTodo = (title, id, completed, time) => { //參數為title id completed time
        const newTodo = todos.map((todo) => //參數todo: 每一個props
            todo.id === id ? { title, id, completed, time } : todo 
            // 比對todo props裡的的id 和新參數id，成立的話修改成新的值，否則維持原樣
        );
        setTodos(newTodo); //使用setTodos更新新的prop
        setEditTodo("");
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]); //如果setInput editTodo變動的話就會觸發useEffect

    useEffect(() => {
        if (editTodo) {
            setTime(editTodo.time);
        } else {
            setTime("");
        }
    }, [setTime, editTodo]); //如果setTime editTodo變動的話就會觸發useEffect

    //onClick/ onChange都會有一個event產生
    const onInputChange = (event) => {
        setInput(event.target.value); //抓input的值，使用setInput存入輸入
    }

    const onTimeChange = (event) => {
        setTime(event.target.value);
    }

    //提交的時候判斷兩件事情: 1.初次輸入 2.再次更改
    const onFormSubmit = (event) => {
        event.preventDefault(); //js 有執行事件但是不要跳轉網頁
        setCurrentPage('TodoList');
        if (!editTodo) { //如果不是editToDo就正常執行 (初次輸入)
            setTodos([...todos, { id: uuidv4(), title: input, completed: false, time: time }]);
            // setTodos是陣列，將todos內容存入props，有id/title抓input輸入值/completed未完成/time抓input輸入的日期
            setInput("");
        } else { //否則抓取輸入及editToDo的欄位 進updateToDo函式 (再次更改)
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