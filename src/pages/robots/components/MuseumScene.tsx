import clsx from "clsx";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import RobotModel from "../../../scenes/models/RobotModel";
import type { MuseumRobot } from "../data/robots";

type MuseumSceneProps = {
  robots: MuseumRobot[];
  focusedRobotId: string;
  onFocusRobot: (id: string) => void;
};

export default function MuseumScene({
  robots,
  focusedRobotId,
  onFocusRobot,
}: MuseumSceneProps) {
  const activeRobot = useMemo(
    () => robots.find((robot) => robot.id === focusedRobotId) ?? robots[0],
    [robots, focusedRobotId]
  );

  if (!activeRobot) {
    return <div className="glass-panel h-[560px] rounded-3xl" />;
  }

  return (
    <div className="glass-panel relative h-[560px] overflow-hidden rounded-3xl">
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 z-10 transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),rgba(2,6,23,0.58))]",
          focusedRobotId ? "opacity-100" : "opacity-85"
        )}
      />

      <Canvas shadows camera={{ position: [0, 2.5, 8], fov: 42 }}>
        <color attach="background" args={["#010712"]} />
        <fog attach="fog" args={["#010712", 10, 28]} />

        <ambientLight intensity={0.22} />
        <hemisphereLight
          intensity={0.36}
          color={new THREE.Color("#a8d4ff")}
          groundColor={new THREE.Color("#050914")}
        />
        <directionalLight
          position={[0, 9, 8]}
          intensity={1.1}
          color="#bedbff"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <MuseumCameraRig target={activeRobot.stagePosition} />
        <MuseumFloor />

        {robots.map((robot) => (
          <RobotExhibit
            key={robot.id}
            robot={robot}
            active={robot.id === focusedRobotId}
            onFocusRobot={onFocusRobot}
          />
        ))}

        <Sparkles count={120} size={2} scale={[13, 4, 8]} speed={0.22} />
        <Environment preset="night" />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.7}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div className="pointer-events-none absolute left-5 top-5 z-20 rounded-xl border border-cyan-300/35 bg-slate-950/72 px-4 py-3 backdrop-blur-sm">
        <p className="section-title text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/85">
          Focus Light
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-100">{activeRobot.name}</p>
      </div>
    </div>
  );
}

function MuseumCameraRig({
  target,
}: {
  target: readonly [number, number, number];
}) {
  const lookAt = useMemo(() => new THREE.Vector3(), []);
  const desiredPosition = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    desiredPosition.set(target[0], 2.5, target[2] + 7.7);
    state.camera.position.lerp(desiredPosition, 1 - Math.exp(-delta * 2.5));
    lookAt.set(target[0], 0.8, target[2]);
    state.camera.lookAt(lookAt);
  });

  return null;
}

function MuseumFloor() {
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[0, -1.12, 0]} receiveShadow>
        <planeGeometry args={[22, 12]} />
        <meshStandardMaterial color="#050b1a" metalness={0.22} roughness={0.85} />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position={[0, -1.11, 0]}>
        <ringGeometry args={[1.7, 1.8, 64]} />
        <meshBasicMaterial color="#144176" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

type RobotExhibitProps = {
  robot: MuseumRobot;
  active: boolean;
  onFocusRobot: (id: string) => void;
};

function RobotExhibit({ robot, active, onFocusRobot }: RobotExhibitProps) {
  const robotRef = useRef<THREE.Group>(null);
  const spotRef = useRef<THREE.SpotLight>(null);
  const fillRef = useRef<THREE.PointLight>(null);

  useFrame((state, delta) => {
    if (robotRef.current) {
      const bobAmount = active ? 0.07 : 0.035;
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime + robot.rotationOffset) * bobAmount;
      robotRef.current.rotation.y += delta * (active ? 0.34 : 0.17);
    }

    if (spotRef.current) {
      spotRef.current.intensity = THREE.MathUtils.damp(
        spotRef.current.intensity,
        active ? 58 : 9,
        4.6,
        delta
      );
    }

    if (fillRef.current) {
      fillRef.current.intensity = THREE.MathUtils.damp(
        fillRef.current.intensity,
        active ? 5.8 : 1.7,
        4.6,
        delta
      );
    }
  });

  return (
    <group position={robot.stagePosition}>
      <spotLight
        ref={spotRef}
        position={[0, 8, 0.45]}
        angle={0.33}
        penumbra={0.65}
        distance={20}
        color={robot.accent}
        castShadow
      >
        <object3D attach="target" position={[0, 0.8, 0]} />
      </spotLight>

      <pointLight ref={fillRef} position={[0, 1.1, 1.7]} color={robot.accent} />

      <mesh rotation-x={-Math.PI / 2} position={[0, -1.01, 0]} receiveShadow>
        <cylinderGeometry args={[1.35, 1.5, 0.22, 52]} />
        <meshStandardMaterial
          color={active ? "#11254a" : "#081226"}
          metalness={0.8}
          roughness={0.34}
        />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position={[0, -0.88, 0]}>
        <ringGeometry args={[1.1, 1.24, 48]} />
        <meshBasicMaterial color={robot.accent} transparent opacity={active ? 0.92 : 0.45} />
      </mesh>

      <group
        ref={robotRef}
        onPointerDown={() => onFocusRobot(robot.id)}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
        }}
      >
        <RobotModel
          modelPath={robot.modelPath}
          scale={1.05}
          rotation={[0, robot.rotationOffset, 0]}
          position={[0, -0.08, 0]}
        />
      </group>
    </group>
  );
}
