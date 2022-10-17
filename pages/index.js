import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/banner";

export default function Home () {
    const handleOnBannerButtonClick = () => {
        console.log('h1')
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Shops</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerButtonClick } />
          <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400}/></div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
