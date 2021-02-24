import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenge() {
  const { challengeCompleted } = useContext(ChallengesContext);

  return(
    <div className={styles.complitedChallengeContainer}>
      <span>Desafio completos</span>
      <span>{challengeCompleted}</span>
    </div>
  );
}