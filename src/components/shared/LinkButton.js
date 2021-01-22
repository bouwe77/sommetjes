import React from "react";
import Button from "./Button";
import styles from "./LinkButton.module.css";

export default function LinkButton({ children, className, ...rest }) {
  const classNames = `${styles["button-as-link"]} ${className}`;

  return (
    <Button className={classNames} {...rest}>
      {children}
    </Button>
  );
}
