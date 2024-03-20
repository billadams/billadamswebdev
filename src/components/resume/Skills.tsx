import styles from '../../app/resume/styles.module.css';

export default function Skills() {
  return (
    <section className={`${styles.keySkills} ${styles.section}`}>
      <h2 className={`${styles.resumeHeading2}`}>Skills</h2>
      <ul className={styles.skills}>
        <li>C#</li>
        <li>VB.NET</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>REST APIs</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>jQuery</li>
        <li>SQL</li>
      </ul>
    </section>
  );
}
