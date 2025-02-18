import Link from "next/link";

interface MenuItemProps {
  name: string,
  pageReference: string,
}

export const MenuItem = ({name, pageReference}: MenuItemProps) => {
  return <>
    <Link href={pageReference} className="text-2xl">{name}</Link>
  </>
};