import Image from 'next/image'
import React from 'react'

import headerLogo from '@/assets/logo.png'
import classes from './header.module.css'
import Link from 'next/link'
import NavLink from './navLink'

const Header = () => {
    return (
        <header className={classes.header}>
            <Link href={'/'} className={classes.logo}>
                <Image src={headerLogo} alt="NextLevel Food" priority />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/community">Community</NavLink>
                    </li>
                    <li>
                        <NavLink href="/meals">Meals</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header