
import { ParticleSystem } from './animations/ParticleSystem';
import { OrganicShapes } from './animations/OrganicShapes';
import { FloatingElements } from './animations/FloatingElements';
import { CursorTrail } from './animations/CursorTrail';

export function BackgroundAnimations() {
  return (
    <>
      <ParticleSystem count={40} interactive={true} />
      <OrganicShapes />
      <FloatingElements />
      <CursorTrail />
    </>
  );
}
