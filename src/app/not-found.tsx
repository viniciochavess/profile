import Link from 'next/link'
import classes from './not-found.module.css'

export default function NotFound(){
    return(
        <>
            <div className={classes.container} style={{position:"relative"}}>
                <h1 className={classes.text}>Página Não Encontrada</h1>
                <Link className={classes.link} href="/">Voltar Ao Portfolio</Link>
            </div>
        </>
    )
}