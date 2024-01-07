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
                    <Image src={github.src} width={40} height={40} alt='github'/>
                    <Image src={instragram.src} width={40} height={40} alt='instagram'/>
                    <Image src={linkedin.src} width={40} height={40} alt='linkedin'/>

                </div>
            </footer>
        </>
    )
}