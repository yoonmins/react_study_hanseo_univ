import React from "react"
import './study.css';
import ParentComponent from "./component/ParaentComponent";
import { Link } from 'react-router-dom';
import AllSessionGetInput from "./component/GetSessioData";


function Study1112(){
    return(
        <div>
            <h1>Example 12: useState with lifting state up</h1>
            <ParentComponent />
            <h2>Go to user login page</h2>
            <Link to="/user/1">Check to User</Link>
            <h2>Go to user Session page</h2>
            <Link to="/session">go to user session page</Link>
            <h2>Go to user Cookie page</h2>
            <Link to="/cookie">go to user Cookie session page</Link>
            <h2>Go to user LocalStorage page</h2>
            <Link to="/local">go to user local session page</Link>
            <br/><br/>
            <AllSessionGetInput />
        </div>
    );
}

export default Study1112 ;