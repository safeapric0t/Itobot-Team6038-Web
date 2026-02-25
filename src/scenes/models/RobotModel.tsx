import { useGLTF } from "@react-three/drei";

export default function RobotModel() {
  const { scene } = useGLTF("/models/Astronaut.glb");

  return <primitive object={scene} scale={1.2} />;
}

useGLTF.preload("/models/Astronaut.glb");