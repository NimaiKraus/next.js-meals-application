'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classes from './nav-link.module.css'

interface NavLinkProps {
    href: string,
    children: React.ReactNode
}

const NavLink = ({children, href}: NavLinkProps) => {
    const path = usePathname();

  return (
    <Link className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link} href={href}>
        {children}
    </Link>
  )
}

export default NavLink