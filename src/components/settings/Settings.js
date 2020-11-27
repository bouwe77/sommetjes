import React, { useState } from "react";
import Button from "../shared/Button";
import Modal from "../shared/Modal";

export default function Settings({ howManyQuestions, saveHowManyQuestions }) {
  const [open, setOpen] = useState(false);
  const [updatedHowManyQuestions, setUpdatedHowManyQuestions] = useState(
    howManyQuestions
  );

  function change(event) {
    const theValue = event.target.value;
    setUpdatedHowManyQuestions(theValue);
  }

  function cancel() {
    setUpdatedHowManyQuestions(howManyQuestions);
    setOpen(false);
  }

  function save() {
    const newValue = saveHowManyQuestions(updatedHowManyQuestions);
    setUpdatedHowManyQuestions(newValue);
    setOpen(false);
  }

  if (open)
    return (
      <Modal>
        <div className="settings-form">
          <div className="settings-row">
            <span className="settings-label">Aantal sommen</span>{" "}
            <input
              type="text"
              value={updatedHowManyQuestions}
              onChange={change}
              className="settings-input disable-dbl-tap-zoom"
              inputMode="numeric"
              maxLength="2"
            />
          </div>
          <div className="settings-row">
            <Button onClick={save} className="settings-button">
              OK
            </Button>
            <Button
              className="settings-button settings-cancel-button"
              onClick={cancel}
            >
              Annuleren
            </Button>
          </div>
        </div>
      </Modal>
    );

  return (
    <>
      <Button className="button-as-link" onClick={() => setOpen(true)}>
        Instellingen
      </Button>
    </>
  );
}
