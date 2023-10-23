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
          <li>Improved various core web vitals to decrease site load times.</li>
          <li>
            Work in a fast-paced, iterative environment, with frequently
            changing requirements, and utilize an agile development process.
          </li>
          <li>
            Lead a team of developers in rewriting intranet pages to administer
            make/model manager changes.
          </li>
          <li>
            Championed accessibility improvements across public facing websites
            to increase usability.
          </li>
          <li>
            Hold weekly meetings to teach best practices and coding standards.
          </li>
        </ul>
      </div>
    </section>
  );
}
