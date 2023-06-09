'use client'
import Image from 'next/image'
import styles from './page.module.css'
import photo from "../public/Ellipse 17.svg"
import emoji from "../public/emoji_waving_hand.svg"
import Contentcontainer from "../components/Contentcontainer"
import Button from "../components/Button"
import {gsap} from 'gsap/dist/gsap' //importing gsap
import { useRef, useLayoutEffect } from 'react'
import Circle from '../components/Circle'

export default function Home() {

  ///////*****////
  // const hero = useRef(null)
  // const tl = useRef(null)
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() =>{
  //     tl.current = gsap.timeline()
  //     .from("#image", {
  //       scale: 0,
  //       opacity: 0,
  //       ease: "back",
  //       autoAlpha:0
  //     })
  //     .from("#intro", {
  //       y: "100%",
  //       duration: 1,
  //       opacity: 0,
  //       ease:"back",
  //     })
  //     .from("#herotext",{
  //       x: "50%",
  //       duration: 1,
  //       opacity: 0,
  //       ease: "back"
  //     })
  //     .to("#wavingHand", {
  //       rotate:45,
  //       duration: 1,
  //       transformOrigin: "bottom center",
  //       repeat: 2,
  //       yoyo: true
  //     })
  //   }, hero)

  //   return () => ctx.revert()
  // }, [])
  /////*****/////
  return (
    <div className={styles.heroContainer} >
      <div className={styles.hero}>
        <div className={`${styles.herosection}`}>
          <Image alt="A photo of Destiny" src={photo} width={300} id='image' className={styles.image}/>
          <p id='intro' className={styles.intro}>Hi there I am Destiny a software developer and designer.</p>
        </div>
        <div className={`${styles.herosection} ${styles.textLeft} ${styles.heroText}`} id='herotext'>
          <h2 className={`${styles.herotextSmall}`}>
            Let&apos;s uncover how
          </h2>
          <h1 className={`${styles.herotextLarge}`}>DESIGN THINKING</h1>
          <h2 className={`${styles.herotextSmall}`}>can change the way we see the world</h2>
        </div>
      </div>
      <div className={styles.heroCircles}>
        <Circle radius="223px" bgColor="#FA9A0B" top="70vh" left="70vw"/>
        <Circle radius="186px" bgColor="#0F7A26" top="60vh" left="80vw"/>
        <Circle radius="156px" bgColor="#F50B8A" top="60vh" left="65vw"/>
      </div>
      <div className={styles.wavingHand} > 
        <Image src={emoji} alt="waving hand emoji" id='wavingHand'/>
        <h1>HOLA!</h1>
      </div>
      <Contentcontainer
        content={`Hello, welcome to my other self, 
                    my name is Destiny and I design and develop websites. Thank you for coming this far, 
                    I appreciate your effort in scrolling down. Anyway I love designing and developing intuitive 
                    and friendly user experiences on the web, I do that with passion. I make clean and friendly designs. 
                    I have experience in developing full stack web applications.
        `} 
      />

      <h2>I am open to collaboration...</h2>
      <Button name={`Let's collaborate`} />
    </div>
  )
}
