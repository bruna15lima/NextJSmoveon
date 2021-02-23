import styles from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenge() {
  return(
    <div className={styles.complitedChallengeContainer}>
      <span>Desafio completos</span>
      <span>5</span>
    </div>
  );
}