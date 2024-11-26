import React, {useState} from "react";
import axios from 'axios';

const Task1126 = () =>{
    return(
        <>  
            <h1>React node.js 연동 문제</h1>
            <LoginForm/>
            <ProtectedData />
        </>
    )
}

export default Task1126;


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [protectedData, setProtectedData] = useState('');

  // 로그인 함수
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3003/login', {
        id: id,
        password: password,
      });

      console.log(response);

      const token = response.data.token; // 서버에서 받은 JWT
      localStorage.setItem('token', token); // Local Storage에 저장
      alert('로그인 성공');
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={id} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={name} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function ProtectedData() {
  const [data, setData] = useState('');

  // 보호된 API 호출 함수
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem('token'); // Local Storage에서 JWT 가져오기
      console.log(token);
      const response = await axios.get('http://localhost:3003/protected', {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰 추가
        },
      });

      setData(response.data.message); // 보호된 데이터 메시지
    } catch (error) {
      setData(error.response?.data?.message || '접근 불가');
    }
  };

  return (
    <div>
      <button onClick={fetchProtectedData}>보호된 데이터 가져오기</button>
      <p>{data}</p>
    </div>
  );
}
