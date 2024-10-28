import { EulerOrder, Vector3Like } from "three";
type Pose = {
  position: Vector3Like;
  rotation: Vector3Like;
  scale: number;
};

export const computerPositions: Record<string, { big_768: Pose }> = {
  hero: {
    big_768: {
      position: { x: 0, y: -1.0, z: -3.3 },
      rotation: { x: 0, y: -0.7, z: 0.0 },
      scale: 0.4,
    },
  },
  about: {
    big_768: {
      position: { x: 0, y: -1.5, z: 1.3 },
      rotation: { x: 0, y: 0.2, z: 0 },
      scale: 0.46,
    },
  },
  projects: {
    big_768: {
      position: { x: 0, y: -3.4, z: -4.3 },
      rotation: { x: 0, y: -0.2, z: 0.13 },
      scale: 1.46,
    },
  },
  skills: {
    big_768: {
      position: { x: 0, y: 0, z: -0.7 },
      rotation: { x: 0, y: -0.3, z: -0.1 },
      scale: 0.4,
    },
  },
  contact: {
    big_768: {
      position: { x: 0, y: -4.4, z: -4.9 },
      rotation: { x: 0, y: -0.2, z: 0.13 },
      scale: 1.53,
    },
  },
};
