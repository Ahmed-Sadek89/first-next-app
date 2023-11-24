"use client"
import Link from "next/link"
import styles from './navbar.module.css'
import { links } from "./links"
import DarkModeBtn from "../darkModeBtn/darkModeBtn"
import Image from "next/image"
import { useContext, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const {mode} = useContext(ThemeContext)
    return (
        <>
            <div className={styles.navbar}>
                <Link
                    href='/'
                    className={styles.navbar_logo}
                >lamamia</Link>
                <div className={styles.navbar_links}>
                    <DarkModeBtn />
                    {
                        links.map(index => (
                            <Link
                                href={`${index.url}`}
                                key={index.id}
                                className={`${styles.navbar_links_item} sadek`}
                            >
                                {index.title}
                            </Link>
                        ))
                    }
                    <button className={styles.navbar_links_logout} onClick={() => console.log('user is logged out!')}>
                        logout
                    </button>
                </div>
                <div className={styles.navbar_menubar} onClick={() => setMenu(prev => prev === true ? false : true)}>
                    <Image src='/menu.png' alt='menu' width={30} height={30} 
                    style={mode === 'dark' ? {filter: 'brightness(0) invert(1)'} : {filter: "none"}} />
                </div>
            </div>
            {
                menu === true &&
                <div className={styles.navbar_links_mobile}>
                    <DarkModeBtn />
                    {
                        links.map(index => (
                            <Link
                                href={`${index.url}`}
                                key={index.id}
                                className={`${styles.navbar_links_mobile_item}`}
                            >
                                {index.title}
                            </Link>
                        ))
                    }
                    <button className={styles.navbar_links_mobile_logout} onClick={() => console.log('user is logged out!')}>
                        logout
                    </button>
                </div>

            }
        </>
    )
}

export default Navbar