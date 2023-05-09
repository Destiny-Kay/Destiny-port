import Link from "next/link"
import styles from './components.module.css'
import Image from "next/image"
import logo from "../public/Destiny.svg"

export default function Navbar(){
    return(
        <header className={styles.navbarContainer}>
                <Link href="/"><Image src={logo} width="100" height="70"/></Link>
            <nav className={styles.navLinks}>
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}