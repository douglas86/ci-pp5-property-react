// components
import AdminButtonsMolecule from "../molecule/AdminButtonsMolecule";
import SearchBarMolecule from "../molecule/SearchBarMolecule";

const DashboardPage = () => {
  return (
    <>
      <AdminButtonsMolecule />
      <SearchBarMolecule placeholder="Search on Peoples Names" />
    </>
  );
};

export default DashboardPage;
