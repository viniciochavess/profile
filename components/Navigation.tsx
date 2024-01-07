import logo from '@/app/assets/logoO.png'
import Image from 'next/image';
import classes from './Navigation.module.css'
export default function Navigation() {
  return (
    <>
      <nav className={classes.navigation}>
        <div className={classes.logoContainer}>
          <Image  width={50} height={50} src={logo.src} alt='logo'/>
          <p>PORTFOLIO</p>
        </div>
        <ul>
          <li>SOBRE</li>
          <li>METAS E OBJETIVOS</li>
          <li>PROJETOS</li>
          <li>MINHAS HABILIDADES</li>
          <li>CONTATO</li>
        </ul>
      </nav>
    </>
  );
}
