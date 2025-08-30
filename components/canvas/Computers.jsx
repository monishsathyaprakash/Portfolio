import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

function AirbusModel({ isMobile }) {
  const { scene } = useGLTF("/models/desktop_pc/Airbus.gltf");
  return (
    <>
      <hemisphereLight intensity={1} groundColor="black" />
      <ambientLight intensity={0.65} />
      <spotLight intensity={1} position={[0, 1.5, 0.7]} angle={0.3} />
      <pointLight intensity={2} position={[1, 1.3, 0]} color={"#804dee"} />
      <pointLight intensity={2} position={[-1, 1.3, 1]} color={"#804dee"} />

      <PerspectiveCamera makeDefault position={[0, 2, 20]} fov={35} />

      <OrbitControls
        enableZoom
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        enableDamping
        dampingFactor={0.05}
        enablePan
      />

      <primitive
        object={scene}
        scale={0.08}
        position={[0, -1, 2]} 
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
}

export default function AirbusCanvas({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
      className="cursor-pointer"
    >
      <Suspense fallback={<CanvasLoader />}>
        <AirbusModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
