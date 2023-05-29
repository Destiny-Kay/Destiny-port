import Image from "next/image";
import Button from "./Button"
import styles from "./components.module.css"
import image from "../public/Exclude.svg"

export default function Footer(){
    return(
        <>
        <div className={styles.paperPlanes}> 
            <Image src={image} alt="image footer"/>
            <Image src={image} alt="image footer"/>
        </div>
        <div>
            <form className={styles.form}>
                <h3 className={styles.centerText}>send me a message</h3>
                <textarea placeholder="Any comments?" className={styles.messageBox}/>
                <Button name={"send"} />
            </form>
            <div className={styles.footerBottom}>
                <p>Made with passion by ME</p>
                <p>&copy; destiny2023</p>
            </div>
        </div>
        </>
    )
}