// SubmitURL: url path of were the data gets sent to
// buttonText: what do you want the button to say
// subheadingText: what needs to be said in the form above the text boxes
// loadForm: name of the dispatch function in formsReducers to load form on button click
// populateForm: data to be populated in the Form.Group
// Success: if the form has been sent successfully with a response from API
//     update_user: dispatch function to update user information
//     update_profile: dispatch function to update profile information
//     payload: if data is needed for the state store
//         if true data needs to be saved to state store
//         if false no data is needed for state store

export * from "./auth/register";
export * from "./auth/signin";
export * from "./auth/signout";
