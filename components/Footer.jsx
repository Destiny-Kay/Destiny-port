'use client'
import Image from "next/image";
import styles from "./components.module.css"
import image from "../public/Exclude.svg"
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {keys} from "../data/apikeys.js"


export default function Footer(){
    const form = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
                'maildestiny', 
                "template_t0710l4", 
                form.current,
                "0ASs0dGNarwZbDP7w")
            .then((result) => {
                alert("Message sent, I will get back to you", result.text)
            }, (error) => {
                alert("An error occured while sending the email, if this persists email me directly:: destinykevogo@gmail.com")
                console.log(error.text)
            })
            e.target.reset()

    }
    return(
        <>
        <div className={styles.paperPlanes}> 
            <Image src={image} alt="image footer"/>
            <Image src={image} alt="image footer"/>
        </div>
        <div>
            <form className={styles.form} onSubmit={sendEmail} ref={form}>
                <h3 className={styles.centerText}>Have anything in mind? Let's work on it</h3>
                <p className={styles.formLabel}>Your name</p>
                <input name= "name" type="text" placeholder="Your name" required className={styles.input}/>
                <p className={styles.formLabel}>Email</p>
                <input name="email" type="text" placeholder="email" required className={styles.input}/>
                <p className={styles.formLabel}>Your message to me</p>
                <textarea name="message" type="text" placeholder="What is your project about?" className={styles.messageBox}/>
                <button className={styles.formButton}>Send message</button>
            </form>
            <div className={styles.footerBottom}>
                <p>Made with passion by ME</p>
                <p>&copy; destiny2023</p>
            </div>
        </div>
        </>
    )
}