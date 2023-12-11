import React, {
    useRef,
    useEffect,
    forwardRef
} from 'react';
import styles from '@/components/modal/modal.module.css';

type ModalProps = {
    onClose: () => void;
    isOpen: boolean;
    children: React.ReactNode;
    classes?: string;
}

const Modal = forwardRef<HTMLButtonElement, ModalProps>(function Modal({
    onClose,
    isOpen,
    children,
    classes,
}, ref) {

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.addEventListener('close', closeDialog);
        }

        return () => {
            dialogRef.current?.removeEventListener('close', closeDialog);
        };
    }, [])

    useEffect(() => {
        const focusableElements = getAllFocusableElements();
        firstFocusableElementRef.current = focusableElements?.[0] as HTMLElement;
        lastFocusableElementRef.current = focusableElements?.[focusableElements.length - 1] as HTMLElement;

        dialogRef.current?.addEventListener('keydown', handleKeyDown);

        return () => {
            dialogRef.current?.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    const dialogRef = useRef<HTMLDialogElement>(null);
    const firstFocusableElementRef = useRef<HTMLElement | null>(null);
    const lastFocusableElementRef = useRef<HTMLElement | null>(null);

    const getAllFocusableElements = (): NodeListOf<HTMLElement> | undefined => {
        return dialogRef?.current?.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElementRef.current) {
                    e.preventDefault();
                    lastFocusableElementRef.current?.focus();
                }
            } else {
                if (document.activeElement === lastFocusableElementRef.current) {
                    e.preventDefault();
                    firstFocusableElementRef.current?.focus();
                }
            }
        }
    }

    const getClasses = (): string => {
        return classes ? classes : '';
    }

    const closeDialog = (): void => {
        if (typeof onClose === 'function') {
            onClose();
        }

        dialogRef.current?.close();
    }

    isOpen && dialogRef.current?.showModal();

    return (
        <dialog
            className={`${styles.contactDialog} ${getClasses()}`}
            ref={dialogRef}
        >
            <div className={styles.closeButtonWrapper}>
                <button
                    ref={ref}
                    type='button'
                    id='close'
                    className={`${styles.closeButton} primary-button`}
                    aria-label='close'
                    onClick={() => onClose()}
                    formNoValidate
                    autoFocus
                >
                    X
                </button>
            </div>
            {children}
        </dialog>
    );
})

export default Modal;
