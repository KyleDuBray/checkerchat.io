const INITIAL_STATE = {
  user: "",
  room: "",
  fields: {
    messageText: "",
    roomText: "",
  },
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chatReducer;
