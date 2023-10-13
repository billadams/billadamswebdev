import styles from '../../app/resume/styles.module.css';

export default function Education() {
  return (
    <section className={`${styles.education} ${styles.section}`}>
      <h2 className={`${styles.resumeHeading2}`}>Education</h2>
      <div className={styles.degree}>
        Associate of Applied Science,
        <span className={styles.gradDate}> 12/2017</span>
      </div>
      <div>Southeast Community College - Lincoln, NE</div>
    </section>
  );
}
