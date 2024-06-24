export const modalReducers = (state, action) => {
  const { type } = action;

  switch (type) {
    case "TOGGLE SHOW MODAL":
      return { ...state, showModal: true };
    case "TOGGLE HIDE MODAL":
      return { ...state, showModal: false };
    default:
      return state;
  }
};
