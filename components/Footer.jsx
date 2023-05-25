import Image from "next/image";
import Button from "./Button"
import styles from "./components.module.css"

export default function Footer(){
    return(
        <>
        <div> 
            <Image alt=""/>
            <Image alt=""/>
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