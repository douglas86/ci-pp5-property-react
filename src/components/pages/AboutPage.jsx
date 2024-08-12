import PageTitleMolecule from "../molecule/PageTitleMolecule";
import StatementMolecule from "../molecule/StatementMolecule";

import house from "../../assets/images/about page/house.png";

import styles from "../../styles/pages/about.module.css";

/**
 * Represents the About Page component.
 * @returns {JSX.Element} The About Page component.
 */
const AboutPage = () => {
  // Array to populate the Statement molecule with data
  const missionCommitment = [
    {
      title: "Our Mission",
      paragraph:
        "Our mission is to empower you with the tools, information, and support you need to achieve your vision of obtaining your next property.",
    },
    {
      title: "Our Commitment",
      paragraph:
        "We are committed to transparency, integrity, and honesty in everything we do. Our goal is to build long-lasting relationships with our clients, with your satisfaction as our number one priority.",
    },
  ];

  return (
    <div className={styles.container}>
      <PageTitleMolecule />
      <div className={styles.section}>
        <StatementMolecule
          title="About Us"
          subHead="This is just a little detail about the best Properties in London"
          paragraph="Welcome to London Properties, the premier website in the property sector. Whether you are looking to buy, rent, or sell, we are confident that we can find the perfect property for you."
        />
        <img className={styles.image} src={`${house}`} alt="house" />{" "}
      </div>
      <div className={styles.section}>
        {missionCommitment.map(({ title, paragraph }) => (
          <StatementMolecule title={title} paragraph={paragraph} key={title} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
