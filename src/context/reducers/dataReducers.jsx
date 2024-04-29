export const dataReducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_DATA":
      return { ...state, data: payload };
    default:
      return state;
  }
};
