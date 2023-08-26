import Sidebar from '@/components/resume/sidebar';
import Contact from '@/components/resume/contact';
import Image from 'next/image';
import billPic from '@/public/bill.jpg';
import styles from './styles.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bill Adams' Resume",
};

export default function Page() {
  return (
    <main className={styles.resume}>
      <Sidebar classNames={styles.sidebar}>
        <Image
          src={billPic}
          alt="Bill Adams' picture"
          priority
          className={styles.profileImage}
        />
        <Contact classNames={styles.contact} />
      </Sidebar>
      <div className={styles.resumeDetails}>
        <Contact classNames={`${styles.contact} ${styles.section}`} />
        <section className={`${styles.objective} ${styles.section}`}>
          <h1>Resume Objective</h1>
          <p>
            Full-stack web developer with ten years of experience developing
            highly scalable enterprise applications.
          </p>
        </section>

        <section className={`${styles.keySkills} ${styles.section}`}>
          <h2>Key Skills</h2>
          <ul className={styles.skills}>
            <li>.Net MVC/Core</li>
            <li>JavaScript and React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MS SQL</li>
          </ul>
        </section>

        <section className={`${styles.education} ${styles.section}`}>
          <h2>Education</h2>
          <div>Southeast Community College</div>
          <div>Associate of Applied Science</div>
        </section>

        <section className={`${styles.experience} ${styles.section}`}>
          <h2>Experience</h2>
          <div className={styles.employmentCard}>
            <div className={styles.employmentDuration}>
              <div className={styles.employer}>
                <span>Sandhills Global,</span> Lincoln, NE
              </div>
              <div className={styles.duration}>September 2017 - Current</div>
            </div>
            <div className={styles.role}>Web Developer</div>
            <ul className={styles.employmentDetails}>
              <li>
                Improved various core web vitals to decrease site load times.
              </li>
              <li>
                Work in a fast-paced, iterative environment, with frequently
                changing requirements, and utilize an agile development process.
              </li>
              <li>
                Implemented a CSS scoping solution to reduce unwanted side
                effects when updating or adding new CSS.
              </li>
              <li>
                Maintain and extend leads message API that gets equipment
                dealers in touch with potential customers.
              </li>
              <li>
                Analyzed accessibility and championed improvements across
                various websites to increase usability.
              </li>
              <li>
                Maintain websites and applications written in both C# and
                VB.NET, implement feature additions and updates, perform code
                reviews, code documentation, and write unit tests.
              </li>
            </ul>
          </div>

          <div className={styles.employmentCard}>
            <div className={styles.employmentDuration}>
              <div className={styles.employer}>
                <span>BA Web Development,</span> Lincoln, NE
              </div>
              <div className={styles.duration}>March 2012 - January 2016</div>
            </div>
            <div className={styles.role}>Freelance Web Developer</div>
            <ul className={styles.employmentDetails}>
              <li>
                Improved various core web vitals to decrease site load times.
              </li>
              <li>
                Work in a fast-paced, iterative environment, with frequently
                changing requirements, and utilize an agile development process.
              </li>
              <li>
                Implemented a CSS scoping solution to reduce unwanted side
                effects when updating or adding new CSS.
              </li>
              <li>
                Maintain and extend leads message API that gets equipment
                dealers in touch with potential customers.
              </li>
              <li>
                Analyzed accessibility and championed improvements across
                various websites to increase usability.
              </li>
              <li>
                Maintain websites and applications written in both C# and
                VB.NET, implement feature additions and updates, perform code
                reviews, code documentation, and write unit tests.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
