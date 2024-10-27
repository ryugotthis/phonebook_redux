import React from 'react';

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
        alt="사진"
      ></img>
      <div className="information-box">
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </div>
    </div>
  );
};

export default ContactItem;
