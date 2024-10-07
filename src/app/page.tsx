import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.message}>
          I’m too busy working on interesting projects to build my portfolio site. 
          <br/>
          Come back later when I have more time... or when I run out of ideas for fun projects!
        </h1>
      </main>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/lyova-avetisyan-34b50b236/" target="_blank" rel="noopener noreferrer">
          My LinkedIn
        </a>
        <a href="https://github.com/lyova2001" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  )
}
