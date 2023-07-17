import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import citynight from '../public/citynight.png'
import { Inter } from 'next/font/google'
import instagram from '../public/instagram.png'
import linkedln from '../public/linkedln-white.png'
import notfound from '../public/not.png'
import github from '../public/github.png'


const inter = Inter ({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zulfikri Mirza in NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="profile">
          <section className={styles.profile}>
            <div className={styles.profile__content}>
              <div className={`${styles.profile__title} ${inter.variable}`} >
                <h1>ZULFIKRI MIRZA</h1>
              </div>
              <p>Built in Next.js with the purpose of understanding the framework.</p>
            </div>
            <Image
              alt='City Night'
              src={citynight}
              placeholder='blur'
              quality={100}
              fill
              sizes='100vw'
              style={{
                objectFit: 'cover',
              }}
              />
          </section>
        </div>

        <div id="about">
          <section className={styles.aboutme} id="about">
              <div className={styles.aboutme__content}>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className={styles.aboutme__description_experience}>
                  <h3>Experiences</h3>
                  <ul>
                    <li>
                      6 Months as Lab Assistant of Digital Image Processing in Institut Teknologi Nasional Bandung (Feb 2020 - Jul 2020)
                    </li>
                    <li>
                      Helping Road to PPI Program that Held by Perhimpunan Pelajar Indonesia in Hungary in Dec 2019 - Jan 2020
                    </li>
                    <li>
                      7 Months as Head Of Public Relations in Himpunan Mahasiswa Informatika Itenas (Jun 2020 - Jan 2021)
                    </li>
                    <li>
                      Study Abroad Scholarship awardee in 2019 to study in Szent Istvan University(Known as M.A.T.E Today) Godollo, Hungary. funded by Erasmus and Dikti Indonesia, Organized by Institut Teknologi Nasional Bandung
                    </li>
                    <li>
                      3 Months Internship as Web Deloper using Laravel Framework in PT Teknologi Wirausaha Bangsa (Jul 2020 - Sep 2020)
                    </li>
                    <li>
                      1 Years Internship as Student Internship in PT Hexadata Primakom (Mar 2021 - Feb 2022)
                    </li>
                    <li>
                      Currently Working as Helpdesk Remittance Operation Application Layer 1 in PT Pos Indonesia (Persero) for 1 year contract (Sep 2022 - August 2023)
                    </li>
                  </ul>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" class={styles.aboutme__container}>
                  <div className={styles.aboutme__description_skills}>
                    <h3>Skills</h3>
                    <ul>
                      <li>
                        Programming Language: Python, PHP, SQL
                      </li>
                      <li>
                        Web Developing: Laravel Framework, Bootstrap, HTML, CSS, JS
                      </li>
                      <li>
                        Other: VSCode, Git, Microsoft SQL Management Studio
                      </li>
                    </ul>
                  </div>

                  <div className={styles.aboutme__contact}>
                    <h3>Hit me on !</h3>
                      <div className={styles.aboutme__contact_content}>
                        <ul>
                          <li>
                            Email: zulfikrimirza3@gmail.com
                          </li>
                          <div className={styles.aboutme__contact_media}>
                            <li className={styles.instagram}>
                              <a href="">
                                <Image 
                                src={instagram} 
                                alt="Instagram" 
                                width={50}
                                height={50}/></a>
                            </li>
                            <li className={styles.linkedln}>
                              <a href="https://www.linkedin.com/in/zulfikri-mirza/">
                                <Image 
                                  src={linkedln} 
                                  alt="Linkedln" 
                                  width={50}
                                  height={50}/>
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
          </section>



        </div>

        <div id="project">
          <section className={styles.last_project} id="project">
            <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" className={styles.last_project__title}>Last Web Developing Project</h2>
            <div className={styles.last_project__catalogue}>
              <article data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000" className={styles.last_project__card}>
                <Image 
                className={styles.last_project__card_image} 
                src={notfound} 
                alt="notfound" 
                width={200}
                height={200}/>
                <h4 className={styles.last_project__card_title}>The project are currently being built</h4>
              </article>

              <article data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className={styles.last_project__card}>
              <Image 
                className={styles.last_project__card_image} 
                src={notfound} 
                alt="notfound" 
                width={200}
                height={200}/>
              <h4 className={styles.last_project__card_title}>The project are currently being built</h4>
              </article>

              <article data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2000" className={styles.last_project__card}>
              <Image 
                className={styles.last_project__card_image} 
                src={notfound} 
                alt="notfound" 
                width={200}
                height={200}/>
                <h4 className={styles.last_project__card_title}>The project are currently being built</h4>
              </article>
            </div>
            
            <a data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2500" href="https://github.com/zulfikrimirza" className={styles.last_project__button}>
              <p>Check More Project on my Github</p>
              <Image 
                className={styles.last_project__card_image} 
                src={github} 
                alt="notfound" 
                width={50}
                height={50}/>
            </a>
            <div className={styles.ps}>
              <p>PS. Other Project like Data Analyst and Data Scientist that i learn in the past are also there</p>
            </div>
          </section>
        </div>

      </main>
      <style jsx>{`
        main{
          padding: 0;
          margin: 0;
          background: #000;
        }
        
        #profile {
          display: flex;
          flex-direction: column;
          width: 98.8vw;
          min-height: 100vh;
          padding: 0;
          margin: 0;
        }

        #about {
          margin: 0;
          padding: 0;
          height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          overflow: hidden;
          flex-direction: row; 


        }

        #project {

          overflow: hidden;
          
          display: flex;
          background: black;
          
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
