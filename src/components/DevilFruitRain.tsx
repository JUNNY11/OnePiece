import { useRef, useMemo, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FRUIT_PALETTES = [
  { name: "Golden", base: "#D4A017", swirl: "#B8860B", highlight: "#FFD700", stem: "#4682B4" },
  { name: "Purple", base: "#6B2FA0", swirl: "#4A1072", highlight: "#9B59B6", stem: "#2E7D32" },
  { name: "Wood", base: "#8B6914", swirl: "#6B4E0A", highlight: "#A0822A", stem: "#3E2723" },
];

const fruitVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPos;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fruitFragmentShader = `
  uniform vec3 uBaseColor;
  uniform vec3 uSwirlColor;
  uniform vec3 uHighlightColor;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPos;

  float swirl(vec2 p, float scale) {
    float angle = atan(p.y, p.x);
    float radius = length(p);
    float spiral = sin(angle * 6.0 + radius * scale - uTime * 0.3);
    float spiral2 = sin(angle * 4.0 - radius * scale * 0.7 + uTime * 0.2);
    return (spiral * 0.5 + spiral2 * 0.5) * 0.5 + 0.5;
  }

  void main() {
    vec3 n = normalize(vPosition);
    vec2 swirlUV = vec2(atan(n.x, n.z) / 3.14159, n.y * 1.5);
    float s1 = swirl(swirlUV * 3.0, 8.0);
    float s2 = swirl(swirlUV * 2.0 + 0.5, 6.0);
    float swirlPattern = s1 * 0.6 + s2 * 0.4;
    float ridge = smoothstep(0.3, 0.5, swirlPattern) - smoothstep(0.5, 0.7, swirlPattern);
    ridge = ridge * 0.8 + 0.2;

    vec3 baseCol = mix(uSwirlColor, uBaseColor, swirlPattern);
    baseCol = mix(baseCol, uHighlightColor, ridge * 0.4);

    vec3 lightDir = normalize(vec3(0.5, 1.0, 0.8));
    float diffuse = max(dot(vNormal, lightDir), 0.0) * 0.7 + 0.3;
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(vNormal, halfDir), 0.0), 32.0) * 0.5;
    float ao = mix(0.7, 1.0, swirlPattern);

    vec3 finalColor = baseCol * diffuse * ao + uHighlightColor * spec + uBaseColor * fresnel * 0.3;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// ─── Devil Fruit Mesh (forwardRef for R3F compatibility) ───
const DevilFruitMesh = forwardRef<THREE.Group, { palette: typeof FRUIT_PALETTES[0] }>(
  function DevilFruitMesh({ palette }, ref) {
    const uniforms = useMemo(() => ({
      uBaseColor: { value: new THREE.Color(palette.base) },
      uSwirlColor: { value: new THREE.Color(palette.swirl) },
      uHighlightColor: { value: new THREE.Color(palette.highlight) },
      uTime: { value: 0 },
    }), [palette]);

    useFrame((_, delta) => {
      uniforms.uTime.value += delta;
    });

    const bumps = useMemo(() => {
      return Array.from({ length: 12 }).map((_, i) => {
        const phi = Math.acos(2 * ((i + 0.5) / 12) - 1);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        return [
          Math.sin(phi) * Math.cos(theta) * 0.95,
          Math.sin(phi) * Math.sin(theta) * 0.95,
          Math.cos(phi) * 0.95,
        ] as [number, number, number];
      });
    }, []);

    // Generate 3D spiral curves on the fruit surface
    const spiralCurves = useMemo(() => {
      const curves: THREE.CatmullRomCurve3[] = [];
      const numSpirals = 5;
      for (let s = 0; s < numSpirals; s++) {
        const points: THREE.Vector3[] = [];
        const offsetAngle = (s / numSpirals) * Math.PI * 2;
        for (let t = 0; t < 30; t++) {
          const frac = t / 30;
          const theta = offsetAngle + frac * Math.PI * 2.5;
          const phi = Math.PI * 0.15 + frac * Math.PI * 0.7;
          const r = 1.03;
          points.push(new THREE.Vector3(
            r * Math.sin(phi) * Math.cos(theta),
            r * Math.cos(phi),
            r * Math.sin(phi) * Math.sin(theta)
          ));
        }
        curves.push(new THREE.CatmullRomCurve3(points));
      }
      return curves;
    }, []);
    return (
      <group ref={ref}>
        <mesh>
          <sphereGeometry args={[1, 48, 48]} />
          <shaderMaterial
            vertexShader={fruitVertexShader}
            fragmentShader={fruitFragmentShader}
            uniforms={uniforms}
          />
        </mesh>
        {bumps.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.18, 12, 12]} />
            <meshStandardMaterial color={palette.base} roughness={0.6} metalness={0.2} />
          </mesh>
        ))}

        {/* 3D spiral ridges on the surface */}
        {spiralCurves.map((curve, i) => (
          <mesh key={`spiral-${i}`}>
            <tubeGeometry args={[curve, 40, 0.04, 6, false]} />
            <meshStandardMaterial color={palette.swirl} roughness={0.5} metalness={0.3} />
          </mesh>
        ))}

        <group position={[0, 1.05, 0]}>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.06, 0.08, 0.5, 8]} />
            <meshStandardMaterial color={palette.stem} roughness={0.8} />
          </mesh>
          <mesh position={[0.15, 0.55, 0]} rotation={[0, 0, Math.PI / 4]}>
            <torusGeometry args={[0.12, 0.03, 8, 16, Math.PI * 1.5]} />
            <meshStandardMaterial color={palette.stem} roughness={0.7} />
          </mesh>
        </group>
      </group>
    );
  }
);

// ─── Falling Fruit (forwardRef) ───
interface FruitData {
  startX: number;
  startY: number;
  startZ: number;
  speed: number;
  rotSpeed: [number, number, number];
  scale: number;
  palette: typeof FRUIT_PALETTES[0];
  bounds: number;
}

const FallingFruit = forwardRef<THREE.Group, FruitData>(
  function FallingFruit({ startX, startY, startZ, speed, rotSpeed, scale, palette, bounds }, _ref) {
    const groupRef = useRef<THREE.Group>(null!);
    const posY = useRef(startY);

    useFrame((_, delta) => {
      const g = groupRef.current;
      if (!g) return;

      posY.current -= speed * delta;

      if (posY.current < -bounds - 4) {
        posY.current = bounds + 4 + Math.random() * 10;
        g.position.x = (Math.random() - 0.5) * bounds * 2;
      }

      g.position.y = posY.current;
      g.rotation.x += rotSpeed[0] * delta;
      g.rotation.y += rotSpeed[1] * delta;
      g.rotation.z += rotSpeed[2] * delta;
    });

    return (
      <group ref={groupRef} position={[startX, startY, startZ]} scale={scale}>
        <DevilFruitMesh palette={palette} />
      </group>
    );
  }
);

// ─── Scene (forwardRef) ───
const FruitScene = forwardRef<THREE.Group>(
  function FruitScene(_props, ref) {
    const fruits = useMemo(() => {
      const items: FruitData[] = [];
      const count = 22;
      const bounds = 14;

      for (let i = 0; i < count; i++) {
        const layer = i < 7 ? 0 : i < 15 ? 1 : 2;
        const layerZ = layer === 0 ? -10 : layer === 1 ? -4 : 1;
        const layerScale = layer === 0 ? 0.3 : layer === 1 ? 0.55 : 0.75;
        // Reduced speed (~40% slower)
        const baseSpeed = layer === 0 ? 3 : layer === 1 ? 5.5 : 8;

        items.push({
          startX: (Math.random() - 0.5) * bounds * 2,
          startY: Math.random() * bounds * 3 + bounds,
          startZ: layerZ + (Math.random() - 0.5) * 2,
          speed: baseSpeed + Math.random() * 4,
          rotSpeed: [
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 3,
          ],
          scale: layerScale + Math.random() * 0.15,
          palette: FRUIT_PALETTES[Math.floor(Math.random() * FRUIT_PALETTES.length)],
          bounds,
        });
      }
      return items;
    }, []);

    return (
      <group ref={ref}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={0.9} />
        <directionalLight position={[-3, 5, -5]} intensity={0.3} color="#8B5CF6" />
        <pointLight position={[0, 0, 6]} intensity={0.6} color="#7C3AED" distance={25} />

        {fruits.map((props, i) => (
          <FallingFruit key={i} {...props} />
        ))}
      </group>
    );
  }
);

const DevilFruitRain = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "linear-gradient(180deg, #0a0612 0%, #110827 40%, #0d1117 100%)",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 16], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <fog attach="fog" args={["#0a0612", 18, 40]} />
        <FruitScene />
      </Canvas>
    </div>
  );
};

export default DevilFruitRain;
