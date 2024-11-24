import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import axios from 'axios';
// import ProtectedData from "./component/ProtectedData";

function LoginShowingPage() {
  const [data, setData] = useState('');

  const fetchProtectedData = async () => {
    try {
      const res = await axios.get('http://localhost:3003/protected', { withCredentials: true });
      setData(res.data.message);
    } catch (err) {
      alert('접근 실패: 인증 필요');
    }
  };
  
  return (
    <div>
      <button onClick={fetchProtectedData}>개인 정보 가져오기</button>
      <p>{data}</p>
    </div>
  );
}

const Study1119 = () =>{
    return(
        <>
            <h1>React와 Node.js 연동 예제</h1>
            <LoginForm />
            {/* <ProtectedData /> */}
            <LoginShowingPage />
            <TaskLoginFunction />
        </>
    )
}
export default Study1119;

function TaskLoginFunction() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isTokenStored, setIsTokenStored] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3003/login', {
                id,
                password,
            });
            
            // 응답에서 JWT를 localStorage에 저장
            localStorage.setItem('token', response.data.token);
            setIsTokenStored(true);
            alert('로그인 성공!');
        } catch (error) {
            console.error(error);
            setIsTokenStored(false);
            alert('로그인 실패!');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>로그인</button>
            <br/>
            {isTokenStored && <p>JWT in local storage</p>}
        </div>
    );
}