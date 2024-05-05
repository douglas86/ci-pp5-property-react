// components
import HeaderTemplate from "./HeaderTemplate";
import FooterTemplate from "./FooterTemplate";

/**
 * This template will be used to render Header, Footer and all content in between
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutTemplate = ({ children }) => {
  return (
    <>
      <HeaderTemplate />
      <main>{children}</main>
      <FooterTemplate />
    </>
  );
};

export default LayoutTemplate;
