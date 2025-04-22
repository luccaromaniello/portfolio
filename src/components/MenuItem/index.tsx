import Link from "next/link";
import "@/styles/typography.css";

interface MenuItemProps {
  name: string;
  darkTheme?: boolean;
  pageReference: string;
  active: boolean;
  external?: boolean;
}

export const MenuItem = ({
  name,
  darkTheme = false,
  pageReference,
  active,
  external,
}: MenuItemProps) => {
  return external ? (
    <a
      href={pageReference}
      rel="noreferrer"
      target="_blank"
      className={`${!darkTheme ? "light-theme-link" : "dark-theme-link"}`}
    >
      {name}
    </a>
  ) : (
    <Link
      href={pageReference}
      className={`
        ${
          !darkTheme
            ? `light-theme-link ${active ? "active-light-theme-link" : ""}`
            : `dark-theme-link ${active ? "active-dark-theme-link" : ""}`
        }`}
    >
      {name}
    </Link>
  );
};
