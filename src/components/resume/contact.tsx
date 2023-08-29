import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

type ContactProps = {
  classNames: string;
};

export default function Contact(props: ContactProps) {
  return (
    <section className={props.classNames}>
      <address>
        Bill Adams
        <br />
        <a href='mailto:billadams1977@gmail.com' title='Email'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
        </a>
        <a
          href='https://linkedin.com/in/billadamswebdev/'
          title='LinkedIn'
          target='_blank'
          rel='noopener'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </address>
    </section>
  );
}
