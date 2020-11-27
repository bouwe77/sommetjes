import React from "react";

export default ({ children, width = "300px" }) => (
  <div className="modal display-block">
    <section className="modal-main" style={{ width }}>
      {children}
    </section>
  </div>
);