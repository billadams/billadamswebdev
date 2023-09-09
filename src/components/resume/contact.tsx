import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../../app/resume/styles.module.css';

type ContactProps = {
  classNames: string;
};

export default function Contact(props: ContactProps) {
  return (
    <section className={`${props.classNames} ${styles.section}`}>
      <div className={styles.contactMethod}>
        <FontAwesomeIcon icon={faMapMarker} className={`icon ${styles.icon}`} />
        Lincoln, NE
      </div>
      <div className={styles.contactMethod}>
        <FontAwesomeIcon icon={faEnvelope} className={`icon ${styles.icon}`} />
        <a href='mailto:bill@billadamswebdev.com' title='Email'>
          bill@billadamswebdev.com
        </a>
      </div>
      <div className={styles.contactMethod}>
        <FontAwesomeIcon icon={faLinkedin} className={`icon ${styles.icon}`} />
        <a
          href='https://linkedin.com/in/billadamswebdev/'
          title='LinkedIn'
          target='_blank'
          rel='noopener'
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
