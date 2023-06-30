import React from 'react'
import css from './Test.module.scss'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Cube from '../Cube/Cube'

function Test() {
  return (
    <div className={css.wrapper}>
      <Canvas camera={{fov:25 , position: [5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
      </Canvas>
    </div>
  )
}

export default Test