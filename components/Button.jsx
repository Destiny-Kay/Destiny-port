import styles from "./button.module.css"

export default function button ({name, className}){
    return(
        <button className={`${styles.buttonElement} ${className}`}>{name}</button>
    )
}