export const userReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE USER DATA":
      return { ...state, user: payload };
    default:
      return state;
  }
};
