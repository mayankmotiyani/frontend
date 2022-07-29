import React from 'react'
import particlesConfig from "./particlesConfig"
import Particles from "react-tsparticles";
const ParticlesBackground = () => {
  return (
    <>
      <Particles params={particlesConfig} />
    </>
  )
}

export default ParticlesBackground