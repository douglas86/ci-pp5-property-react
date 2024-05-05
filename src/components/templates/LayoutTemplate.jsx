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
    <div>
      <HeaderTemplate />
      <main>{children}</main>
      <FooterTemplate />
    </div>
  );
};

export default LayoutTemplate;
