export type RobotStat = {
  label: string;
  value: string;
};

export type RobotPart = {
  id: string;
  title: string;
  detail: string;
};

export type MuseumRobot = {
  id: string;
  name: string;
  season: string;
  tagline: string;
  summary: string;
  accent: string;
  modelPath: string;
  stagePosition: readonly [number, number, number];
  rotationOffset: number;
  stats: RobotStat[];
  parts: RobotPart[];
};

export const museumRobots: MuseumRobot[] = [
  {
    id: "phoenix-2025",
    name: "Phoenix",
    season: "2025 - Crescendo",
    tagline: "High-speed scoring platform",
    summary:
      "Designed for fast teleop cycles with a compact intake-to-shooter path and stable swerve control.",
    accent: "#4fd7ff",
    modelPath: "/models/Astronaut.glb",
    stagePosition: [-4.2, 0, 0],
    rotationOffset: 0.2,
    stats: [
      { label: "Drive", value: "Swerve Mk4i" },
      { label: "Top Speed", value: "4.9 m/s" },
      { label: "Weight", value: "49 kg" },
    ],
    parts: [
      { id: "intake", title: "Intake", detail: "Dual-roller intake with auto-centering guide." },
      { id: "shooter", title: "Shooter", detail: "Dual-wheel shooter tuned for repeatable arcs." },
      { id: "vision", title: "Vision", detail: "AprilTag assisted aiming and auto alignment." },
    ],
  },
  {
    id: "nova-2024",
    name: "Nova",
    season: "2024 - Crescendo",
    tagline: "Reliable autonomous specialist",
    summary:
      "Focused on autonomous path quality and rapid handoff actions with low-maintenance mechanisms.",
    accent: "#7eb6ff",
    modelPath: "/models/Astronaut.glb",
    stagePosition: [0, 0, 0],
    rotationOffset: 1.5,
    stats: [
      { label: "Auto Paths", value: "9 presets" },
      { label: "Cycle Time", value: "7.2 sec" },
      { label: "Frame", value: "Aluminum tube" },
    ],
    parts: [
      { id: "elevator", title: "Elevator", detail: "Belt-driven lift for smooth scoring heights." },
      { id: "wrist", title: "Wrist", detail: "Absolute-encoder wrist with motion profiling." },
      { id: "control", title: "Control", detail: "State-machine architecture for driver assist." },
    ],
  },
  {
    id: "atlas-2023",
    name: "Atlas",
    season: "2023 - Charged Up",
    tagline: "Defense-ready all-around robot",
    summary:
      "A durable robot platform built for stable scoring and strategic field control under pressure.",
    accent: "#9fd3ff",
    modelPath: "/models/Astronaut.glb",
    stagePosition: [4.2, 0, 0],
    rotationOffset: 2.7,
    stats: [
      { label: "Climb", value: "12 sec avg" },
      { label: "Battery Use", value: "Low draw" },
      { label: "Repair Time", value: "Under 6 min" },
    ],
    parts: [
      { id: "arm", title: "Arm", detail: "Single-stage arm with fast locking joints." },
      { id: "bumper", title: "Bumper", detail: "Quick-change bumper mount for pit speed." },
      { id: "drive", title: "Drive Core", detail: "Reinforced drivetrain for contact resilience." },
    ],
  },
];
