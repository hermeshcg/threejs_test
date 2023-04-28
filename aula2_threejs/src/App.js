import { OrbitControls, Sky, Sphere, Stars, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" color="#ccff00" />
    </mesh>
  );
}

function Sphere2() {
  return (
    <Sphere>
      <meshStandardMaterial color="hotpink" />
    </Sphere>
  );
}

function App() {
  return (
    <Canvas style={{ height: window.innerHeight }}>
      <OrbitControls />
      <Sky>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Sky>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* <Box /> */}
      <Sphere2 />
    </Canvas>
  );
}

export default App;
