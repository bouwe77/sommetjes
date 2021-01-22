import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <hr />
      <span className={styles["footer-text"]}>
        gemaakt door <a href="https://twitter.com/bouwe">Bouwe</a>{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>
      </span>
    </footer>
  );
}
