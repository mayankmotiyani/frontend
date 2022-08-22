import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Featured from './Featured'
import GameHero from './GameHero'
import GameNews from './GameNews'
import GameSolution from './GameSolution'
import OurGame from './OurGame'

const UnityGame = (props) => {
  const { game_slug } = useParams()
  // =========================== scroll To Top default =========================
  useEffect(() => {
    props.demo('top')
  }, [game_slug])
  // =========================== scroll To Top default =========================
  return (
    <>
      <GameHero />
      <GameSolution />
      <OurGame />
      <GameNews />
      <Featured />
    </>
  )
}

export default UnityGame