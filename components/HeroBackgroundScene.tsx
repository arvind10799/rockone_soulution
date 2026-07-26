"use client";

import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 48;
const PACKET_COUNT = 7;

export default function HeroBackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.dataset.sceneReady = "initializing";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      preserveDrawingBuffer: true
    });
    const network = new THREE.Group();
    const architecture = new THREE.Group();
    const packets: THREE.Mesh[] = [];
    let frameId = 0;

    camera.position.set(0, 0, 10);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    scene.add(network, architecture);

    const nodePositions: THREE.Vector3[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.055, 16, 16);
    const blueNode = new THREE.MeshBasicMaterial({
      color: 0x11a8df,
      transparent: true,
      opacity: 0.78
    });
    const orangeNode = new THREE.MeshBasicMaterial({
      color: 0xf35a2b,
      transparent: true,
      opacity: 0.84
    });

    for (let index = 0; index < NODE_COUNT; index += 1) {
      const angle = index * 0.58;
      const band = index % 4;
      const radius = 2.1 + band * 0.42;
      const position = new THREE.Vector3(
        1.7 + Math.cos(angle) * radius,
        Math.sin(angle * 0.74) * 1.7 + (band - 1.5) * 0.14,
        Math.sin(angle) * 1.2 - 0.8
      );
      const node = new THREE.Mesh(
        nodeGeometry,
        index % 9 === 0 ? orangeNode : blueNode
      );

      node.position.copy(position);
      nodePositions.push(position);
      network.add(node);
    }

    const linePositions = new Float32Array((NODE_COUNT - 1) * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8cd8ff,
      transparent: true,
      opacity: 0.34
    });

    for (let index = 0; index < NODE_COUNT - 1; index += 1) {
      const current = nodePositions[index];
      const next = nodePositions[(index + 5) % NODE_COUNT];
      const offset = index * 6;

      linePositions.set([current.x, current.y, current.z], offset);
      linePositions.set([next.x, next.y, next.z], offset + 3);
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    network.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x1c5fb8,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide
    });
    const accentRingMaterial = new THREE.MeshBasicMaterial({
      color: 0xf35a2b,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide
    });
    const largeRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.75, 0.012, 12, 120),
      ringMaterial
    );
    const smallRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.26, 0.012, 12, 96),
      accentRingMaterial
    );

    largeRing.position.set(2.15, 0.18, -1.2);
    largeRing.rotation.set(Math.PI / 2.6, 0.1, -0.22);
    smallRing.position.set(3.8, -1.05, -0.4);
    smallRing.rotation.set(Math.PI / 2.4, -0.18, 0.28);
    architecture.add(largeRing, smallRing);

    const panelGeometry = new THREE.PlaneGeometry(1.24, 0.72);
    const panelMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide
    });
    const panelEdgeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8cd8ff,
      transparent: true,
      opacity: 0.22
    });

    for (let index = 0; index < 5; index += 1) {
      const panel = new THREE.Mesh(panelGeometry, panelMaterial);
      const panelEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(panelGeometry),
        panelEdgeMaterial
      );
      const wrapper = new THREE.Group();

      wrapper.position.set(1.35 + index * 0.68, 1.1 - index * 0.44, -1.4 + index * 0.26);
      wrapper.rotation.set(-0.08, -0.42, 0.08);
      wrapper.add(panel, panelEdges);
      architecture.add(wrapper);
    }

    const packetGeometry = new THREE.SphereGeometry(0.07, 18, 18);
    const packetMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    for (let index = 0; index < PACKET_COUNT; index += 1) {
      const packet = new THREE.Mesh(packetGeometry, packetMaterial);

      packets.push(packet);
      architecture.add(packet);
    }

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();

      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      camera.position.x = width < 900 ? 0.85 : 0;
    };

    const renderFrame = (time = 0) => {
      const t = time * 0.001;

      network.rotation.y = Math.sin(t * 0.28) * 0.18 - 0.2;
      network.rotation.x = Math.sin(t * 0.2) * 0.08;
      network.position.y = Math.sin(t * 0.42) * 0.08;
      architecture.rotation.y = Math.sin(t * 0.18) * 0.08;
      largeRing.rotation.z = t * 0.18;
      smallRing.rotation.z = -t * 0.24;

      packets.forEach((packet, index) => {
        const progress = (t * 0.16 + index / PACKET_COUNT) % 1;
        const arc = progress * Math.PI * 2;

        packet.position.set(
          1.5 + progress * 4.1,
          Math.sin(arc) * 0.75 - 0.56,
          Math.cos(arc * 0.8) * 0.55 - 0.7
        );
        packet.scale.setScalar(0.72 + Math.sin(t * 2.2 + index) * 0.18);
      });

      renderer.render(scene, camera);
    };

    const animate = (time: number) => {
      renderFrame(time);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);

    frameId = window.requestAnimationFrame(animate);

    canvas.dataset.sceneReady = "true";

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      renderer.dispose();
      nodeGeometry.dispose();
      lineGeometry.dispose();
      packetGeometry.dispose();
      panelGeometry.dispose();
      blueNode.dispose();
      orangeNode.dispose();
      lineMaterial.dispose();
      ringMaterial.dispose();
      accentRingMaterial.dispose();
      panelMaterial.dispose();
      panelEdgeMaterial.dispose();
      packetMaterial.dispose();
    };
  }, []);

  return (
    <div className="hero-background-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
