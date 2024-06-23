export const handleChange = (e, state, setState) => {
  e.preventDefault();

  const { name, value } = e.target;

  setState({
    ...state,
    [name]: value,
  });
};
