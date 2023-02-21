import React, { FC } from "react";

const BgEllipse: FC = () => {
  return (
    <svg
      width="700"
      height="778"
      viewBox="0 0 700 778"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.21"
        cx="404"
        cy="374"
        r="404"
        fill="url(#paint0_radial_152_693)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_152_693"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(404 374) rotate(90) scale(280.399)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BgEllipse;
