import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import RobotModel from "../../../scenes/models/RobotModel";

export default function Hero3DRobot() {
  return (
    <section className="h-screen bg-black">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[5, 10, 5]} intensity={2} />

        <Suspense fallback={null}>
          <Stage intensity={1}>
            <RobotModel />
          </Stage>
        </Suspense>

        <OrbitControls enablePan={false} />
      </Canvas>
    </section>
  );
}