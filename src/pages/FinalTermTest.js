import React from "react";

const FinalTermTest =() =>{
    return(
        <>
            <ExampleOne />
        </>
    )
}

const ExampleOne = () =>{
    const users =[
        {
            id:1,
            name:"alice"
        },
        {
            id:2,
            name:"judy"
        },
        {
            id:3,
            name:"Yoon"
        },
        {
            id:4,
            name:"moon"
        }
    ]
    return(
        <>
            <h1>
                조건부 렌더링
            </h1>
            <h2>
                사용자 관리 목록
            </h2>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
export default FinalTermTest;