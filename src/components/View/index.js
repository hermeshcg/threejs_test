import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" color="#ccff00" />
//     </mesh>
//   );
// }

function Shoe() {
  const { scene } = useGLTF('./shoe.gltf');
  const shoeRef = useRef();

  useFrame(() => {
    shoeRef.current.rotation.y = 0.01;
  });

  return <primitive ref={shoeRef} object={scene} scale={0.2} />;
}

function View() {
  return (
    <Canvas
      camera={{ fov: 9, position: [-10, 45, 20] }}
      style={{ height: window.innerHeight - 90 }}
    >
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* <Box /> */}
      <Shoe />
    </Canvas>
  );
}

export default View;
