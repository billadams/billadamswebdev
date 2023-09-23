import Sidebar from '@/components/resume/sidebar';
import Contact from '@/components/resume/contact';
import styles from './styles.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bill Adams' Resume",
};

export default function Page() {
  return (
    <div className={styles.resume}>
      <h1 className={styles.resumeHeading}>Bill Adams</h1>
      <Sidebar classNames={styles.sidebar}>
        <Contact classNames={styles.contact} />
        <section className={`${styles.keySkills} ${styles.section}`}>
          <h2 className={`${styles.resumeHeading2} ${styles.sidebarHeading}`}>
            Skills
          </h2>
          <ul className={styles.skills}>
            <li>.Net MVC/Core</li>
            <li>JavaScript and React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MS SQL</li>
          </ul>
        </section>
        <section className={`${styles.education} ${styles.section}`}>
          <h2 className={`${styles.resumeHeading2} ${styles.sidebarHeading}`}>
            Education
          </h2>
          <div className={styles.degree}>
            Associate of Applied Science,
            <span className={styles.gradDate}> 12/2017</span>
          </div>
          <div>Southeast Community College - Lincoln, NE</div>
        </section>
      </Sidebar>
      <div className={styles.resumeDetails}>
        <Contact classNames={`${styles.contact} ${styles.section}`} />
        <section className={`${styles.objective} ${styles.section}`}>
          <h2 className={styles.resumeHeading2}>Professional Summary</h2>
          <p>
            Full-stack web developer with ten years of experience developing
            highly scalable enterprise applications.
          </p>
        </section>

        <section className={`${styles.workHistory} ${styles.section}`}>
          <h2 className={styles.resumeHeading2}>Work History</h2>
          <div className={styles.employmentDetails}>
            <div className={styles.employmentHeading}>
              <div className={styles.employmentRole}>
                <span className={styles.role}>Web Developer,</span> 09/2017 -
                Current
              </div>
              <div className={styles.employer}>
                Sandhills Global, Lincoln, NE
              </div>
            </div>
            <ul className={styles.responsibilities}>
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

          <div className={styles.employmentDetails}>
            <div className={styles.employmentHeading}>
              <div className={styles.employmentRole}>
                <span className={styles.role}>Freelance Web Developer,</span>{' '}
                03/2012 - 01/2016
              </div>
              <div className={styles.employer}>
                BA Web Development, Lincoln, NE
              </div>
            </div>
            <ul className={styles.responsibilities}>
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
    </div>
  );
}
