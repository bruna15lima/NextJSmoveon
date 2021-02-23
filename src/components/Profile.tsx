import styles from '../styles/components/Profile.modules.css';

export function Profile() {
  return (
    <div className= {styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/5524114?s=60&v=4://github.com/bruna15lima/bruna.png" alt="bruna15lima"/>
      <div>
        <strong>Bruna Calheiros</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}