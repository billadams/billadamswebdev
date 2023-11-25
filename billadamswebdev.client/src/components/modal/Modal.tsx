import React, {
    useRef,
    useEffect,
} from 'react';
import styles from '@/components/modal/modal.module.css';

type OnCloseFunction = () => void;

export default function Modal({
    onClose,
    children,
    classes,
}: {
    onClose: OnCloseFunction;
    children: React.ReactNode;
    classes?: string;
}) {

    useEffect(() => {
        if (dialogRef.current) {
            if (dialogRef.current.open === false) {
                dialogRef.current?.showModal();
                console.log(dialogRef);
            }
        }

        dialogRef.current?.addEventListener('close', closeDialog);

        return () => {
            dialogRef.current?.removeEventListener('close', closeDialog);
        };
    });

    const dialogRef = useRef<HTMLDialogElement>(null);

    const getClasses = (): string => {
        return classes ? classes : '';
    }

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
                    type='button'
                    id='close'
                    className={`${styles.closeButton} primary-button`}
                    aria-label='close'
                    onClick={() => closeDialog()}
                    formNoValidate
                >
                    X
                </button>
            </div>
            {children}
        </dialog>
    );
}
