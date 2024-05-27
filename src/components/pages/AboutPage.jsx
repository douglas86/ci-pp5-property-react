// components
import PageTitleMolecule from "../molecule/PageTitleMolecule";

import styles from "../../styles/pages/about.module.css";
import { subheading } from "../atom/elements/subheading";
import { heading } from "../atom/elements";

import house from "../../assets/images/about page/house.png";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <PageTitleMolecule />
      <div className={styles.description}>
        <div className={styles.about}>
          {heading("About Us")}
          {subheading(
            "This is just a little detail about the best Properties in London",
          )}
          <p>
            Welcome to London Properties, the best website in the Property
            sector. Weather you are looking to buy, rent or sell. I am sure that
            we can find the correct property for you.
          </p>
        </div>
        <img className={styles.image} src={`${house}`} alt="house" />{" "}
      </div>
      <div className={styles.description}>
        <div className={styles.about}>
          {heading("Our Mission")}
          <p>
            Our mission is to help empower you with the tools, information and
            support that you need to help you with achieving your vision to
            obtain your next property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
