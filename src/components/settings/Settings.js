import React, { useState } from "react";
import Button from "../shared/Button";
import LinkButton from "../shared/LinkButton";
import Modal from "../shared/Modal";
import styles from "./Settings.module.css";

export default function Settings({ howManyQuestions, saveHowManyQuestions }) {
  const [open, setOpen] = useState(false);
  const [updatedHowManyQuestions, setUpdatedHowManyQuestions] = useState(
    howManyQuestions
  );

  function cancel() {
    setUpdatedHowManyQuestions(howManyQuestions);
    setOpen(false);
  }

  function save() {
    const newValue = saveHowManyQuestions(updatedHowManyQuestions);
    setUpdatedHowManyQuestions(newValue);
    setOpen(false);
  }

  return (
    <>
      <LinkButton
        className={styles["settings-link"]}
        style={{ visibility: open ? "hidden" : "visible" }}
        onClick={() => setOpen(true)}
      >
        Instellingen
      </LinkButton>

      {open && (
        <Modal>
          <div className={styles["settings-form"]}>
            <div className={styles["settings-row"]}>
              <span className={styles["settings-label"]}>Aantal sommen</span>{" "}
              <input
                type="text"
                value={updatedHowManyQuestions}
                onChange={(event) =>
                  setUpdatedHowManyQuestions(event.currentTarget.value)
                }
                className={`${styles["settings-input"]} ${styles["disable-dbl-tap-zoom"]}`}
                inputMode="numeric"
                maxLength="2"
              />
            </div>
            <div className={styles["settings-row"]}>
              <Button onClick={save} className={styles["settings-button"]}>
                OK
              </Button>
              <Button
                className={`${styles["settings-button"]} ${styles["settings-cancel-button"]}`}
                onClick={cancel}
              >
                Annuleren
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
