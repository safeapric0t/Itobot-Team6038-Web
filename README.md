# 🚀 FRC Team 6038 — Digital Robotics Museum

> The official cinematic, interactive, next-generation promotional website of FRC Team 6038.

This project is a fully immersive digital experience built to represent our team’s engineering excellence, competitive journey, and innovative spirit.

It is not a traditional website.
It is a **digital robotics museum.**

---

# 🌌 Our Vision

FRC Team 6038 is more than a robotics team.
We are engineers, designers, programmers, strategists, and innovators.

This website is designed to:

* Showcase our robots in a museum-style exhibition
* Present our journey in a cinematic way
* Reflect our technical capability through the website itself
* Create a premium, high-tech first impression

The experience blends:

* Cinematic storytelling
* Interactive 3D robotics visualization
* Advanced animation systems
* Modern web engineering architecture

---

# 🎬 Core Experience Structure

## 1️⃣ Cinematic Entry Experience

When users enter the site:

* Memory photos and short competition clips appear within atmospheric clouds
* The camera moves through our journey moments
* The visuals converge into the Team 6038 logo
* Two light doors open dramatically
* The museum experience begins

Goal: Emotional impact within the first 10 seconds.

---

## 2️⃣ Home — The Hero Robot

The main page features:

* A fully interactive 3D model of our best-performing robot
* Cinematic lighting setup
* Smooth rotation and subtle motion
* Immersive environment lighting
* Museum-level presentation quality

This section represents the peak of Team 6038 engineering.

---

## 3️⃣ Robots Page — Digital Exhibition Hall

A virtual robotics museum.

Each robot is displayed as its own exhibit.

Features:

* Spotlight focus system
* Background dimming during focus
* Smooth camera transitions
* Interactive robot inspection
* Clean information panels for each robot

The experience mimics walking through a real-world technology exhibition.

---

## 4️⃣ Team Section

Designed in harmony with the museum aesthetic.

* Clean modern layout
* Subtle motion effects
* Interactive member cards
* High-tech presentation style

This section reflects the people behind the machines.

---

# 🛠 Technology Stack

## Core

* React
* TypeScript
* Vite
* TailwindCSS v4
* React Router

## 3D & Rendering

* Three.js
* React Three Fiber
* @react-three/drei

## Animation

* Framer Motion
* GSAP (timeline orchestration when needed)

---

# 🧩 Architecture Philosophy

This project is built with scalability and maintainability in mind.

Principles:

* Modular 3D scene separation
* UI animation separated from 3D rendering logic
* Clean folder organization
* Reusable animation components
* Performance-first mindset

### Project Structure

```
src/
 ├── app/
 │    ├── router/
 │    └── layout/
 ├── pages/
 │    ├── home/
 │    ├── robots/
 │    └── team/
 ├── components/
 │    ├── ui/
 │    ├── animations/
 │    └── three/
 ├── scenes/
 │    ├── homeScene/
 │    └── museumScene/
 └── assets/
```

---

# ⚡ Performance Strategy

To maintain smooth 60 FPS cinematic experience:

* Optimized GLB models
* Lazy loading 3D scenes
* Suspense boundaries
* Controlled lighting complexity
* Asset preloading
* GPU-conscious rendering decisions
* Conditional heavy effects only when necessary

---

# 🎯 Project Goals

* Represent Team 6038 at a world-class level
* Impress judges, sponsors, and partners
* Reflect engineering capability through digital presence
* Create emotional connection through storytelling
* Build a scalable and professional web architecture

---

# 🏆 About FRC Team 6038

FRC Team 6038 competes in the FIRST Robotics Competition, combining:

* Mechanical engineering
* Software development
* Electrical systems
* Strategy & teamwork

This digital museum represents our competitive journey, innovation mindset, and technical growth.

---

# 💻 Development

Install dependencies:

```bash
yarn
```

Run development server:

```bash
yarn dev
```

Build for production:

```bash
yarn build
```

---

# 📸 Future Roadmap

* Advanced WebGL-driven intro cinematic
* Volumetric lighting and particle atmosphere
* Robot part inspection data overlay system
* Adaptive rendering quality system
* Multi-language support
* Sponsor showcase section

---

# 🧑‍🚀 Built by Team 6038

Engineered with passion.
Designed with precision.
Built to represent who we are.

FRC Team 6038 — Engineering the Future.
