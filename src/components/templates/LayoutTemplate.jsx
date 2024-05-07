// components
import HeaderOrganism from "../organism/HeaderOrganism";
import FooterOrganism from "../organism/FooterOrganism";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  return (
    <>
      <HeaderOrganism />
      <main>{children}</main>
      <FooterOrganism />
    </>
  );
};

export default LayoutTemplate;
