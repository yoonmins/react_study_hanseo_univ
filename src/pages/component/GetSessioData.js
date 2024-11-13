import React, {useState} from "react";


const AllSessionGetInput = () =>{    
    //input value state
    const [inputValue, setInputValue] = useState('');
    //local, session, cookie set state
    const [localStorageData, setLocalStorageData] = useState('allSessionStorageData');
    const [sessionStorageData, setSessionStorageData] = useState('allSessionStorageData');
    const [cookieData, setCookieData] = useState('allSessionStorageData');

    // update function | All sesion Data
    function updateSessionStorage() {
        sessionStorage.setItem('allSessionStorageData', inputValue);
        localStorage.setItem('allSessionStorageData', inputValue);
        document.cookie = `cookieData=${inputValue}`;
    }

    // get function | All sesion(local, cookie, session) Data
    function getLocalStorage() {
        const localStorageData = localStorage.getItem('allSessionStorageData');
        setLocalStorageData(localStorageData);
      }
    
    function getSessionStorage() {
        const sessionStorageData = sessionStorage.getItem('allSessionStorageData');
        setSessionStorageData(sessionStorageData);
    }
    
    function getCookie() {
        if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieData='))) {
          const cookieData = document.cookie
            .split('; ')
            .find((row) => row.startsWith('cookieData='))
            .split('=')[1];
          setCookieData(cookieData);
        }
    }

    return(
        <>
            <h2>Send cookie</h2>
            {/* 전달하려는 inut 값 */}
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)} 
            />
            
            {/* update input data */}
            <button onClick={updateSessionStorage}>Update Session Storage</button>
            <br /><br /><br />

            {/* get data */}
            <button onClick={getLocalStorage}>Get Local Storage</button>
            <p>Local Storage: {localStorageData}</p>

            <button onClick={getCookie}>Get Cookie</button>
            <p>Cookie: {cookieData}</p>

            <button onClick={getSessionStorage}>Get Session Storage</button>
            <p>Session Storage: {sessionStorageData}</p>
        </>
    );
}
export default AllSessionGetInput