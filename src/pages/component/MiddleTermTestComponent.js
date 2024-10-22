import React from 'react';

const MiddleTermTestComponent=({value, onChange})=>{
    return(
        <div>
            <label>
                <h2> 입력 {value}</h2>
                <input type="text" value={value} onChange={onChange} />
            </label>
        </div>
    )
}

export default MiddleTermTestComponent