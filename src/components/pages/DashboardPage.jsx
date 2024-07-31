import AdminButtonsMolecule from "../molecule/AdminButtonsMolecule";
import SearchBarMolecule from "../molecule/SearchBarMolecule";

/**
 * Represents the Dashboard page.
 *
 * @returns {React.Element} The rendered Dashboard page component.
 */
const DashboardPage = () => {
  return (
    <>
      <AdminButtonsMolecule />
      <SearchBarMolecule placeholder="Search on Peoples Names" />
    </>
  );
};

export default DashboardPage;
