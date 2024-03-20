'use client';

import { useState } from 'react';
import Link from 'next/link';
import Contact from '@/components/contact/Contact';
import styles from '@/components/header/header.module.css';

export default function Header() {
    const [showContactForm, setShowContactForm] = useState<boolean>(false);

    const displayContactModal = () => {
        setShowContactForm(true);
    };

    return (
        <header>
            <Link href='/'>BA Web Dev</Link>
            <button
                type='button'
                className={`${styles.contactButton} primary-button`}
                onClick={() => displayContactModal()}
            >
                Contact Me
            </button>
            <Contact setShowForm={setShowContactForm} showForm={showContactForm} />
        </header>
    );
}
