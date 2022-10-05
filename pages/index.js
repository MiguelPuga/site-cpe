import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Cursinho EACH</title>
        <meta name="description" content="" />
        <link rel="icon" href="/logo-cpe-head.png" />
      </Head>

      <header className={styles.header}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a className={styles.menuItemLink}>INÍCIO</a>
          </li>
          <li className={styles.menuItem}>
            <a>QUEM<br />SOMOS</a>
          </li>
          <li className={styles.menuItem}>
            <a>COMO<br />FUNCIONA</a>
          </li>
          <li className={styles.menuItem}>
            <Image src="/logo-cpe.png" width={120} height={120} />
          </li>
          <li className={styles.menuItem}>
            <a>ÁREA DO<br />ALUNO</a>
          </li>
          <li className={styles.menuItem}>
            <a>FAÇA<br />PARTE</a>
          </li>
          <li className={styles.menuItem}>
            <a>DOE<br />AGORA</a>
          </li>
        </ul>
      </header>

      <div className={styles.imagemContainer}>
        <img src="/alunos.png" className={styles.imagem} />
      </div>

      <section className={styles.content}>
        <div className={styles.contentTitle}>
          ESTUDE COM A GENTE
          <img src='/triple_triangles.png' className={styles.tripleTriangles} />
        </div>
        <div>
          Nós transformamos em <span className={styles.boldText}>realidade</span> o sonho de entrar na <span className={styles.boldText}>universidade.</span>
        </div>
        <div className={`${styles.why} ${styles.boldText}`}>
          Por que escolher o Cursinho EACH?
        </div>
        <div className={styles.contentText}>
          <p>Falar dos nossos diferenciais blablablalabla ps: não entrar a fundo em relação aos materiais e ferramentas pq tem uma parte só pra isso.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <p>Ficou interessadx? Preencha o formulário abaixo que entraremos em contato para te avisar sobre os próximos processos seletivos!</p>
        </div>
        <div className={styles.formInterest}>
          <img src='/clipboard.svg' width={100} height={100} />
          <button className={styles.formButton}>
            Formulário de interesse
          </button>
        </div>
      </section >

      <footer className={styles.footer}>
        <div className={styles.local}>
          <span className={styles.localBold}>
            Cursinho Popular EACH-USP<br />
          </span>
          Rua Arlindo Béttio, 1000<br />
          Ermelino Matarazzo<br />
          São Paulo<br />
          03828-000
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerHorizontalContainer}>
            <div>
              <img src="/insta_icon.png" width={28} height={30} />
            </div>
            @cursinhoeachusp <br />
            @lojinhadaatena
          </div>
          <div className={styles.footerHorizontalContainer}>
            <div>
              <img src="/facebook_icon.png" />
            </div>
            /CursinhoPopularEACH
          </div>
          <div className={styles.footerHorizontalContainer}>
            <div>
              <img src="/email_icon.png" />
            </div>
            cursinhoeach.diretoriageral@gmail.com
          </div>
        </div>
        <img src='/atena.png' className={styles.footerAtena} />
      </footer>
    </div >
  )
}
