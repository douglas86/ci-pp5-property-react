import AxiosInstance from "../../API/AxiosInstance";

export const handleSubmit = async (event, form, data) => {
  event.preventDefault();

  await AxiosInstance.post(form.SubmitURL, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => res.data)
    .catch((err) => err.message);
};
