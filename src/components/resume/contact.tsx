import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

type ContactProps = {
  classNames: string;
};

export default function Contact(props: ContactProps) {
  return (
    <div className={props.classNames}>
      <address>
        Bill Adams
        <br />
        4045 SW 12th Street
        <br />
        Lincoln, NE 68522 <br />
        Contact Me:
        <a href='tel:402-817-8151' title='Phone'>
          <FontAwesomeIcon icon={faPhone} />
        </a>{' '}
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
    </div>
  );
}
