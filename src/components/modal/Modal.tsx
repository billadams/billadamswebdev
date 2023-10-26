'use Client';

import React, { useRef } from 'react';

export default function Modal({ showModal }: { showModal: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (showModal) {
    return (
      <dialog id='contact-dialog' ref={dialogRef}>
        <form method='dialog'>
          <button type='button' id='close' aria-label='close' formNoValidate>
            X
          </button>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name'></input>
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email'></input>
          <label htmlFor='message'>Message:</label>
          <textarea></textarea>
        </form>
      </dialog>
    );
  }
}
