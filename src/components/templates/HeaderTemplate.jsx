import { useState } from "react";

// styling
import styles from "../../styles/templates/HeaderTemplate.module.css";

const HeaderTemplate = () => {
  const [open, setOpen] = useState(false);

  const toggle = open ? (
    <i className="fa-solid fa-xmark"></i>
  ) : (
    <i className="fa-solid fa-bars"></i>
  );

  return (
    <header>
      <div className={styles.hamburger}>
        <button onClick={() => setOpen(!open)}>{toggle}</button>
        {open && <h1>Show</h1>}
      </div>
    </header>
  );
};

export default HeaderTemplate;
