import React from 'react'
import Featured from './Featured'
import GameFaq from './GameFaq'
import GameHero from './GameHero'
import GameNews from './GameNews'
import GameSolution from './GameSolution'
import OurGame from './OurGame'

const UnityGame = () => {
  return (
    <>
      <GameHero />
      <GameSolution />
      <OurGame />
      <GameNews />
      <Featured />
      <GameFaq />
    </>
  )
}

export default UnityGame