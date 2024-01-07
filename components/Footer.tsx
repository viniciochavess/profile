import Image from 'next/image'
import github from '@/app/assets/github.png'
import instragram from '@/app/assets/instagram.png'
import linkedin from '@/app/assets/linke.png'

import classes from './Footer.module.css'
export function Footer(){
    return(
        <>
            <footer className={classes.container} style={{position:"relative"}}>
                <div className={classes.nameContainer} >
                    <p className={classes.name} >vinicio chaves © {new Date().getFullYear()}</p>
                </div>
                <div className={classes.socialmedia}>
                    <a href='https://github.com/viniciochavess' target='_blank'><Image src={github.src} width={40} height={40} alt='github'/></a>
                    <a href='https://www.instagram.com/viniciochavess/' target='_blank'><Image src={instragram.src} width={40} height={40} alt='instagram'/> </a>
                    <a href='https://github.com/viniciochavess' target='_blank'><Image src={linkedin.src} width={40} height={40} alt='linkedin'/> </a>

                </div>
            </footer>
        </>
    )
}