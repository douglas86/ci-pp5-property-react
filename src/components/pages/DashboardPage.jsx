import { buttonClick } from "../atom/elements";

const DashboardPage = () => {
  return (
    <>
      {buttonClick(() => console.log("user button clicked"), "Users", "dark")}
      {buttonClick(
        () => console.log("property button clicked"),
        "Property",
        "dark",
      )}
      {buttonClick(
        () => console.log("Add New Property"),
        "Add new Property",
        "success",
      )}
    </>
  );
};

export default DashboardPage;
