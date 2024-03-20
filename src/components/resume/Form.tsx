'use client';

import resume from './resume.module.css';

export default function Form() {
  return (
    <form autoComplete='off'>
      <div className={resume.inputCol}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div className={resume.inputCol}>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' />
      </div>
      <div className={resume.inputCol}>
        <label htmlFor='message'>Message</label>
        <textarea id='message' rows={5} className='fuck'></textarea>
      </div>
      <button type='button'>Send Email</button>
    </form>
  );
}
