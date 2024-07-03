export const updateProperty = (data) => {
  const { id, address, area, postcode, rent, image } = data;
  return {
    SubmitURL: `/stocks/update/${id}`,
    buttonText: "Update Property",
    subheadingText: "Update an existing property",
    populateForm: [
      {
        index: 1,
        label: "Address",
        type: "text",
        placeholder: "Enter your address",
        name: "property_address",
        value: address,
      },
      {
        index: 2,
        label: "Town",
        type: "text",
        placeholder: "Enter your town",
        name: "property_area",
        value: area,
      },
      {
        index: 3,
        label: "Postcode",
        type: "text",
        placeholder: "Enter your postcode",
        name: "area_code",
        value: postcode,
      },
      {
        index: 4,
        label: "Rent",
        type: "number",
        placeholder: "Enter your rent",
        name: "rent",
        value: rent,
      },
      // {
      //   index: 5,
      //   label: "Property Photo",
      //   type: "file",
      //   placeholder: "Enter your property photo",
      //   name: "property_image",
      //   value: image,
      // },
    ],
    Success: {
      payload: true,
      message: "You have successfully updated property",
    },
  };
};
