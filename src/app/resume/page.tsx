import Sidebar from '@/components/resume/Sidebar';
import Skills from '@/components/resume/Skills';
import Education from '@/components/resume/Education';
import WorkHistory from '@/components/resume/WorkHistory';

import styles from './styles.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bill Adams' Resume",
};

export default function Page() {
  return (
    <div className={styles.resume}>
      <h1 className={styles.resumeHeading}>Bill Adams</h1>
      <Sidebar classNames={styles.sidebar}>
        {/* <Contact classNames={styles.contact} /> */}
        <Skills />
        <Education />
      </Sidebar>
      <div className={styles.resumeDetails}>
        <section className={`${styles.objective} ${styles.section}`}>
          <h2 className={styles.resumeHeading2}>Professional Summary</h2>
          <p>
            Full-stack web developer with ten years of experience developing
            highly scalable enterprise applications.
          </p>
        </section>
        <Skills />
        <Education />
        <WorkHistory />
      </div>
    </div>
  );
}
