import React, {useState} from "react";
import './task1008.css';

const Task1008 = () => {
    return (
        <div className="task1008-container">
            <h1>TO DO LIST✨</h1>
            <ToDoList />
        </div>
    );
};

function ToDoList() {
    const [inputValue, setInputValue] = useState('');//value
    const [inputList, setInputList] = useState([]);//list
  
    const changeTodoInput = (changeValue) => {
        setInputValue (changeValue.target.value);
    }

    // 할일 추가
    const addTodo = () => {
        setInputList([...inputList, inputValue]); // ...으로 기존값 가져오기, 현재 입력값
        setInputValue(''); // 입력값 초기화 ''
    }

    return (
        <div className="todoList">
            <div className="contetnt_head">
                <input type="input" value={inputValue} onChange={changeTodoInput} />
                <button type="button" onClick={addTodo} className="content_head_button">SUBMIT</button>
            </div>
            <ul className="content_list">
                {inputList.map((item, i) => {
                return (
                    <li className="content_list_li">
                        <input type="checkbox"/>
                        <span className="todolist_text">{item}</span>
                        <button type="button">DELETE</button>
                    </li>
                )
                })}
            </ul>
        </div>
    );
}

export default Task1008;