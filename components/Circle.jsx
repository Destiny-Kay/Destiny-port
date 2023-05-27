
export default function Circle({radius, bgColor, top, left, position}){
    const styles = {
        position: !position && "absolute",
        top: top,
        left: left,
        width: radius,
        height: radius,
        borderRadius: radius,
        background: `radial-gradient(50% 50% at 50% 50%, ${bgColor} 0%, rgba(250, 154, 11, 0) 100%`
    }
    return(
        <div style={styles}></div>
    )
}