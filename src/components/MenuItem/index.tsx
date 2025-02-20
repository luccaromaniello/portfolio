import Link from "next/link";

interface MenuItemProps {
  name: string,
  pageReference: string,
  active: boolean,
}

export const MenuItem = ({ name, pageReference, active }: MenuItemProps) => {
  return active ?
    <Link href={pageReference} className="text-base font-medium text-primary-main hover:text-content-tertiary">{name}</Link> :
    <Link href={pageReference} className="text-base font-medium hover:text-content-tertiary">{name}</Link>
};