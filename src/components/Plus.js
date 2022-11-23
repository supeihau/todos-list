import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from './Form';
import TodoList from './TodoList';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: '#efecca',
    border: '3px solid #5e565a',
    borderRadius: '10px',
    boxShadow: 24,
    p: 3,
};

const Plus = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    // const[想要監控的資料, 修改該資料的方法] = useState(預設值)
    const [input, setInput] = useState("");
    const [time, setTime] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="initial-page-btn">
            <button className="button-plus" onClick={handleOpen}>
                <i class="fa fa-plus-circle"></i>
            </button>
            
            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div>
                            <Form
                                input={input} //props 將這些資料傳給From
                                setInput={setInput}
                                time={time}
                                setTime={setTime}
                                todos={todos}
                                setTodos={setTodos}
                                editTodo={editTodo}
                                setEditTodo={setEditTodo}
                            />
                        </div>
                        <div className="btn-closed" >
                            <button type="button" className="button-plus" onClick={handleClose}>
                                <i class="fa fa-times-circle"></i>
                            </button>
                        </div>
                    </Typography>
                </Box>
            </Modal> */}
        </div>
    )
}

export default Plus