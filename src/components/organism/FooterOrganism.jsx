// components
import { h4Heading, thumbnail } from "../atom/elements";

// assets
import githubIcon from "../../assets/images/footer/GitHub.png";
import LinkedinIcon from "../../assets/images/footer/LinkedIn Circled.png";

// styling
import styles from "../../styles/organism/FooterOrganism.module.css";

const FooterOrganism = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <div className={styles.heading}>{h4Heading("London Properties")}</div>
        <div className={styles.thumbnails}>
          <div className={styles.thumbnail}>
            {thumbnail(githubIcon, "github icon")}
          </div>
          <div className={styles.thumbnail}>
            {thumbnail(LinkedinIcon, "linkedin icon")}
          </div>
        </div>
      </div>
      <div className={styles.contactInformation}>
        <div className={styles.section}>
          {h4Heading("douglasmaxton@gmail.com")}
        </div>
        <div className={styles.section}>{h4Heading("074 427 81303")}</div>
      </div>
    </footer>
  );
};

export default FooterOrganism;
