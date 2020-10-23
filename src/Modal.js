import React from "react";

export default ({ children }) => (
  <div className="modal display-block">
    <section className="modal-main">{children}</section>
  </div>
);
