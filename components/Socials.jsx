"use client"

import GithubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import styles from "./components.module.css"
import Link from "next/link"

export default function Socials (){

    return(
        <div className={styles.iconsContainer}>
            <Link href="https://github.com/Destiny-Kay" target="/">
                <GithubIcon className={styles.iconButtons}/>
            </Link>
            <Link href="https://twitter.com/Destinykevogo" target="/">
                <TwitterIcon className={styles.iconButtons}/>
            </Link>
            <Link href="https://www.linkedin.com/in/destinykevogo/" target="/">
                <LinkedInIcon className={styles.iconButtons}/>
            </Link>
            <Link href="https://wa.me/+25406917928" target="/">
                <WhatsAppIcon className={styles.iconButtons}/>
            </Link>
        </div>
    )
}