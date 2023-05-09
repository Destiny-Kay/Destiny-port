import Image from 'next/image'
import styles from './page.module.css'
import photo from "../public/Ellipse 17.svg"
import emoji from "../public/emoji_waving_hand.svg"
import Contentcontainer from "../components/Contentcontainer"
import Button from "../components/Button"

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={`${styles.herosection}`}>
          <Image alt="A photo of Destiny" src={photo} width={300}/>
          <p>Hi there I am Destiny a software developer and designer.</p>
        </div>
        <div className={`${styles.herosection}`}>
          <h2 className={`${styles.herotextSmall}`}>
            Let's uncover how
          </h2>
          <h1 className={`${styles.herotextLarge}`}>DESIGN THINKING</h1>
          <h2 className={`${styles.herotextSmall}`}>can change the way we see the world</h2>
        </div>
      </div>
      <div>
        <h1>Place the three circles here</h1>
      </div>
      <Image src={emoji} alt="waving hand emoji"/>
      <h1>HOLA!</h1>
      <Contentcontainer
        content={`Hello, welcome to my other self, my name is Destiny and I design and develop websites.
                  Thank you for coming this far, I appreciate your effort in scrolling down. Anyway I love designing
                  and developing intuitive and friendly user experiences on the weeb. I do that with passion. I make 
                  clean and friendly designs. I have experience in  developing full stack applications.
                  I get high on coffee and music keeps me going`} 
      />

      <h2>I am open to collaboration...</h2>
      <Button name={`Let's collaborate`} />
    </div>
  )
}
