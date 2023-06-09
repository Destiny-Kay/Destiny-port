'use client'
import Button from "./Button"
import Link from "next/link"

export default function ResumeButton(){

    return (
        <Link href="/resume/resume.pdf" target="_blank">
            <Button name={"View Resume"} />
        </Link>
    )  
}