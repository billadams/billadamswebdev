'use Client';

import React, {
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';
import styles from '@/components/modal/styles.module.css';
import formStyles from '@/components/forms/styles.module.css';

export default function Modal({
  showModal,
  setShowModal,
  classes,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  classes?: string;
}) {
  useEffect(() => {
    function closeDialog() {
      setFormValue((prev) => {
        return {
          ...prev,
          name: '',
          email: '',
          message: '',
        };
      });
      setShowModal(false);
    }

    dialogRef.current?.addEventListener('close', closeDialog);

    return () => {
      dialogRef.current?.removeEventListener('close', closeDialog);
    };
  });

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  function getClasses(): string {
    return classes ? classes : '';
  }

  function closeDialog(): void {
    dialogRef.current?.close();
  }

  function submit(e: FormEvent) {
    e.preventDefault();

    console.log('submit was pressed');
  }

  function handleInputChange(e: FormEvent) {
    const { name, value } = e.currentTarget as HTMLInputElement;

    setFormValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  if (showModal && dialogRef.current) {
    if (dialogRef.current.open === false) {
      dialogRef.current?.showModal();
      console.log(dialogRef);
    }
  }

  return (
    <dialog
      id='contact-dialog'
      className={`${styles.contactDialog} ${getClasses()}`}
      ref={dialogRef}
    >
      <form
        method='dialog'
        className={styles.contactForm}
        onSubmit={(e) => submit(e)}
      >
        <button
          type='button'
          id='close'
          className={`${styles.closeButton} primary-button`}
          aria-label='close'
          onClick={() => closeDialog()}
          formNoValidate
        >
          X
        </button>
        <div className={formStyles.formGroup}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            className={formStyles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValue.name}
          ></input>
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            className={formStyles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValue.email}
          ></input>
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            rows={5}
            name='message'
            className={formStyles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValue.message}
          ></textarea>
        </div>
        <button
          type='submit'
          className={`${styles.contactButton} primary-button`}
        >
          Send
        </button>
      </form>
    </dialog>
  );
}
