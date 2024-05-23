import { SVGProps } from "react";
export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#828282"
      d="M10.937 5.75H2.559l3.66-3.66a.756.756 0 0 0 0-1.065.747.747 0 0 0-1.057 0L.219 5.967a.747.747 0 0 0 0 1.058l4.935 4.95a.747.747 0 1 0 1.058-1.057L2.559 7.25h8.378c.412 0 .75-.338.75-.75a.752.752 0 0 0-.75-.75Z"
    />
  </svg>
);
