import styles from "./about.module.css"
import Button from "../../components/Button"
import ContentContainer from "../../components/Contentcontainer"

export default function About (){

    return(
        <div className={styles.container}>
            <Button name={"View Resume"} className={styles.buttonTopRight}/>
            <h1>WHO AM I</h1>  

            <ContentContainer 
                content={`I am Destiny, a web designer and developer based in Nairobi. I am a passionate 
                designer and I love designing. My designing journey dates back to my childhood
                 when I used to redraw cartoons that I had watched. I love seeing impeccable designs 
                 all around me. i love coding and solving problems with code. I love artificial intelligence 
                 and the future this technology will present to us as humans.`}
            />
        
            {/* Add another div here to cover the title plus the content*/}
            <h1 className={styles.centerContent}>SKILLS AND RELEVANT EXPERIENCE</h1>
            <ContentContainer 
                content={`
                    I have been working as a freelance designer and developer, through my design work I have been able to design 
                    a wide range of websites; from ecommerce websitesto music apps. i have also been involved in designing simple 
                    logos for independent professionals. I am a skilled front-end developer with proficiency in the react-JS framework.
                    I have also volunteered to develop websites for non-profits and other social impactorganizations. 
                    Checkout my LinkedIn profile for more about me.
                    `}
            />


            {/* PREVIOUS CONTENT... TODO:: FIND A WAY TO DISPLAY CHILD ELEMENTS IN A REACT COMPONENT
            <div className={styles.gradientBorder}>
                <div>
                    <ul>
                        <li>UX DESIGN</li>
                        <li>FIGMA</li>
                    </ul>
                </div>
                <div>                  
                    <p className={styles.divContent} style={{fontSize: "24px"}}>
                    I have been working as a freelance designer and developer, through my design work I have been able to design 
                    a wide range of websites; from ecommerce websitesto music apps. i have also been involved in designing simple 
                    logos for independent professionals. I am a skilled front-end developer with proficiency in the react-JS framework.
                    I have also volunteered to develop websites for non-profits and other social impactorganizations. Checkout my LonkedIn profile for more about me.
                    </p>
                </div>
            </div> */}
            
        </div>
    )
}
