import React from "react";

function InputComponent({idValue, pwValue, onChangeID, onChangePW}){
    return(
        <div>
            <label>
                ID:
                <input type="text" value={idValue} onChange={(e)=>onChangeID(e.target.value)}/>
                PW:
                <input type="text" value={pwValue} onChange={(e)=>onChangePW(e.target.value)}/>
            </label>
        </div>
    )
}

export default InputComponent