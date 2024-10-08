"use client";
import { RocketLaunch } from "@phosphor-icons/react";
import classes from "./HomeInit.module.css";
import { Moon } from "./Moon";
import Link from "next/link";

export default function HomeInit() {
  return (
    <>
      <Moon />
      <div className={classes.containerProfileMain}>
        <div className={classes.profileMain}>
          <p className={classes.textOne}>Olá, Eu Sou Vinicio Chaves</p>
          <h1 className={classes.textTwo}>Software Developer</h1>
          <span className={classes.textThree}>
            Future Software Architecture
          </span>
        </div>
        <div className={classes.containerButton}>
          <Link className={classes.link} href="/profile">
            <button className={classes.button}>
              EXPLORAR
              <RocketLaunch />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
