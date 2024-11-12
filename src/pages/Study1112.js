import React, {useState, useEffect} from "react"
import './study.css';
import ParentComponent from "./component/ParaentComponent";
import { Link } from 'react-router-dom';

function Study1112(){
    return(
        <div>
            <h1>Example 12: useState with lifting state up</h1>
            <ParentComponent />
            <h3>Go to user login page</h3>
            <Link to="/user/1">Check to User</Link>
        </div>
    );
}

export default Study1112 ;