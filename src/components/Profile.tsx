import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } =  useContext(ChallengesContext)
  return (
    <div className= {styles.profileContainer}>
      <img src="https://media-exp1.licdn.com/dms/image/C5103AQHIxchsYuYHaA/profile-displayphoto-shrink_200_200/0/1517571826663?e=1619654400&v=beta&t=vH9KdLHcg7wHd8jHENVcxvXZ2rWa4oIGnkAMpgGuZS4"/>
      <div>
        <strong>Bruna Calheiros</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }

        </p>
      </div>
    </div>
  )
}