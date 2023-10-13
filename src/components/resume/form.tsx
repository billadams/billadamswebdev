'use client';

import styles from './styles.module.css';

export default function Form() {
  return (
    <form autoComplete='off'>
      <div className={styles.inputCol}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className={styles.inputCol}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' />
      </div>
      <div className={styles.inputCol}>
        <label htmlFor='message'>Message</label>
        <textarea id='message'></textarea>
      </div>
      <button type='button'>Send Email</button>
    </form>
  );
}
