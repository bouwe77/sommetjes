import React from "react";

export default function Button({ children, className, ...rest }) {
  const classNames = `${className} disable-dbl-tap-zoom`;

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
}
