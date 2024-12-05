import React from "react";

function Plus({ color = "#fff", size = "24" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5v14M5 12h14"
      />
    </svg>
  );
}

export default Plus;
