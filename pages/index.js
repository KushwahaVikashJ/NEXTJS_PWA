import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pwa</title>
        <meta name="description" content="Next.js! PWA demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js! PWA demo app</h1>
      </main>
    </div>
  )
}
