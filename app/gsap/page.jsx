'use client'
import {gsap} from "gsap/dist/gsap"
import {useLayoutEffect, useRef} from 'react'


export default function gsapanimation(){


    const myStyles = {
        width: "100px",
        height: "100px",
        marginBottom: "20px",
        backgroundColor: "green"
    }

    const container = useRef(null)
    const tl = useRef(null)

    useLayoutEffect(() =>{
        const ctx = gsap.context(() =>{
            tl.current = gsap.timeline()

            .to(".square1", {
                x: "40vw",
                rotate: 180,
                duration: 2
            })
            .to(".square2", {
                x:"30vw",
                rotation: 360,
                duration: 1
            })
            .to(".square3",{
                x: "100vw",
                duration: 2,
                repeat: 1,
                yoyo: true
            })
        }, container)

        return () => ctx.revert()

    }, [])
    
    return(

    <div ref={container}>
        <h1>This is the gsap animation page</h1>
        <div style={myStyles} className="square1">square 1</div>
        <div style={myStyles} className="square2">square 2</div>
        <div style={myStyles} className="square3">square 3</div>
        <div style={myStyles} className="square4">square 4</div>
    </div>
    )
}