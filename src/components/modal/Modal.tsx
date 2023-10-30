'use Client';

import React, {
  useRef,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FormEvent,
} from 'react';
import Alert from '@/components/alert/Alert';
import styles from '@/components/modal/styles.module.css';
import formStyles from '@/components/forms/styles.module.css';

type ContactRequest = {
  name: {
    value: string;
    errors: string[];
  };
  email: {
    value: string;
    errors: string[];
  };
  message: {
    value: string;
    errors: string[];
  };
  success: boolean;
};

type FormValidation = {
  name: {
    isValid: boolean;
    errors: string[];
  };
  email: {
    isValid: boolean;
    errors: string[];
  };
  message: {
    isValid: boolean;
    errors: string[];
  };
  hasErrors: boolean;
};

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
      setFormValues((prev) => {
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

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formValidation, setFormValidation] = useState<FormValidation>({
    name: {
      isValid: false,
      errors: [],
    },
    email: {
      isValid: false,
      errors: [],
    },
    message: {
      isValid: false,
      errors: [],
    },
    hasErrors: false,
  });

  const dialogRef = useRef<HTMLDialogElement>(null);

  function getClasses(): string {
    return classes ? classes : '';
  }

  function closeDialog(): void {
    dialogRef.current?.close();
  }

  function validateName(contactRequest: ContactRequest): void {
    const regex = /^[a-zA-Z ,.\-']+$/;
    const name = contactRequest.name;

    if (name.value.match(regex) === null) {
      name.errors.push(
        'Name can only contain alphabetical characters, spaces, commas, periods, and hypen symbols.'
      );
    }
  }

  function validateEmail(contactRequest: ContactRequest): void {
    const regex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const email = contactRequest.email;

    if (email.value.match(regex) === null) {
      email.errors.push('Email must be in the format of example@gmail.com');
    }
  }

  function validateRequiredFields(contactRequest: ContactRequest): void {
    if (!contactRequest.name.value) {
      contactRequest.name.errors.push('Name is required.');
    }

    if (!contactRequest?.email.value) {
      contactRequest.email.errors.push('Email is required.');
    }

    if (!contactRequest?.message.value) {
      contactRequest.message.errors.push('Message is required.');
    }
  }

  function validateInputIsCorrect(contactRequest: ContactRequest): void {
    validateName(contactRequest);
    validateEmail(contactRequest);
  }

  function validateInput(): ContactRequest {
    const contactRequest: ContactRequest = {
      name: {
        value: formValues.name.trim(),
        errors: [],
      },
      email: {
        value: formValues.email.trim(),
        errors: [],
      },
      message: {
        value: formValues.message.trim(),
        errors: [],
      },
      success: false,
    };

    validateRequiredFields(contactRequest);
    validateInputIsCorrect(contactRequest);

    return contactRequest;
  }

  function hasInputErrors(contactRequest: ContactRequest): boolean {
    let hasInputErrors = false;

    if (
      contactRequest.name.errors.length > 0 ||
      contactRequest.email.errors.length > 0 ||
      contactRequest.message.errors.length > 0
    ) {
      hasInputErrors = true;
    }

    if (hasInputErrors === false) {
      contactRequest.success = true;
    }

    return hasInputErrors;
  }

  function submit(e: FormEvent): void {
    e.preventDefault();

    const contactRequest = validateInput();

    validateRequiredFields(contactRequest);

    if (hasInputErrors(contactRequest)) {
      setFormValidation((inputs) => {
        return {
          ...inputs,
          name: {
            isValid: contactRequest.name.errors.length > 0,
            errors: contactRequest.name.errors,
          },
          email: {
            isValid: contactRequest.email.errors.length > 0,
            errors: contactRequest.email.errors,
          },
          message: {
            isValid: contactRequest.message.errors.length > 0,
            errors: contactRequest.message.errors,
          },
          hasErrors: true,
        };
      });
    } else {
      console.log('Form is valid');
      // TODO Send the request.
    }
  }

  function handleInputChange(e: FormEvent) {
    const { name, value } = e.currentTarget as HTMLInputElement;

    setFormValues((prev) => {
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
        {/* Lets check errors onChange instead. That will provide instant feedback on validation. */}
        {formValidation.hasErrors && (
          <Alert ownerState={{ severity: 'error' }}>
            <ul>
              <li></li>
            </ul>
          </Alert>
        )}
        <div className={formStyles.formGroup}>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            className={formStyles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValues.name}
            title='Name can only contain alphabetical characters in adding to spaces commas, periods, and hypen symbols.'
          ></input>
          <span className='validity'></span>
        </div>
        <div className={formStyles.formGroup}>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            className={formStyles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValues.email}
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
            value={formValues.message}
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
