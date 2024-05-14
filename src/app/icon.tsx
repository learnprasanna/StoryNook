import Link from "next/link";
import type { SVGProps } from "react";
import { ImageResponse } from "next/og";

export function IconParkOutlineBookshelf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 60 60"
      {...props}
    >
      <path
        fill="none"
        stroke="#ea6d13"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 6h34s4 2 4 7s-4 7-4 7H5s4-2 4-7s-4-7-4-7m38 22H9s-4 2-4 7s4 7 4 7h34s-4-2-4-7s4-7 4-7"
      ></path>
    </svg>
  );
}

export default function Icon() {
  return new ImageResponse(<div></div>);
}
