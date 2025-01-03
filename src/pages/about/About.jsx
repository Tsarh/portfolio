// import React from "react";
import { FaDownload } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import { resume } from "../../data";
import { motion } from "motion/react";
import Skills from "../../components/Skills";
import CV from "../../assets/Tsaroan_Cv.pdf"
import "./about.css"
import ResumeItem from "../../components/ResumeItem";

const About = ()=>{
    return (
        <main className="section container">
            <motion.section initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Infos</h3>

                        <ul className="info__list grid">
                            <Info/>
                        </ul>

                        <a href={CV} download='' className="button">
                            Download CV
                            <span className="button__icon"> 
                                <FaDownload/>
                            </span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </motion.section>

            <div className="separator"></div>

            <section className="skills">
                <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} className="section__subtitle subtitle__center">My Skills</motion.h3>
                <div className="skills__container grid">
                    <Skills />
                </div>
            </section>

            <div className="separator"></div>

            <section className="resume">
                <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 1.5}}} className="section__subtitle subtitle__center">Experiences & Education</motion.h3>

                <div  className="resume__container grid">
                    <div className="resume__data">
                        {resume.map((val)=>{
                            if(val.category === "experience") {
                                return <ResumeItem key={val.id} {...val}/>
                            }
                        })}
                    </div>
                    
                    <div className="resume__data">
                        {resume.map((val)=>{
                            if(val.category === "education") {
                                return <ResumeItem key={val.id} {...val}/>
                            }
                        })}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About