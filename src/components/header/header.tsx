'use client';
import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/modal/Modal';
import styles from '@/components/header/header.module.css';

export default function Header() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const displayContactModal = () => {
    setShowModal(true);
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
}
