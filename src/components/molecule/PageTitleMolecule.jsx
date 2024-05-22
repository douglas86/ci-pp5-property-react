import { buttonClick } from "../atom/elements";

const PageTitleMolecule = () => {
  return (
    <div>
      <h1>London Properties</h1>
      <p>Welcome to the best property site in London</p>
      {buttonClick(() => console.log("clicked"), "Search Properties", "dark")}
    </div>
  );
};

export default PageTitleMolecule;
