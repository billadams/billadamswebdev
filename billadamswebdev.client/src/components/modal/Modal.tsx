import React, {
    useRef,
    useEffect,
    forwardRef
} from 'react';
import styles from '@/components/modal/modal.module.css';

//type OnCloseFunction = () => void;
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
    })

    useEffect(() => {
        const formElements = dialogRef.current?.elements as HTMLFormControlsCollection;

        if (formElements?.length > 0) {
            //closeButtonRef.current = formElements.item(0) as HTMLButtonElement;
            sendButtonRef.current = formElements[formElements.length - 1] as HTMLButtonElement;
        }

        formRef.current?.addEventListener('keydown', handleKeyDown);

        return () => {
            formRef.current?.removeEventListener('keydown', handleKeyDown);
        }
    })

    const dialogRef = useRef<HTMLDialogElement>(null);

    const getAllFocusableElements = (): NodeListOf<HTMLElement> => {
        return dialogRef.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)');
    }

    const getClasses = (): string => {
        return classes ? classes : '';
    }

    isOpen && dialogRef.current?.showModal();

    const closeDialog = (): void => {
        if (typeof onClose === 'function') {
            onClose();
        }

        dialogRef.current?.close();
    }

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

//export function CloseButton({ onClose, forwardRef
//}: {
//    onClose: OnCloseFunction;
//    forwardRef?: React.RefObject<HTMLButtonElement>;
//}) {
//    return (
//        <button
//            ref={forwardRef}
//            type='button'
//            id='close'
//            className={`${styles.closeButton} primary-button`}
//            aria-label='close'
//            onClick={() => onClose()}
//            formNoValidate
//            autoFocus
//        >
//            X
//        </button>
//    )
//}

export default Modal;
