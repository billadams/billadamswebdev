'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Form from './Form';
import styles from '../../app/resume/styles.module.css';
import { useState } from 'react';

type ContactProps = {
  classNames: string;
};

export default function Contact(props: ContactProps) {
  const [showContactInfo, setShowContactInfo] = useState(false);

  function toggleShowContactInfo() {
    setShowContactInfo((showContactInfo) => !showContactInfo);
  }

  return (
    <section className={`${props.classNames} ${styles.section}`}>
      <button
        type='button'
        className={styles.showInfoButton}
        onClick={() => {
          toggleShowContactInfo();
        }}
      >
        {showContactInfo ? 'Hide Contact Info' : 'Show Contact Info'}
      </button>
      {showContactInfo && (
        <>
          <Form />
          <div className={styles.contactMethod}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`icon ${styles.icon}`}
            />
            <a
              href='https://linkedin.com/in/billadamswebdev/'
              title='LinkedIn'
              target='_blank'
              rel='noopener'
            >
              LinkedIn
            </a>
          </div>
        </>
      )}
    </section>
  );
}
