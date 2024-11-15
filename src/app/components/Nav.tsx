"use client"
import Link from "next/link"
import "../globals.css";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav(){
    const pathname = usePathname();
    
    function renderHomeButton():React.ReactNode{
        let linkValue:React.ReactNode;

        if(pathname === "/"){
            linkValue = <p><b><u>Home</u></b></p>; 
        }
        // else if(pathname.includes('detail')){
        //     linkValue = <p>Back to Home</p>
        // }
        else {
            linkValue = <p>Home</p>
        }
        
        return linkValue; 
    }

    return(
        <div className="fixed top-0 bg-white w-screen p-10 z-10 shadow-lg">
            <div className="flex flex-row justify-center gap-5">
                <Link className="hover:underline" href="/">{renderHomeButton()}</Link>
                <Link className="hover:underline" href="/contact">{pathname =="/contact" ? <p><b><u>Contact</u></b></p> : <p>Contact</p>}</Link>
            </div>
        </div>
    )
}