import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zulfikri Mirza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.profile}>
        <div className={styles.profile__detail}>
          <div className={styles.profile__background}>
          </div>
          <div className={styles.profile__title}>
            <h1>Zulfikri Mirza</h1>
          </div>
        </div>
      </section>

      <footer>
        
      </footer>

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
 
      `}</style>
    </div>
  )
}
