import styles from "./button.module.css"

export default function button ({name, className, onClick}){
    return(
        <button className={`${styles.buttonElement} ${className}`} onClick={onClick}>{name}</button>
    )
}