// styling
import styles from "../../styles/organism/FooterOrganism.module.css";
import { image, thumbnail, title } from "../atom/elements";

import emailIcon from "../../assets/images/footer/Email.png";
import androidIcon from "../../assets/images/footer/Android Phone.png";

const FooterOrganism = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInformation}>
        {thumbnail(emailIcon, "email icon")}
        <h4 className={styles.h4}>douglasmaxton@gmail.com</h4>
      </div>
    </footer>
  );
};

export default FooterOrganism;
