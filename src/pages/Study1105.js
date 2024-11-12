import React, {useState, useEffect} from "react"
import './study.css';
import { fetchDashboardStats } from '../services/dashboardService';
import LoginService from './component/LoginServiCoponent'
import MyForm from './component/FormComponent'

function UserList(){
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        const loadStats = async () => {
          const data = await fetchDashboardStats();
          setUsers(data.user);
        };
        loadStats();
      }, []);

    return(
        <div>s
            <h2>사용자 목록</h2>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

function Study1105(){
    return(
        <div>
            <UserList/>
            <LoginService />
            <MyForm />
        </div>
    );
}

export default Study1105 ;