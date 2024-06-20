import React from 'react';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Siddhant_photo.png'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import instagramLight from '../../assets/instagram-light.svg'
import instagramDark from '../../assets/instagram-dark.svg'
import CV from '../../assets/Siddhant_resume.pdf'
import { useTheme } from '../../common/ThemeContext';

export default function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  
    return (
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img
            src={heroImg}
            className={styles.hero}
            alt="Profile picture of Harris Johnsen"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1>
            Siddhant
            <br />
            Gupta
          </h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://twitter.com/" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="https://instagram.com/" target="_blank">
              <img src={instagramIcon} alt="Instagram icon" />
            </a>
          </span>
          <p className={styles.description}>
            I am an aspiring engineer who enjoys connecting the dots. I am in the process of building strong technical skills and an academic background in web-development, statistics, and Machine Learning.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    );
}
