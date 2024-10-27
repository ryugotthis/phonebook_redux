import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Add = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault(); // 새로고침 막기
    console.log('추가');
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name: name, phoneNumber: phoneNumber },
    });
    // 키값과 value가 같을땐 하나만 사용해도 됨 {name,phonNumber}
  };

  return (
    <form className="add" onSubmit={addContact}>
      <p>Name</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <p>Phone Number</p>
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(event) => setPhoneNumber(event.target.value)}
      ></input>
      <button type="submit">추가</button>
    </form>
  );
};

export default Add;
