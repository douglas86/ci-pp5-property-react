/**
 * Retrieves the base64 representation of a file.
 * @param {File} file - The file to be encoded as base64.
 * @returns {Promise} A Promise that resolves with the base64 representation of the file.
 */
const getBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = "";

    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

/**
 * Handles the image file when selected by the user.
 *
 * @param {Event} event - The event object representing the file selection.
 * @param {Object} state - The current state object.
 * @param {Function} setState - The function to update the state.
 */
export const handleImage = (event, state, setState) => {
  let { file } = state;
  file = event.target.files[0];

  getBase64(file)
    .then((result) => {
      file["base64"] = result;
      setState({
        ...state,
        image: result,
      });
    })
    .catch((err) => {
      console.log("error", err);
    });

  setState({
    ...state,
    file: event.target.files[0],
  });
};
