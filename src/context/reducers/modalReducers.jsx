export const modalReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE SHOW MODAL":
      return { ...state, showModal: payload };
    default:
      return state;
  }
};
