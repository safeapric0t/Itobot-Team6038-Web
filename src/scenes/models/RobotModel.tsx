import { Clone, useGLTF } from "@react-three/drei";

type Vec3 = [number, number, number];


type RobotModelProps = {
  modelPath?: string;
  scale?: number | Vec3;
  rotation?: Vec3;
  position?: Vec3;
};

export default function RobotModel({
  modelPath = "/models/result.glb",
  scale = 1.2,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
}: RobotModelProps) {
  const gltf = useGLTF(modelPath);

  return <Clone object={gltf.scene} scale={scale} rotation={rotation} position={position} />;
}

useGLTF.preload("/models/result.glb");
