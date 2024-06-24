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

export const handleImage = (event, state, setState) => {
  let { file } = state;
  file = event.target.files[0];

  getBase64(file)
    .then((result) => {
      file["base64"] = result;
      setState({
        ...state,
        base64Url: result,
        file,
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
