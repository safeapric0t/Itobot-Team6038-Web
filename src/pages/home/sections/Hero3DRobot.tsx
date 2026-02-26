import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import RobotModel from "../../../scenes/models/RobotModel";

function HeroRobot() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.position.y = -0.2 + Math.sin(state.clock.elapsedTime * 1.1) * 0.06;
  });

  return (
    <Float speed={1.5} floatIntensity={0.22} rotationIntensity={0.14}>
      <group ref={groupRef}>
        <RobotModel scale={1.24} />
      </group>
    </Float>
  );
}

export default function Hero3DRobot() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="museum-grid absolute inset-0 opacity-35" />
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="absolute -right-28 bottom-16 h-72 w-72 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="z-10 max-w-xl">
          <p className="section-title text-xs font-semibold uppercase tracking-[0.5em] text-cyan-200">
            Team 6038 Experience
          </p>
          <h2 className="section-title mt-5 text-4xl font-bold uppercase leading-tight text-white md:text-6xl">
            A Cinematic Robotics Showcase
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            Enter a digital museum where every generation of our robots becomes an
            interactive exhibit with dramatic lighting, motion, and technical
            storytelling.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/robots"
              className="rounded-full border border-cyan-200/65 bg-cyan-300/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-300/20"
            >
              Open Museum
            </Link>
            <a
              href="#highlights"
              className="rounded-full border border-slate-500/65 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-slate-200"
            >
              Explore Highlights
            </a>
          </div>
        </div>

        <div className="glass-panel glow-border relative h-[440px] overflow-hidden rounded-[30px] md:h-[560px]">
          <Canvas shadows camera={{ position: [0, 1.8, 6.2], fov: 42 }}>
            <color attach="background" args={["#020817"]} />
            <fog attach="fog" args={["#020817", 8, 18]} />

            <ambientLight intensity={0.26} />
            <hemisphereLight
              intensity={0.42}
              color={new THREE.Color("#9dd9ff")}
              groundColor={new THREE.Color("#050914")}
            />
            <directionalLight
              position={[5, 8, 4]}
              intensity={1.5}
              color="#b7d8ff"
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <spotLight
              position={[0, 8, 2]}
              angle={0.33}
              intensity={44}
              penumbra={0.5}
              color="#8dd4ff"
              castShadow
            >
              <object3D attach="target" position={[0, 0, 0]} />
            </spotLight>

            <mesh rotation-x={-Math.PI / 2} position={[0, -1.3, 0]} receiveShadow>
              <circleGeometry args={[3.6, 64]} />
              <meshStandardMaterial color="#0b1732" metalness={0.58} roughness={0.42} />
            </mesh>

            <HeroRobot />
            <Sparkles count={130} size={2.3} scale={[8, 3.2, 8]} speed={0.25} />
            <Environment preset="city" />

            <OrbitControls
              autoRotate
              autoRotateSpeed={0.5}
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 2.75}
              maxPolarAngle={Math.PI / 2.05}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
