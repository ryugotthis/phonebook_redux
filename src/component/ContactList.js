import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  // const { contactList } = useSelector((state) => state.contactList);
  // const { keyword } = useSelector((state) => state.keyword);
  const { contactList, keyword } = useSelector((state) => state);
  // const { keyword, contactList } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    console.log('state엔 뭐가 있을까', what);
    if (keyword !== '') {
      console.log('키워드있음', keyword);
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
      console.log('키워드없음');
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
      {/* {contactList.map((item) => (
        <ContactItem item={item} />
      ))} */}
    </div>
  );
};

export default ContactList;
