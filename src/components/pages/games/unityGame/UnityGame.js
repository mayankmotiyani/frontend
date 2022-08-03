import React, { useEffect } from 'react'
import Featured from './Featured'
import GameFaq from './GameFaq'
import GameHero from './GameHero'
import GameNews from './GameNews'
import GameSolution from './GameSolution'
import OurGame from './OurGame'

const UnityGame = (props) => {
  // =========================== scroll To Top default =========================
  useEffect(() => {
    props.demo('top')
  }, [])
  // =========================== scroll To Top default =========================
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