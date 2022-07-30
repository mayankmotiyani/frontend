import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import Featured from './Featured'
import GameFaq from './GameFaq'
import GameHero from './GameHero'
import GameNews from './GameNews'
import GameSolution from './GameSolution'
import OurGame from './OurGame'

const UnityGame = (props) => {
  useEffect(() => {
    props.demo('top')
  }, [])

  const params = useParams();
  const { gameSlug } = params;
  console.log('gameSlug', gameSlug);

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