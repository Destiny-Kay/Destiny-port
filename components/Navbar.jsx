'use client'
import Link from "next/link"
import styles from './components.module.css'
import Image from "next/image"
import logo from "../public/Destiny.svg"
import {gsap} from 'gsap/dist/gsap'
import { useIsomorphicLayoutEffect } from "@/helpers/isomorphicEffect"
import {useRef} from 'react'

export default function Navbar(){

    const nav = useRef(null)
    const tl = useRef(null)

    useIsomorphicLayoutEffect(() => {
        gsap.context(() => {
            gsap.from("nav", {
                y: "-100%",
                opacity: 0
            })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        }, nav)
    }, [])
    return(
        <header className={styles.navbarContainer} ref={nav}>
                <Link href="/"><Image alt="logo" src={logo} width="100" height="70"/></Link>
            <nav className={styles.navLinks}>
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}