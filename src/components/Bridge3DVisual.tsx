import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Users, Shield, Building2, ArrowRight } from 'lucide-react';
import { BridgxLogo, BridgxEmblem } from './BridgxLogo';

export const Bridge3DVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.set(0, 2.2, 16);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Lighting setup for Black + Deep Navy + Electric Blue atmosphere
    const ambientLight = new THREE.AmbientLight(0x071a33, 2.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(5, 12, 10);
    scene.add(dirLight);

    const leftLight = new THREE.PointLight(0x00d9ff, 4.5, 30);
    leftLight.position.set(-6, 4, 6);
    scene.add(leftLight);

    const centerLight = new THREE.PointLight(0x1688ff, 6.0, 25);
    centerLight.position.set(0, 3, 5);
    scene.add(centerLight);

    const rightLight = new THREE.PointLight(0x00d9ff, 4.5, 30);
    rightLight.position.set(6, 4, 6);
    scene.add(rightLight);

    // 1. CLEAR HIGH-CONTRAST BRIDGE SPAN
    const span = 13;
    const bridgeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-span / 2, -0.9, 0),
      new THREE.Vector3(-span / 4, -0.05, 0),
      new THREE.Vector3(0, 0.25, 0),
      new THREE.Vector3(span / 4, -0.05, 0),
      new THREE.Vector3(span / 2, -0.9, 0),
    ]);

    // Solid High-Definition Roadway Deck (Deep Metallic Navy)
    const deckGeo = new THREE.TubeGeometry(bridgeCurve, 80, 0.22, 16, false);
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x071a33,
      metalness: 0.85,
      roughness: 0.2,
    });
    const deck = new THREE.Mesh(deckGeo, deckMat);
    rootGroup.add(deck);

    // Dual Guardrails for architectural clarity
    const leftRailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-span / 2, -0.7, 0.35),
      new THREE.Vector3(-span / 4, 0.15, 0.35),
      new THREE.Vector3(0, 0.45, 0.35),
      new THREE.Vector3(span / 4, 0.15, 0.35),
      new THREE.Vector3(span / 2, -0.7, 0.35),
    ]);
    const rightRailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-span / 2, -0.7, -0.35),
      new THREE.Vector3(-span / 4, 0.15, -0.35),
      new THREE.Vector3(0, 0.45, -0.35),
      new THREE.Vector3(span / 4, 0.15, -0.35),
      new THREE.Vector3(span / 2, -0.7, -0.35),
    ]);
    const railMat = new THREE.MeshStandardMaterial({ color: 0x0b2344, metalness: 0.9, roughness: 0.1 });
    const leftRail = new THREE.Mesh(new THREE.TubeGeometry(leftRailCurve, 80, 0.04, 8, false), railMat);
    const rightRail = new THREE.Mesh(new THREE.TubeGeometry(rightRailCurve, 80, 0.04, 8, false), railMat);
    rootGroup.add(leftRail);
    rootGroup.add(rightRail);

    // Illuminated Center Transit Line (Neon Electric Cyan)
    const centerLineGeo = new THREE.TubeGeometry(bridgeCurve, 80, 0.045, 8, false);
    const centerLineMat = new THREE.MeshBasicMaterial({ color: 0x00d9ff });
    const centerLine = new THREE.Mesh(centerLineGeo, centerLineMat);
    centerLine.position.y += 0.14;
    rootGroup.add(centerLine);

    // Suspension Towers at Both Ends for clear architectural bridge silhouette
    const towerGeo = new THREE.BoxGeometry(0.3, 3.2, 0.5);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x071a33,
      metalness: 0.8,
      roughness: 0.25,
    });

    const leftTower = new THREE.Mesh(towerGeo, towerMat);
    leftTower.position.set(-span / 2 + 0.8, 0.5, 0);
    rootGroup.add(leftTower);

    const rightTower = new THREE.Mesh(towerGeo, towerMat);
    rightTower.position.set(span / 2 - 0.8, 0.5, 0);
    rootGroup.add(rightTower);

    // Blinking Beacon on Left Tower (Niche Talent side)
    const beaconGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const leftBeaconMat = new THREE.MeshBasicMaterial({ color: 0x00d9ff });
    const leftBeacon = new THREE.Mesh(beaconGeo, leftBeaconMat);
    leftBeacon.position.set(-span / 2 + 0.8, 2.2, 0);
    rootGroup.add(leftBeacon);

    // Blinking Beacon on Right Tower (Verified Mandates side)
    const rightBeaconMat = new THREE.MeshBasicMaterial({ color: 0x00d9ff });
    const rightBeacon = new THREE.Mesh(beaconGeo, rightBeaconMat);
    rightBeacon.position.set(span / 2 - 0.8, 2.2, 0);
    rootGroup.add(rightBeacon);

    // Upper Suspension Cables Arch
    const archCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-span / 2 + 0.8, 2.1, 0),
      new THREE.Vector3(-span / 4, 0.6, 0),
      new THREE.Vector3(0, 0.45, 0),
      new THREE.Vector3(span / 4, 0.6, 0),
      new THREE.Vector3(span / 2 - 0.8, 2.1, 0),
    ]);
    const archGeo = new THREE.TubeGeometry(archCurve, 80, 0.05, 12, false);
    const archMat = new THREE.MeshStandardMaterial({ color: 0x0b2344, metalness: 0.85, roughness: 0.2 });
    const arch = new THREE.Mesh(archGeo, archMat);
    rootGroup.add(arch);

    // Vertical Suspension Ties (Defined & Clear)
    const strutMat = new THREE.MeshBasicMaterial({ color: 0x1688ff, transparent: true, opacity: 0.45 });
    for (let i = 1; i < 18; i++) {
      const t = i / 18;
      const p1 = bridgeCurve.getPoint(t);
      const p2 = archCurve.getPoint(t);
      const dist = p1.distanceTo(p2);

      const strutGeo = new THREE.CylinderGeometry(0.02, 0.02, dist, 6);
      const strut = new THREE.Mesh(strutGeo, strutMat);
      strut.position.copy(p1.clone().add(p2).multiplyScalar(0.5));
      strut.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
      rootGroup.add(strut);
    }

    // 2. END ANCHORS (Left & Right Pedestals)
    const anchorGeo = new THREE.CylinderGeometry(1.0, 1.1, 0.4, 32);
    const anchorMat = new THREE.MeshStandardMaterial({
      color: 0x071a33,
      metalness: 0.7,
      roughness: 0.3,
    });

    // Left Node (Recruiters)
    const leftAnchor = new THREE.Mesh(anchorGeo, anchorMat);
    leftAnchor.position.set(-span / 2, -1.05, 0);
    rootGroup.add(leftAnchor);

    const leftRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.05, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0x00d9ff })
    );
    leftRing.rotation.x = Math.PI / 2;
    leftRing.position.set(-span / 2, -0.85, 0);
    rootGroup.add(leftRing);

    // Right Node (Client Companies)
    const rightAnchor = new THREE.Mesh(anchorGeo, anchorMat);
    rightAnchor.position.set(span / 2, -1.05, 0);
    rootGroup.add(rightAnchor);

    const rightRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.05, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0x00d9ff })
    );
    rightRing.rotation.x = Math.PI / 2;
    rightRing.position.set(span / 2, -0.85, 0);
    rootGroup.add(rightRing);

    // 3. CENTER BRIDGX CORE (Octahedron + Glowing Gyro Rings)
    const centerGroup = new THREE.Group();
    centerGroup.position.set(0, 0.65, 0);

    const coreGeo = new THREE.OctahedronGeometry(0.55, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x05080d,
      emissive: 0x1688ff,
      emissiveIntensity: 0.9,
      metalness: 0.8,
      roughness: 0.15,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    centerGroup.add(coreMesh);

    const gyro1 = new THREE.Mesh(
      new THREE.TorusGeometry(0.95, 0.035, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0x00d9ff })
    );
    centerGroup.add(gyro1);

    const gyro2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.03, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0x1688ff, transparent: true, opacity: 0.85 })
    );
    centerGroup.add(gyro2);

    rootGroup.add(centerGroup);

    // 4. ANIMATED MEETING PULSES (Neon Electric Glowing Nodes)
    interface Pulse {
      mesh: THREE.Mesh;
      progress: number;
      speed: number;
      direction: 1 | -1;
    }

    const pulses: Pulse[] = [];
    const pulseGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const count = 14;

    for (let i = 0; i < count; i++) {
      const isOutbound = i % 2 === 0;
      const pMat = new THREE.MeshBasicMaterial({
        color: isOutbound ? 0x00d9ff : 0x1688ff,
      });
      const pMesh = new THREE.Mesh(pulseGeo, pMat);
      rootGroup.add(pMesh);

      pulses.push({
        mesh: pMesh,
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.002,
        direction: isOutbound ? 1 : -1,
      });
    }

    // Interactive Tilt
    let targetRotY = 0;
    let targetRotX = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.25;
      targetRotX = y * 0.12;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.05;

      coreMesh.rotation.x = elapsed * 1.1;
      coreMesh.rotation.y = elapsed * 1.4;
      gyro1.rotation.x = Math.PI / 4 + elapsed * 0.8;
      gyro1.rotation.y = elapsed * 0.6;
      gyro2.rotation.y = Math.PI / 3 - elapsed * 0.9;
      gyro2.rotation.z = elapsed * 0.5;

      centerLight.intensity = 5.0 + Math.sin(elapsed * 3.5) * 1.5;

      // Animate 3D beacon blinkers (Electric Cyan)
      const blinkScale = 1.0 + Math.sin(elapsed * 6) * 0.4;
      leftBeacon.scale.setScalar(blinkScale);
      rightBeacon.scale.setScalar(blinkScale);
      (leftBeacon.material as THREE.MeshBasicMaterial).color.setHex(
        Math.sin(elapsed * 6) > 0 ? 0x00d9ff : 0x071a33
      );
      (rightBeacon.material as THREE.MeshBasicMaterial).color.setHex(
        Math.sin(elapsed * 6) > 0 ? 0x00d9ff : 0x071a33
      );

      pulses.forEach((p) => {
        if (p.direction === 1) {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;
        } else {
          p.progress -= p.speed;
          if (p.progress < 0) p.progress = 1;
        }

        const pt = bridgeCurve.getPoint(p.progress);
        p.mesh.position.copy(pt);
        p.mesh.position.y += 0.2;

        const distCenter = Math.abs(p.progress - 0.5);
        if (distCenter < 0.1) {
          p.mesh.scale.setScalar(1.5);
          (p.mesh.material as THREE.MeshBasicMaterial).color.setHex(0x00d9ff);
        } else {
          p.mesh.scale.setScalar(1.1);
          (p.mesh.material as THREE.MeshBasicMaterial).color.setHex(
            p.direction === 1 ? 0x00d9ff : 0x1688ff
          );
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 select-none" id="bridge-3d-container">
      <div className="w-full rounded-2xl bg-[#08111F]/90 backdrop-blur-md border border-[#0B2344] p-5 sm:p-6 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(7,26,51,0.6)]">
        
        {/* Minimal 3-Point Label Row */}
        <div className="grid grid-cols-3 items-center gap-2 pb-4 border-b border-[#0B2344] text-center">
          
          {/* Left: Recruiters */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-2 text-left">
            <div className="w-8 h-8 rounded-lg bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] shrink-0 shadow-[0_0_12px_rgba(0,217,255,0.15)]">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#F5F7FA] tracking-wide">Recruiters</p>
              <p className="text-[10px] text-[#AAB7C7] font-mono">Agency Search Partners</p>
            </div>
          </div>

          {/* Middle: Neon BRIDGX */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="relative group">
              {/* Ambient Neon Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1688FF] via-[#00D9FF] to-[#1688FF] rounded-full blur-[6px] opacity-75 animate-pulse"></div>
              
              <div className="relative flex items-center justify-center px-4 py-1.5 rounded-full bg-[#05080D] border border-[#00D9FF]/70 shadow-[0_0_20px_rgba(0,217,255,0.4),0_0_10px_rgba(22,136,255,0.6)]">
                <BridgxLogo variant="wordmark" size="sm" theme="dark" showGlow={false} />
              </div>
            </div>
            <span className="text-[10px] text-[#AAB7C7] font-mono mt-1.5 font-semibold tracking-tight">
              The Connection Engine
            </span>
          </div>

          {/* Right: Client Companies */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-2 text-right">
            <div className="order-2 sm:order-1">
              <p className="text-xs sm:text-sm font-bold text-[#F5F7FA] tracking-wide">Client Companies</p>
              <p className="text-[10px] text-[#AAB7C7] font-mono">Hiring Decision-Makers</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#0A1930] border border-[#0B2344] flex items-center justify-center text-[#00D9FF] shrink-0 order-1 sm:order-2 shadow-[0_0_12px_rgba(0,217,255,0.15)]">
              <Building2 className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* 3D Bridge Viewport */}
        <div 
          ref={mountRef} 
          className="w-full h-[220px] sm:h-[260px] md:h-[280px] mt-3 rounded-xl bg-[#05080D] border border-[#0B2344] relative overflow-hidden cursor-grab active:cursor-grabbing shadow-inner"
        >
          {/* Niche Talent with Blinker */}
          <div className="absolute top-3.5 left-4 text-[11px] font-mono text-[#F5F7FA] font-semibold flex items-center gap-2 bg-[#08111F]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#0B2344] shadow-md z-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-90 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.9)]"></span>
            </span>
            <span>Niche Talent</span>
          </div>

          {/* Verified Mandates with Blinker */}
          <div className="absolute top-3.5 right-4 text-[11px] font-mono text-[#F5F7FA] font-semibold flex items-center gap-2 bg-[#08111F]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#0B2344] shadow-md z-10">
            <span>Verified Mandates</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-90 duration-1000"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.9)]"></span>
            </span>
          </div>

          {/* Bottom Status Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-[#08111F]/90 border border-[#0B2344] text-[10px] text-[#AAB7C7] font-mono font-medium shadow-md z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse shadow-[0_0_6px_#00d9ff]" />
            <span>Direct Introduction Highway</span>
          </div>
        </div>

      </div>
    </div>
  );
};
