import { SVGProps } from "react";
export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#2C2B2A"
      fillOpacity={0.87}
      d="M14.037 6.078H3.285l4.698-4.5a.902.902 0 0 0 0-1.308.989.989 0 0 0-1.358 0L.282 6.345a.891.891 0 0 0 0 1.3l6.334 6.085a.98.98 0 0 0 .678.27.98.98 0 0 0 .679-.27.89.89 0 0 0 0-1.3L3.285 7.922h10.752c.53 0 .963-.415.963-.922 0-.507-.433-.922-.963-.922Z"
    />
  </svg>
);
