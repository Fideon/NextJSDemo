import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          NextJS Demo!
        </div>

        <div className={styles.grid}>
          <a
            href="/GetEmployee"
            className={styles.card}
          >
            Get Employees
          </a>

          <a
            href="/PostEmployee"
            className={styles.card}
          >
            Post Employee
          </a>
        </div>
      </main>
    </>
  )
}
