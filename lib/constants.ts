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

type CameraPose = {
  position: Vector3Like;
  target: Vector3Like;
  fov: number;
};

// Define camera positions for each section
export const cameraPositions: Record<string, CameraPose> = {
  hero: {
    position: { x: 15.2, y: 3, z: 5 },
    target: { x: 2, y: 0.6, z: 0 },
    fov: 25,
  },
  about: {
    position: { x: 0.6, y: 0.7, z: 4 },
    target: { x: 0.6, y: 0.5, z: -0.3 },
    fov: 49,
  },
  skills: {
    position: { x: 13.5, y: 5.4, z: 5.8 },
    target: { x: -1.2, y: 0.1, z: -2.8 },
    fov: 10,
  },
  projects: {
    position: { x: 13.9, y: 6.1, z: 9.7 },
    target: { x: 2.1, y: 1.1, z: 0 },
    fov: 10,
  },
  contact: {
    position: { x: 5.1, y: 1, z: 2.8 },
    target: { x: 2, y: 0.6, z: 0.1 },
    fov: 13,
  },
};
