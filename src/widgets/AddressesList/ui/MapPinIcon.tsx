import { SVGProps } from "react";
export const MapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#52AE32"
      fillRule="evenodd"
      d="M5 .952a5 5 0 0 1 4.903 5.985c-.441 3.326-4.877 7.11-4.877 7.11S1.252 10.828.32 7.718A5 5 0 0 1 5 .953Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M6.905 5.953a1.905 1.905 0 1 0-3.81 0 1.905 1.905 0 0 0 3.81 0Z"
    />
  </svg>
);
