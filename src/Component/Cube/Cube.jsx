import React, { useRef } from 'react'
import {PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


    const Cube = () => { 
        const textref=useRef()
        useFrame(state=> (textref.current.position.x=Math.sin(state.clock.elapsedTime)*2))
    
  return (
    <mesh>
    <boxGeometry  args={[1,1,1]} />
    <meshStandardMaterial  >
      <RenderTexture attach="map" >
        <PerspectiveCamera makeDefault position={[0,0,5]} />
        <color attach="background" args={["#dc9dcd"]} />
        <Text ref={textref} fontSize={1} color='#555'>
        Karlin
        </Text>
      </RenderTexture>
    </meshStandardMaterial>
  </mesh>
  )
}

export default Cube