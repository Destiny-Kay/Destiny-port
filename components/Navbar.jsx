'use client'
import Link from "next/link"
import styles from './components.module.css'
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {Island_Moments} from 'next/font/google'

const islandMoments = Island_Moments(
    {
        subsets: ["latin"],
        weight: ["400"],
        display: 'swap'
    }
)
export default function Navbar(){
    const [open, setOpen] = useState(false)

    function toggleClass (){
            setOpen(prev => !prev)
    }

    const pathname = usePathname()

    return(
        <header className={styles.header}>
            <Link href="/"><span className={`${islandMoments.className} ${styles.logo}`}>Destiny</span></Link>
            <div className={`${styles.hamburger}`} onClick={toggleClass}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <nav className={`${styles.navLinks} ${open && styles.open}`}>
                <ul className={open && styles.showLinks}>
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