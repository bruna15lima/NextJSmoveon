import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData {
      level:number; 
      currentExperience: number; 
      challengeCompleted: number; 
      levelUp: () => void;
      startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;    
}

export const ChallengesContext = createContext({} as ChallengesContextData );   

export function ChallengesProvider({ children }:ChallengesProviderProps){
  const [level, setLevet] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted ] = useState(0);


  function levelUp(){
    setLevet(level+1);
  }

  function startNewChallenge(){
    console.log('new_challenge')
  }


  return(
    <ChallengesContext.Provider 
    value={ { 
      level, 
      currentExperience, 
      challengeCompleted , 
      levelUp,
      startNewChallenge, 
      }}
    >
      { children }
    </ChallengesContext.Provider>
  );
}

