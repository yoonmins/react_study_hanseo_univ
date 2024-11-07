import React, { useState } from "react";

const MyForm =()=>{
    const[inputIdValue,setInputIdValue] = useState('');
    const[inputPwValue,setInputPwValue] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault(); //폼 제출의 기본동작(새로고침) 방지
        alert(`ID: ${inputIdValue}, PW: ${inputPwValue}`);//새로고침없이 값출력
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputIdValue} onChange={(e)=>setInputIdValue(e.target.value)} /> 
                <input type="text" value={inputPwValue} onChange={(e)=>setInputPwValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MyForm