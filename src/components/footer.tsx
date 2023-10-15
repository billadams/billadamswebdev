import { getCurrentYear } from '../lib/dates';

export default function Footer() {
  return (
    <footer>Copyright &copy; {getCurrentYear()} BA Web Development</footer>
  );
}
