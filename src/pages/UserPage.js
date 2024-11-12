import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

  const { id } = useParams(); 

  function onIncrease() {
    window.location.href = `/user/${parseInt(id) + 1}`;
  }

  return (
    <div>
      <h1>User ID: {id}</h1>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

export default User;