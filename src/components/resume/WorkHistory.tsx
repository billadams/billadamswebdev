import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../../app/resume/styles.module.css';

export default function WorkHistory() {
  return (
    <section className={`${styles.workHistory} ${styles.section}`}>
      <h2 className={styles.resumeHeading2}>Work History</h2>
      <div className={styles.employmentDetails}>
        <div className={styles.employmentHeading}>
          <h3 className={styles.employmentRole}>Web Developer</h3>
          <div className={styles.employer}>Sandhills Global</div>
          <div className={styles.durationLocation}>
            <div className={styles.duration}>
              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
              September 2012 - current
            </div>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
              Lincoln, NE
            </div>
          </div>
        </div>
        <ul className={styles.responsibilities}>
          <li>Improved various core web vitals to decrease site load times.</li>
          <li>
            Work in a fast-paced, iterative environment, with frequently
            changing requirements, and utilize an agile development process.
          </li>
          <li>
            Implemented a CSS scoping solution to reduce unwanted side effects
            when updating or adding new CSS.
          </li>
          <li>
            Maintain and extend leads message API that gets equipment dealers in
            touch with potential customers.
          </li>
          <li>
            Analyzed accessibility and championed improvements across various
            websites to increase usability.
          </li>
          <li>
            Maintain websites and applications written in both C# and VB.NET,
            implement feature additions and updates, perform code reviews, code
            documentation, and write unit tests.
          </li>
        </ul>
      </div>

      <div className={styles.employmentDetails}>
        <div className={styles.employmentHeading}>
          <h3 className={styles.employmentRole}>Freelance Web Developer</h3>
          <div className={styles.employer}>BA Web Development</div>
          <div className={styles.durationLocation}>
            <div className={styles.duration}>
              <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
              03/2012 - 01/2016
            </div>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
              Lincoln, NE
            </div>
          </div>
        </div>
        <ul className={styles.responsibilities}>
          <li>Improved various core web vitals to decrease site load times.</li>
          <li>
            Work in a fast-paced, iterative environment, with frequently
            changing requirements, and utilize an agile development process.
          </li>
          <li>
            Implemented a CSS scoping solution to reduce unwanted side effects
            when updating or adding new CSS.
          </li>
          <li>
            Maintain and extend leads message API that gets equipment dealers in
            touch with potential customers.
          </li>
          <li>
            Analyzed accessibility and championed improvements across various
            websites to increase usability.
          </li>
          <li>
            Maintain websites and applications written in both C# and VB.NET,
            implement feature additions and updates, perform code reviews, code
            documentation, and write unit tests.
          </li>
        </ul>
      </div>
    </section>
  );
}
