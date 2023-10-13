import styles from '../../app/resume/styles.module.css';

export default function Skills() {
  return (
    <section className={`${styles.keySkills} ${styles.section}`}>
      <h2 className={`${styles.resumeHeading2}`}>Skills</h2>
      <ul className={styles.skills}>
        <li>.Net MVC/Core</li>
        <li>JavaScript and React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MS SQL</li>
      </ul>
    </section>
  );
}
