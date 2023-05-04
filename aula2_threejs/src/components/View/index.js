import { OrbitControls, Sky, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" color="#ccff00" />
//     </mesh>
//   );
// }

function Car() {
  const { scene } = useGLTF('./car.gltf');

  return <primitive object={scene} scale={0.01} />;
}

function View() {
  return (
    <Canvas style={{ height: window.innerHeight }}>
      <OrbitControls />
      <Sky />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* <Box /> */}
      <Car />
    </Canvas>
  );
}

export default View;
