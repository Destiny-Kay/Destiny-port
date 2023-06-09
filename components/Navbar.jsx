'use client'
import Link from "next/link"
import styles from './components.module.css'
import Image from "next/image"
import logo from "../public/Destiny.svg"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar(){
    const [open, setOpen] = useState(false)

    function toggleClass (){
            setOpen(prev => !prev)
    }

    const pathname = usePathname()

    return(
        <header className={styles.header}>
            <Link href="/"><Image alt="logo" src={logo} width="100" height="70" /></Link>
            <div className={`${styles.hamburger}`} onClick={toggleClass}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <nav className={`${styles.navLinks} ${open && styles.open}`}>
                <ul className={ open && styles.showLinks}>
                    <li>
                        <Link href="/" className= {`${styles.navLinkItem} ${pathname === "/" && styles.active}`} >Home</Link>
                    </li>
                    <li>
                        <Link href="/work" className={`${styles.navLinkItem} ${pathname === "/work" && styles.active}`}>Work</Link>
                    </li>
                    <li>
                        <Link href="/about" className={`${styles.navLinkItem} ${pathname === "/about" && styles.active}`}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}