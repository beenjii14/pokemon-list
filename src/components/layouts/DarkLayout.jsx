import styles from 'styles/components/layouts/darkLayout.module.scss'
export const DarkLayout = ({ children }) => {
  return (
    <div className={styles.containerDarkLayout}>
      <h1>Dark-Layout</h1>
      {children}
    </div>
  )
}
