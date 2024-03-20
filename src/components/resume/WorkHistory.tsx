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
              September 2017 - current
            </div>
            <div className={styles.location}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
              Lincoln, NE
            </div>
          </div>
        </div>
        <ul className={styles.responsibilities}>
          <li>
            Championed accessibility improvements across public facing websites
            to increase usability.
          </li>
          <li>
            Designed solution architecture, application architecture, and
            development standards.
          </li>
          <li>
            Migrated legacy applications to modern React.js-based architectures.
          </li>
          <li>Implemented unit testing requirements.</li>
          <li>
            Work in a fast-paced, iterative environment, with frequently
            changing requirements, and utilize an agile development process.
          </li>
          <li>
            Led the quality of the code development process, including design,
            performance, observing coding standards, code review, and thorough
            testing.
          </li>
        </ul>
      </div>
    </section>
  );
}
