// components
import AuthFormMolecule from "../molecule/AuthFormMolecule";
import GeneralFormMolecule from "../molecule/GeneralFormMolecule";

/**
 * Displaying of form data based on state store
 * @returns {JSX.Element}
 * @constructor
 */
const FormOrganism = ({ auth }) => {
  return <>{auth ? <AuthFormMolecule /> : <GeneralFormMolecule />}</>;
};

export default FormOrganism;
