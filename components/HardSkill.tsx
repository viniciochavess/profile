import Image from "next/image";
import classes from "./HardSkill.module.css";
import html from "@/app/assets/html 1.png";
import css from "@/app/assets/css-3 1.png";
import js from "@/app/assets/js 1.png";
import ts from "@/app/assets/Typescript_logo_2020 1.png";
import node from "@/app/assets/nodejs_logo 1.png";
import fastify from "@/app/assets/24939410 1.png";
import react from "@/app/assets/React-icon 1.png";
import rn from "@/app/assets/React-icon 2.png";
import express from "@/app/assets/icons8-express-js-50 1.png";
import prisma from "@/app/assets/icons8-prisma-orm-48 1.png";
import mysql from "@/app/assets/baixados (1) 1.png";
import postg from "@/app/assets/icons8-postgresql-48 1.png";
import figma from "@/app/assets/icons8-figma-48 1.png";
import docker from "@/app/assets/icons8-docker-48 1.png";
import bubble from "@/app/assets/image 3.png";
import python from "@/app/assets/python.png";
export function HardSkill() {
  return (
    <>
      <section>
        <h1 className={`${classes.text} skill`}>Minhas Habilidades</h1>
        <div className={classes.container}>
          <Image src={html.src} width={50} height={50} alt="logo do html" />
          <Image src={css.src} width={50} height={50} alt="logo do css" />
          <Image src={js.src} width={50} height={50} alt="logo do js" />
          <Image src={ts.src} width={50} height={50} alt="logo do ts" />
          <Image
            src={fastify.src}
            width={50}
            height={50}
            alt="logo do fastify"
          />
          <Image src={react.src} width={50} height={50} alt="logo do react" />
          <Image
            src={rn.src}
            width={50}
            height={50}
            alt="logo do react native"
          />
          <Image src={prisma.src} width={50} height={50} alt="logo do prisma" />
          <Image
            src={postg.src}
            width={50}
            height={50}
            alt="logo do postgres sql"
          />
          <Image src={figma.src} width={50} height={50} alt="logo do figma" />
          <Image src={docker.src} width={50} height={50} alt="logo do docker" />
          <Image src={bubble.src} width={50} height={50} alt="logo do bubble" />
          .
        </div>
      </section>
    </>
  );
}
