import logo from './logo.svg';
import styles from './App.module.css';

function TitleDisplay({ title }: { title: string }) {
  return (
    <div>
      <b>{title}</b>
    </div>
  );
}

function App({ title }: { title: string }) {
  return (
    <div className={styles['App']}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <TitleDisplay title={title} />
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React today!
        </a>
      </header>
    </div>
  );
}

export default App;