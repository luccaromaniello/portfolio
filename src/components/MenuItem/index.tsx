import Link from "next/link";

interface MenuItemProps {
  name: string,
  pageReference: string,
  active: boolean,
  external?: boolean,
}

export const MenuItem = ({ name, pageReference, active, external }: MenuItemProps) => {
  return (
    external ?
      <a href={pageReference} rel="noreferrer" target="_blank" className="text-base font-medium hover:text-content-tertiary">{name}</a>
    :
      active ?
        <Link href={pageReference} className="text-base font-medium text-primary-main hover:text-content-tertiary">{name}</Link> :
        <Link href={pageReference} className="text-base font-medium hover:text-content-tertiary">{name}</Link>
  )
};