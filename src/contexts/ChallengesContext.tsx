import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
      level:number; 
      currentExperience: number; 
      challengeCompleted: number; 
      experienceToNextLevel: number; 
      activeChallenge: Challenge,
      levelUp: () => void;
      startNewChallenge: () => void;
      resetChallenge: () => void;
      completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;    
}

export const ChallengesContext = createContext({} as ChallengesContextData );   

export function ChallengesProvider({ children }:ChallengesProviderProps){
  const [level, setLevet] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted ] = useState(0);

  
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level +1) * 4,2)

  function levelUp(){
    setLevet(level+1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];
    
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge(challenge){
     if (!activeChallenge) {
       return;
     }
     
     const { amount }  = activeChallenge;

     let finalExperience = currentExperience + amount;
  
     if (finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
     }
     
     setCurrentExperience(finalExperience);
     setActiveChallenge(null);
     setChallengeCompleted(challengeCompleted + 1);
  
  }

  return(
    <ChallengesContext.Provider 
    value={ { 
      level, 
      currentExperience, 
      experienceToNextLevel,
      challengeCompleted , 
      levelUp,
      startNewChallenge, 
      activeChallenge,
      resetChallenge,
      completeChallenge,
      }}
    >
      { children }
    </ChallengesContext.Provider>
  );
}

