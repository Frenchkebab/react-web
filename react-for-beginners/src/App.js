import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.title}>
      <h1>Welcome back!</h1>
      <Button text="Continue" />
    </div>
  );
}

export default App;
