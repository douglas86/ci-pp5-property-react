export const modalReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE SHOW MODAL":
      return { ...state, showModal: true };
    case "TOGGLE HIDE MODAL":
      return { ...state, showModal: false, templateModal: false };
    case "LOAD MODAL HEADER":
      return { ...state, modalHeader: payload };
    case "LOAD FORM COMPONENT":
      return { ...state, formComponent: payload, templateModal: true };
    default:
      return state;
  }
};
