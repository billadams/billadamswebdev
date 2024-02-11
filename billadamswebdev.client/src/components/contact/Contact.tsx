import React, {
    useState,
    FormEvent,
    Dispatch,
    SetStateAction
} from 'react';
import Modal from '@/components/modal/Modal';
import styles from '@/components/forms/forms.module.css';

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
    showForm
}: {
    setShowForm: Dispatch<SetStateAction<boolean>>;
    showForm: boolean;
}) {

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
    }

    const validateEmail = (contactRequest: ContactRequest): void => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const email = contactRequest.email;

        if (email.value.match(regex) === null) {
            email.errors.push('Email must be in the format of example@gmail.com');
        }
    }

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
    }

    const validateInputIsCorrect = (contactRequest: ContactRequest): void => {
        validateName(contactRequest);
        validateEmail(contactRequest);
    }

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
    }

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
    }

    const onSubmit = (e: FormEvent): void => {
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
    }

    const submitContactRequest = async (contactRequest: ContactRequest) => {
        const data = {
            name: contactRequest.name.value,
            email: contactRequest.email.value,
            message: contactRequest.message.value
        }

        try {
            const response = await fetch('https://localhost:7028/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error', error);
        }
    }

    const handleInputChange = (e: FormEvent) => {
        const { name, value } = e.currentTarget as HTMLInputElement;

        setFormValues((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const onCloseDialog = () => {
        setFormValues({
            name: '',
            email: '',
            message: '',
        });

        setShowForm(false);
    }

    return (
        <>
            <Modal onClose={onCloseDialog} isOpen={showForm}>
                <form
                    method='dialog'
                    className={styles.contactForm}
                    onSubmit={(e) => onSubmit(e)}
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
                            title='Name can only contain alphabetical characters in adding to spaces commas, periods, and hypen symbols.'
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
                    <button
                        type='submit'
                        className={`primary-button`}
                    >
                        Send
                    </button>
                </form>
            </Modal>
        </>
    )
}