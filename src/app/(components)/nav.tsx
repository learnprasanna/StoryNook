import Link from "next/link";
import type { SVGProps } from "react";

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

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <IconParkOutlineBookshelf
            className="icon"
            style={{
              transform: "scaleY(-1)",
              marginTop: "2px",
              width: "48px",
              height: "48px",
            }}
          />
        </Link>
        <p
          className="text-default-text"
          style={{ marginTop: "10px", fontSize: "23px" }}
        >
          STORYNOOK
        </p>
      </div>
    </nav>
  );
};

export default Nav;
