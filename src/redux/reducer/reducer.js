let initialState = {
  contactList: [],
  keyword: '',
};

function reducer(state = initialState, action) {
  const { type, payload } = action; // 객체 destructuring 문법
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case 'SEARCH_BY_NAME':
      return { ...state, keyword: payload.keyword };
    default:
      return { ...state };
  }
}

export default reducer;
