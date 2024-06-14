// components
import PageTitleMolecule from "../molecule/PageTitleMolecule";
import StatementMolecule from "../molecule/StatementMolecule";

// assets
import house from "../../assets/images/about page/house.png";

// styling
import styles from "../../styles/pages/about.module.css";

const AboutPage = () => {
  const missionCommitment = [
    {
      title: "Our Mission",
      paragraph:
        "Our mission is to help empower you with the tools, information and\n" +
        "            support that you need to help you with achieving your vision to\n" +
        "            obtain your next property.",
    },
    {
      title: "Our Commitment",
      paragraph:
        "We are committed to transparency, integrity and honesty in\n" +
        "            everything we do. Our goal is to build long lasting relationships\n" +
        "            with our clients. Your satisfaction is our number 1 priority",
    },
  ];

  return (
    <div className={styles.container}>
      <PageTitleMolecule />
      <div className={styles.section}>
        <StatementMolecule
          title="About Us"
          subHead="This is just a little detail about the best Properties in London"
          paragraph="Welcome to London Properties, the best website in the Property
            sector. Weather you are looking to buy, rent or sell. I am sure that
            we can find the correct property for you."
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
