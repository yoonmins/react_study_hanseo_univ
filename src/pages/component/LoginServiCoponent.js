import React, {useState} from "react";

const LoginService =()=>{
    function Login({onLogin}){
        return(
            <div>
                <h2>로그인 페이지</h2>
                <button onClick={onLogin}>로그인</button>
            </div>
        );
    }

    function Logout({onLogout}){
        return(
            <div>
                <h2>환영합니다</h2>
                <button onClick={onLogout}>로그아웃</button>
            </div>
        );
    }
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleLogin = () =>{
        setIsLoggedIn(true);
    };

    const handleLogout = () =>{
        setIsLoggedIn(false);
    };

    return(
        <div>
            <h1>React 로그인 예제</h1>
            {isLoggedIn ? (
                <Logout onLogout={handleLogout} />
                ):( <Login onLogin={handleLogin} />
            )}
            
        </div>
    );
}

export default LoginService