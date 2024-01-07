import classes from './PersonalProjects.module.css'
export function PersonalProjects(){
    return(
        <>
            <h1 className={classes.text}>Projetos Pessoais</h1>
            <div className={classes.card}>
                <p className={classes.cardText}>Em construção</p>
            </div>
        </>
    )
}