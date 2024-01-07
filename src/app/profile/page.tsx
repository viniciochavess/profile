import Image from "next/image";
import Navigation from "../../../components/Navigation";
import classes from "./profile.module.css";
import { ProfileAbount } from "../../../components/ProfileAbount";
import { DescriptionGoals } from "../../../components/DescriptionGoals";
import { PersonalProjects } from "../../../components/PersonalProjects";
import { HardSkill } from "../../../components/HardSkill";
import { Footer } from "../../../components/Footer";


export default function Profile() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Navigation />
      </div>
      <div  style={{ position: "relative" }} className={classes.container}>
        <main className={classes.main}>
        <ProfileAbount/>
        
        <DescriptionGoals/>
        <PersonalProjects/>
        <HardSkill/>
        </main>
      </div>
      <Footer/>
    </>
  );
}
