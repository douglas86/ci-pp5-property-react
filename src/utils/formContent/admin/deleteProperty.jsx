export const deleteProperty = (id) => {
  return {
    SubmitURL: `/stocks/delete/${id}/`,
    buttonText: "Delete",
    subheaderText: "Are you sure you want to delete this?",
    populateForm: [],
    Success: {
      payload: true,
      message: "You have successfully deleted your property",
    },
  };
};