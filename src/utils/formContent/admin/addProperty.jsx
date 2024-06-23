export const addProperty = {
  SubmitURL: "/stocks/create/",
  buttonText: "Add Property",
  subheadingText: "Enter a new Property Below",
  populateForm: [
    {
      index: 1,
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
      name: "property_address",
    },
    {
      index: 2,
      label: "Town",
      type: "text",
      placeholder: "Enter your town",
      name: "property_area",
    },
    {
      index: 3,
      label: "Postcode",
      type: "text",
      placeholder: "Enter your postcode",
      name: "area_code",
    },
    {
      index: 4,
      label: "Property Photo",
      type: "file",
      placeholder: "Enter your property photo",
      name: "property_image",
    },
  ],
  Success: {
    payload: false,
    message: "You have successfully created property",
  },
};
