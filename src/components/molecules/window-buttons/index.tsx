import styles from './styles.module.css';

/**
 * Purely aesthetical component
 * Are the three dots (upper left corner) that simulate the system window
 */
export default function WindowButtons() {
  return (
    <div className={styles.actions}>
      <div className={styles.close} />
      <div className={styles.backfull} />
      <div className={styles.full} />
    </div>
  );
}