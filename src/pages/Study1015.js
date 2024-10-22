import React, {useState} from "react";
import './study.css';
import InputComponent from "./component/InputComponent";

const Study1015 = () => {
    const [idInputValue, setidInputValue] = useState("");
    const [pwInputValue, setpwInputValue] = useState("");

    const handleIDInputChange = (value) => {
        setidInputValue(value);
    }

    const handlePWInputChange = (value) => {
        setpwInputValue(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); //보안부분으로 필요한 요소
        alert(`Your ID submit: ${idInputValue}`);
        alert(`You PW submit: ${pwInputValue}`);
    }

    return (
        <div className="study1015-container">
            <ButtonOnclickEvent/>
            <InputEvent/>
            <form onSubmit={handleFormSubmit}>
                <InputComponent idValue={idInputValue} pwValue={pwInputValue} onChangeID={handleIDInputChange} onChangePW={handlePWInputChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

function ButtonOnclickEvent(){
    const [text, setText] = useState('');

    function handleClick(num) {
        setText(`Clicked ${num} button`);
      }

    return (
        <div className="button-css">
            <h1>{text}</h1>
            <button onClick={() => handleClick(1)}>Click 1</button>
            <button onClick={() => handleClick(2)}>Click 2</button>
            <button onClick={() => handleClick(3)}>Click 3</button>
        </div>
    );
}

function InputEvent(){
    const [value, setValue] = useState('');

    const handleChange =(event) =>{
        setValue(event.target.value);
    }

    return (
        <div className="input-css">
            <input type="text" value={value} onChange={handleChange}/>
            <p>입력값: {value}</p>
        </div>
    );
}

export default Study1015;