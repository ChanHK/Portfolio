import Head from "next/head";
import styles from "../styles/profile.module.css";
import { Fragment } from "react";
import Cloud from "../components/cloud";
import Experiences from "../components/experiences";
import ProjectBoxes from "../components/projectBoxes";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Clifford Chan</title>
      </Head>
      {/* https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1 */}
      <div className={styles.HeaderContainer}>
        <nav>
          <ul className={styles.NavList}>
            <li className={styles.NavItem}>
              <a href="#about">About</a>
            </li>
            <li className={styles.NavItem}>
              <a href="#experiences">Experiences</a>
            </li>
            <li className={styles.NavItem}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.NavItem}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className={styles.Button}>Resume</button>
      </div>

      <div className={styles.MainContainer}>
        <div className={styles.IntroContainer}>
          <div className={styles.IntroText}>Hi, I am</div>
          <div className={styles.IntroText}>Clifford Chan,</div>
          <div className={styles.IntroText}>Software Engineer.</div>
        </div>

        <div className={styles.SubContainer} id="about">
          <div className={styles.MeContainer}>
            <div className={styles.title}>Me, Myself & I</div>
            <div className={styles.paragraph}>
              Hello there, I am a software engineer from Malaysia with a passion
              for full-stack development. <br />
              <br />
              When I'm not coding, I enjoy spending time outdoors, engaging in
              activities that recharge my batteries, and help me to stay focused
              and productive. I am also an avid reader and a movie enthusiast,
              and I find that these hobbies help me to think creatively and
              approach problems from different angles. I am excited about the
              work I do, and I believe that my skills and interests make me an
              asset to any team. <br />
              <br />
              Thank you for taking the time to learn more about me, and I look
              forward to sharing more about my work with you.
            </div>
          </div>
          <div className={styles.CloudContainer}>
            <Cloud />
          </div>
        </div>

        <div className={styles.SubContainer} id="experiences">
          <div className={styles.ExpContainer}>
            <div className={styles.title}>Work Experiences</div>
            <Experiences />
          </div>
        </div>

        <div
          className={`${styles.SubContainer} ${styles.projectsContainer}`}
          id="projects"
        >
          <div className={styles.title}>Projects</div>
          <div className={styles.MainProjectsContainer}></div>
          <div className={styles.OtherProjectsContainer}>
            <div className={styles.SmallProjectTitle}>Small Projects</div>
            <div>
              <ProjectBoxes />
            </div>
          </div>
        </div>

        <div className={styles.SubContainer} id="contact">
          <div className={styles.title}>Contact</div>
        </div>
      </div>
    </Fragment>
  );
}
