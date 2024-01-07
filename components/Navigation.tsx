import logo from '@/app/assets/logoO.png'
import Image from 'next/image';
import classes from './Navigation.module.css'
import Link from 'next/link';
export default function Navigation() {
  return (
    <>
      <nav className={classes.navigation}>
        <div className={classes.logoContainer}>
          <Image  width={50} height={50} src={logo.src} alt='logo'/>
          <p>PORTFOLIO</p>
        </div>
        
      </nav>
    </>
  );
}
