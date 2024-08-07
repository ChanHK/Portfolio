import Head from "next/head";
import styles from "../styles/profile.module.css";
import { Fragment } from "react";
import {
  Cloud,
  Experiences,
  ProjectBoxes,
  Title,
  LargeProjectBoxes,
} from "../components";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Clifford Chan</title>
        <meta name="viewport" content="width=100vw, initial-scale=1.0" />
      </Head>
      <div className={styles.HeaderContainer}>
        <nav>
          <ul className={styles.NavList}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="/HaoKangChan.pdf"
                download
                className={styles.Button}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.MainContainer}>
        <div className={styles.IntroContainer} id="intro">
          <Title text={"Hi, I am"} />
          <Title text={"Clifford Chan,"} />
          <Title text={"Software Engineer."} />
        </div>

        <div id="about">
          <br />
          <br />
          <br />
        </div>
        <div className={`${styles.SubContainer} ${styles.aboutContainer}`}>
          <div className={styles.MeContainer}>
            <Title text={"Me, Myself & I"} />
            <div className={styles.paragraph}>
              Hello there, I am a software engineer from Malaysia with a passion
              for full-stack development.
              <br />
              <br />
              When I am not coding, I enjoy spending time outdoors, engaging in
              activities that recharge my batteries, and help me to stay focused
              and productive. I am also an avid reader and a movie enthusiast,
              and I find that these hobbies help me to think creatively and
              approach problems from different angles. I am excited about the
              work I do, and I believe that my skills and interests make me an
              asset to any team.
            </div>
          </div>
          <div className={styles.CloudContainer}>
            <Cloud />
          </div>
        </div>

        <div
          className={`${styles.SubContainer} ${styles.experiencesContainer}`}
          id="experiences"
        >
          <div className={styles.ExpContainer}>
            <Title text={"Work Experiences"} />
            <Experiences />
          </div>
        </div>

        <div id="projects">
          <br />
          <br />
          <br />
        </div>
        <div
          className={`${styles.SubContainer} ${styles.projectsContainer}`}
          id="projects"
        >
          <Title text={"Projects"} />
          <div className={styles.boxesContainer}>
            <LargeProjectBoxes />
          </div>
          <div className={styles.boxesContainer}>
            <ProjectBoxes />
          </div>
        </div>

        <div
          className={`${styles.SubContainer} ${styles.ContactContainer}`}
          id="contact"
        >
          <Title text={"Get In Touch"} />
          <div className={styles.paragraph}>
            Thank you for visiting my profile! If you have any opportunities,
            please don&apos;t hesitate to reach out. I will try my best to
            respond promptly.
          </div>
          <a href="mailto:clifford.chan99@gmail.com">Lets Connect</a>
        </div>
      </div>
    </Fragment>
  );
}
