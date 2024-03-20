import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../../app/resume/styles.module.css';

export default function Education() {
  return (
    <section className={`${styles.education} ${styles.section}`}>
      <h2 className={`${styles.resumeHeading2}`}>Education</h2>
      <div className={styles.degree}>Associate of Applied Science</div>
      <div>Southeast Community College</div>
      <div>
        <FontAwesomeIcon icon={faCalendarAlt} className='icon' />
        <span>2016 - 2017</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
        <span>Lincoln, NE</span>
      </div>
    </section>
  );
}
