import React from "react";
import css from "./Hero.module.scss";
import Navbar from "../../Component/Navbar";
import line from '../../Assets/line.png'
import moon from '../../Assets/moon.png'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'




function Hero() {
  return (
    <div className={css.wrapper}>
      <Navbar/>
      <div className={css.heros}>
        <div className={css.left}>
          <h2>Think. make Solver</h2>
          <div className={css.left_text}>
          <img src={line} alt="" />
          <h3>What we do</h3>
          </div>
          <div className={css.left_end}>
            <h2> we enjoy creating delightful, human-centered digital experiences.</h2>
            <button>Learn mores</button>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.image3d}>
          <Canvas camera={{fov:25 , position: [5,5,5]}}>
        <OrbitControls enableZoom={false}  />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Sphere args={[1,100,200]} scale={1.4} >
        <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
        </Sphere>
      </Canvas>
        <img src={moon} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
