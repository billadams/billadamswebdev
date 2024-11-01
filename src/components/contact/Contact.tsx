import React, { useState, FormEvent, Dispatch, SetStateAction } from 'react';
import Modal from '@/components/modal/Modal';
import Alert from '@/components/alert/Alert';
import styles from '@/components/forms/forms.module.css';

type Alert = {
  message: string | null;
  severity: 'success' | 'error' | 'info';
};

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

export default function Contact({
  setShowForm,
  showForm,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  showForm: boolean;
}) {
  const [alert, setAlert] = useState<Alert>({
    message: null,
    severity: 'info',
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

  const validateName = (contactRequest: ContactRequest): void => {
    const regex = /^[a-zA-Z ,.\-']+$/;
    const name = contactRequest.name;

    if (name.value.match(regex) === null) {
      name.errors.push(
        'Name can only contain alphabetical characters, spaces, commas, periods, and hypen symbols.'
      );
    }
  };

  const validateEmail = (contactRequest: ContactRequest): void => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = contactRequest.email;

    if (email.value.match(regex) === null) {
      email.errors.push('Email must be in the format of example@gmail.com');
    }
  };

  const validateRequiredFields = (contactRequest: ContactRequest): void => {
    if (!contactRequest.name.value) {
      contactRequest.name.errors.push('Name is required.');
    }

    if (!contactRequest?.email.value) {
      contactRequest.email.errors.push('Email is required.');
    }

    if (!contactRequest?.message.value) {
      contactRequest.message.errors.push('Message is required.');
    }
  };

  const validateInputIsCorrect = (contactRequest: ContactRequest): void => {
    validateName(contactRequest);
    validateEmail(contactRequest);
  };

  const validateInput = (): ContactRequest => {
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
  };

  const hasInputErrors = (contactRequest: ContactRequest): boolean => {
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
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const contactRequest = validateInput();

    setFormValidation((inputs) => {
      return {
        ...inputs,
        name: {
          isValid: contactRequest.name.errors.length === 0,
          errors: contactRequest.name.errors,
        },
        email: {
          isValid: contactRequest.email.errors.length === 0,
          errors: contactRequest.email.errors,
        },
        message: {
          isValid: contactRequest.message.errors.length === 0,
          errors: contactRequest.message.errors,
        },
        hasErrors: true,
      };
    });

    if (!hasInputErrors(contactRequest)) {
      submitContactRequest(contactRequest);
    }
  };

  const submitContactRequest = async (contactRequest: ContactRequest) => {
    const formData = new FormData();
    formData.append('name', contactRequest.name.value);
    formData.append('email', contactRequest.email.value);
    formData.append('message', contactRequest.message.value);
    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    try {
      const response = await fetch(`/api/sendContactEmail`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok === true) {
        setAlert({
          message: 'Your message has been sent!',
          severity: 'success',
        });
        setFormValues({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setAlert({
          message: 'There was a problem sending your message.',
          severity: 'error',
        });
      }

      console.log('Success:', response);
    } catch (error) {
      setAlert({
        message: 'There was a problem sending your message.',
        severity: 'error',
      });
      console.error('Error', error);
    }
  };

  const handleInputChange = (e: FormEvent) => {
    const { name, value } = e.currentTarget as HTMLInputElement;

    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onCloseDialog = () => {
    setShowForm(false);
    setAlert({
      message: null,
      severity: 'info',
    });
  };

  return (
    <Modal onClose={onCloseDialog} isOpen={showForm}>
      {alert?.message && (
        <Alert ownerState={{ severity: alert.severity }}>
          <p>{alert.message}</p>
        </Alert>
      )}
      <form
        method='dialog'
        className={styles.contactForm}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.formGroup}>
          <label htmlFor='name' className={styles.required}>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className={styles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValues.name}
            title='Name can only contain alphabetical characters in additionss to spaces commas, periods, and hypen symbols.'
          ></input>
          {!formValidation.name.isValid && (
            <span className={styles.inputError}>
              {formValidation.name.errors[0]}
            </span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.required}>
            Email:
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className={styles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValues.email}
          ></input>
          {!formValidation.email.isValid && (
            <span className={styles.inputError}>
              {formValidation.email.errors[0]}
            </span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message' className={styles.required}>
            Message:
          </label>
          <textarea
            id='message'
            rows={5}
            name='message'
            className={styles.formControl}
            onChange={(e) => handleInputChange(e)}
            value={formValues.message}
          ></textarea>
          {!formValidation.message.isValid && (
            <span className={styles.inputError}>
              {formValidation.message.errors[0]}
            </span>
          )}
        </div>
        <button type='submit' className={`primary-button`}>
          Send
        </button>
      </form>
    </Modal>
  );
}
