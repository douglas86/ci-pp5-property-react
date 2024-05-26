// styling
import styles from "../../styles/organism/FooterOrganism.module.css";
import { h4Heading, thumbnail } from "../atom/elements";

import emailIcon from "../../assets/images/footer/Email.png";
import androidIcon from "../../assets/images/footer/Android Phone.png";
import githubIcon from "../../assets/images/footer/GitHub.png";
import LinkedinIcon from "../../assets/images/footer/LinkedIn Circled.png";

const FooterOrganism = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {h4Heading("London Properties")}
        <div className={styles.thumbnails}>
          {thumbnail(githubIcon, "github icon")}
          {thumbnail(LinkedinIcon, "linkedin icon")}
        </div>
      </div>
      <div className={styles.contactInformation}>
        <div className={styles.section}>
          {thumbnail(emailIcon, "email icon")}
          {h4Heading("douglasmaxton@gmail.com")}
        </div>
        <div className={styles.section}>
          {thumbnail(androidIcon, "android icon")}
          {h4Heading("074 427 81303")}
        </div>
      </div>
    </footer>
  );
};

export default FooterOrganism;
