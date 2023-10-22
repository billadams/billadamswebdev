import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { getCurrentYear } from '../lib/dates';

export default function Footer() {
  return (
    <footer>
      <div className='copyright'>
        Copyright &copy; {getCurrentYear()} BA Web Development
      </div>
      <div className='social'>
        <a href='https://www.linkedin.com/in/billadamswebdev/' target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} className={`icon`} />
        </a>
        <a href='https://github.com/billadams' target='_blank'>
          <FontAwesomeIcon icon={faGithub} className={`icon`} />
        </a>
      </div>
    </footer>
  );
}
