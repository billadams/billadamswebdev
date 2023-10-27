'use Client';

import React, { useRef, useState } from 'react';
import styles from '@/components/modal/styles.module.css';
import formStyles from '@/components/forms/styles.module.css';

export default function Modal({ showModal }: { showModal: boolean }) {
  const [showDialog, setShowDialog] = useState(showModal);

  const dialogRef = useRef<HTMLDialogElement>(null);

  function getClasses(): string {
    let className = '';

    if (showDialog) {
      className = styles.showDialog;
    }

    return className;
  }

  if (showModal) {
    return (
      <dialog
        id='contact-dialog'
        className={`${styles.contactDialog} ${getClasses()}`}
        ref={dialogRef}
      >
        <form method='dialog' className={styles.contactForm}>
          <button
            type='button'
            id='close'
            className={styles.closeButton}
            aria-label='close'
            formNoValidate
          >
            X
          </button>
          <div className={formStyles.formGroup}>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              className={formStyles.formControl}
            ></input>
          </div>
          <div className={formStyles.formGroup}>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              className={formStyles.formControl}
            ></input>
          </div>
          <div className={formStyles.formGroup}>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              className={formStyles.formControl}
            ></textarea>
          </div>
          <button type='submit'>Send It</button>
        </form>
      </dialog>
    );
  }
}
