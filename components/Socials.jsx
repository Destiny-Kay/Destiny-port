"use client"

import GithubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import styles from "./components.module.css"

export default function Socials (){
    return(
        <div className={styles.iconsContainer}>
            <GithubIcon className={styles.iconButtons}/>
            <TwitterIcon className={styles.iconButtons}/>
            <LinkedInIcon className={styles.iconButtons}/>
            <WhatsAppIcon className={styles.iconButtons}/>
        </div>
    )
}