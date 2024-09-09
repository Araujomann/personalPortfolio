import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface AvatarModelProps {
  scale: number;
}

const AvatarModel = ({ scale }: AvatarModelProps) => {
  const gltf = useLoader(
    GLTFLoader,
    "https://models.readyplayer.me/66da0adde0b85c8ace8cbc5a.glb",
  );
  return <primitive object={gltf.scene} scale={scale} />;
};

export const Avatar = () => {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const scale = 240;

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(0, scale / 2, 0); // Ajuste o alvo dos controles de órbita
      controlsRef.current.update();
    }
  }, [scale]);

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, scale, scale * 2] }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 5]} />
      <AvatarModel scale={scale} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false} // Desativa o zoom
        minPolarAngle={Math.PI / 3.7}
        maxPolarAngle={Math.PI / 2.3}
      />
    </Canvas>
  );
};
