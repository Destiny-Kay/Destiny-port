'use client'
import styles from "./about.module.css"
import ContentContainer from "../../components/Contentcontainer"
import ResumeButton from "@/components/ResumeButton"
import Link from "next/link"
import Image from "next/image"

export default function About (){
    return(
        <div className={styles.container}>
            <h1>WHO AM I</h1>  

            <ContentContainer 
                content={``}
            >
                <p>
                    I am Destiny, a web designer and developer based in Nairobi. I am a passionate 
                    designer and I love exploring my creativity through design. My designing journey dates back to my childhood
                    when I used to redraw cartoons that I had watched. I love seeing exceptionally good designs 
                    all around me. Coding and solving problems with code is something that makes me super happy except when there's a bug &#128027;: .. 
                    I also read a lot on artificial intelligence and philosophy ...Meh.
                    I enjoy my work and I am always yearning to creating new and exciting experiences for people on the web.
                </p>
                <br />
                <p>
                    Aside from staring at a computer screen the whole day I experience immense satisfaction from what nature provides,
                    it calms me to see green life around me and I advocate for green energy and sustainable solutions.
                    I am an active hult prize member and I love what they do. 
                </p>
            </ContentContainer>
        
            {/* Add another div here to cover the title plus the content*/}
            <h1 className={styles.centerContent}>SKILLS AND RELEVANT EXPERIENCE</h1>
            <ContentContainer 
                content={``}
            >
                <p>
                I have been working as a freelance designer for about a year now, my design work is largely user centric
                and I give a high preference to business objectives in my designs. So it is always a win win for both client 
                and the user. I specialize in the MERN stack for web development. I have worked with python and c in my daily dev
                work. I have had experience as a junior developer at SOMO Africa (a social impact organization that empowers entrepreneurs) and throughout the internship I gained a lot
                of hands on skills, this extended my classroom theoritical coursework.
                
                </p>
                <p>Checkout my  
                    <Link href="https://www.linkedin.com/in/destinykevogo/" target="_blank" style={{color: "#00A8BD ", textDecoration:"underline"}}> LinkedIn </Link> 
                    profile for more about me.</p>
                    <br/>
                <p style={{textTransform: "uppercase", color: "#D5FC65"}}>Some tools I use to bring ideas to life:</p>
                <div className={styles.grid}>
                    <Image src="/images/javascript.svg" alt="javascript" width="100" height="100" className={styles.div1}></Image>
                    <Image src="/images/python.svg" alt="python" width="100" height="100" className={styles.div2}></Image>
                    <Image src="/images/c.svg" alt="c" width="100" height="100" className={styles.div3}></Image>
                    <Image src="/images/adobexd.svg" alt="adobeXD" width="100" height="100" cclassName={styles.div4}></Image>
                    <Image src="/images/figma.svg" alt="Figma" width="100" height="100" className={styles.div5}></Image>
                    <Image src="/images/react.svg" alt="React" width="100" height="100" className={styles.div6}></Image>
                    <Image src="/images/nextjs.svg" alt="Nextjs" width="100" height="100" className={styles.div7}></Image>
                    <Image src="/images/mongodb.svg" alt="mongoDB" width="100" height="100" className={styles.div8}></Image>
                    <Image src="/images/nodejs.svg" alt="nodejs" width="100" height="100" className={styles.div9}></Image>
                </div>
            </ContentContainer>
            <ResumeButton/>
            
        </div>
    )
}
