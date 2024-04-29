export const formsReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE FORMS":
      return { ...state, forms: payload };
    default:
      return state;
  }
};
