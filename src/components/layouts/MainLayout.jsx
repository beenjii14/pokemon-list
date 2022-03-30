import Navbar from 'components/Navbar'
import Head from 'next/head'
import styles from 'styles/components/mainLayout/mainLayout.module.scss'

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
