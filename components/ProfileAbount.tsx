import Image from "next/image";
import img from '@/app/assets/profileImg.png'
import classes from './ProfileAbount.module.css'
export function ProfileAbount(){
    return(
        <>
        <h1 className={classes.text}>Sobre Mim</h1>
        <section className={classes.aboutContainer}>
            <div className={classes.imgProfile}>
              <Image
              width={250}
              height={250}
                className="imgProfile2"
                src={img.src}
                alt="img profile"
              />
            </div>
            <div className={classes.containerTextProfile}>
              <div className={classes.boxblur}></div>
              <div className={classes.boxblurnot}> 
              <p>
              "Olá, meu nome é Vinicio, tenho 25 anos e sou formado no curso de Análise e Desenvolvimento de Sistemas pela Unifasb-Ba. Atualmente, estou cursando Arquitetura de Software na PUC-Minas, com foco na linguagem de programação JavaScript e suas tecnologias. Busco a oportunidade de ingressar em um estágio de desenvolvimento web. Embora não tenha experiência profissional, tenho convicção e muita vontade de aprender. Agradeço pela sua visita desde já."
              </p>
              
              </div>
            </div>
          </section>
        </>
    )
}