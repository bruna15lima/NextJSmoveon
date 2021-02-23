import styles from '../styles/components/CompletedChallenges.modules.css';

export function CompletedChallenges() {
  return(
    <div className={styles.complitedChallengesContainer}>
      <span>Desafio completos</span>
      <span>5</span>
    </div>
  );
}