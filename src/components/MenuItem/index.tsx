import Link from "next/link";

interface MenuItemProps {
  name: string,
  pageReference: string,
  active: boolean,
}

export const MenuItem = ({ name, pageReference, active }: MenuItemProps) => {
  return active ?
    <Link href={pageReference} className="text-2xl font-normal text-primary-main hover:text-secondary-text">{name}</Link> :
    <Link href={pageReference} className="text-2xl font-normal hover:text-secondary-text">{name} Inactive</Link>
};