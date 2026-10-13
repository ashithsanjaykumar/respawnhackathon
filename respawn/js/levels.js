// ==============================================================================
// NANO-PULSE PATIENT PROFILES, CLINICAL DIAGNOSES & LEVEL GEOMETRIES
// Hand-drawn medical sketchbook aesthetic data
// 9 Distinct Game Types × 3 Difficulty Levels
// ==============================================================================

// Difficulty Modifiers applied by canvasEngine
window.DIFF_MODS = {
  resident: {
    label: 'RESIDENT',
    guideSteps: 85,
    targetScale: 1.0,
    obstacleSpeed: 1.0,
    tolerance: 0.75,
    trianglesNeeded: 3,
    slitWidth: 70,
    color: '#34d399'
  },
  specialist: {
    label: 'SPECIALIST',
    guideSteps: 28,
    targetScale: 0.8,
    obstacleSpeed: 1.4,
    tolerance: 0.85,
    trianglesNeeded: 4,
    slitWidth: 55,
    color: '#f59e0b'
  },
  chief: {
    label: 'CHIEF SURGEON',
    guideSteps: 0,
    targetScale: 0.65,
    obstacleSpeed: 1.8,
    tolerance: 0.92,
    trianglesNeeded: 5,
    slitWidth: 40,
    color: '#ef4444'
  }
};

window.PATIENTS = {
  siddharth: {
    id: "siddharth",
    name: "Siddharth Rao",
    age: 34,
    socioeconomic: "Upper-Middle Class • Executive Retainer ($24,000/yr)",
    role: "Senior Distributed Systems Architect",
    facility: "Aura Neurological Sanatorium • VIP Suite 402",
    diagnosisTitle: "Cognitive Burnout & Neural Friction",
    clinicalCode: "DX-NEURO-704B",
    etiology: "16-hour continuous screen isolation work loops, hermetic apartment confinement, circadian collapse, and hyper-stimulated prefrontal synaptic friction.",
    vitals: {
      pulseBpm: 114,
      focalTemp: "38.6°C",
      synapticResistance: "420 Ω·cm²",
      neuralWearFactor: "86% (Critical Strain)"
    },
    journalNotes: [
      "Admitted directly into soundproof VIP Suite 402 with private holographic telemetry and laminar airflow.",
      "Corporate executive health rider authorized unlimited neuro-peptide perfusions with zero co-pay or delay.",
      "Prefrontal cortical imaging reveals rigid orthogonal synaptic friction. Wealth guarantees luxury and instant attention, but only 90° geometric precision can untangle his code-loops."
    ],
    accentColor: "#8c6239", // warm leather/sepia
    inkStampColor: "#9e3024",
    portraitTheme: "glasses_burnout",
    levels: [
      // ───── STAGE 1: RICOCHET MIRROR (Specular Reflection) ─────
      {
        levelNumber: 1,
        title: "Orthogonal Logic Recalibration",
        clinicalGoal: "Stabilize Prefrontal Logic Gate 01",
        gameType: "ricochet_mirror",
        geometryType: "Orthogonal Plasma Mirror (90°)",
        mathConcept: "Specular Reflection Normal: θ_i = θ_r = 45° | Deviation: 90°",
        caseBrief: "Siddharth's thoughts are locked in rigid right-angle loops. Utilize the 45-degree plasma mirror to bend the therapeutic pulse at a clean 90-degree angle past the logic barrier.",
        launcher: { x: 100, y: 380 },
        targets: [{ x: 820, y: 140, r: 24, label: "BURNOUT NODE 1", hp: 1 }],
        mirrors: [
          { x1: 440, y1: 420, x2: 500, y2: 360, label: "PLASMA MIRROR α (45°)" }
        ],
        obstacles: [
          { type: "rect", x: 420, y: 60, w: 40, h: 260, label: "RIGID LOGIC BLOCKER" }
        ],
        movingObstacles: []
      },
      // ───── STAGE 2: TRANSFORM AFFINE (Rotation + Scale Alignment) ─────
      {
        levelNumber: 2,
        title: "Synaptic Receptor Alignment Matrix",
        clinicalGoal: "Dissolve Hemispheric Synaptic Friction",
        gameType: "transform_affine",
        geometryType: "2D Affine Transformation",
        mathConcept: "T = S(θ)·v + t | Rotation + Scale Congruence",
        caseBrief: "Neural receptor sites have rotated and dilated under chronic stress. Manipulate the rotation angle θ and scale factor S to dock the therapeutic nano-construct precisely into the receptor cleft.",
        targetRot: 135,
        targetScale: 1.35,
        launcher: { x: 100, y: 420 },
        targets: [],
        mirrors: [],
        obstacles: [],
        movingObstacles: []
      },
      // ───── STAGE 3: GEODESIC RICOCHET (Multi-Mirror Closed Path) ─────
      {
        levelNumber: 3,
        title: "The Hermetic Isolation Labyrinth",
        clinicalGoal: "Complete Prefrontal De-escalation",
        gameType: "geodesic_ricochet",
        geometryType: "Triple Orthogonal Ricochet Matrix",
        mathConcept: "Closed Cartesian Geodesic Trajectory",
        caseBrief: "Final burnout breakthrough. Thread the nano-pulse through a triple 90-degree matrix to extinguish Siddharth's terminal work-loop.",
        launcher: { x: 90, y: 140 },
        targets: [
          { x: 860, y: 450, r: 24, label: "CORE INSOMNIA ROOT", hp: 1 }
        ],
        mirrors: [
          { x1: 380, y1: 110, x2: 440, y2: 170, label: "MIRROR A" },
          { x1: 380, y1: 410, x2: 440, y2: 470, label: "MIRROR B" },
          { x1: 680, y1: 410, x2: 740, y2: 470, label: "MIRROR C" }
        ],
        obstacles: [
          { type: "rect", x: 300, y: 220, w: 40, h: 160, label: "CODE ARTIFACT" },
          { type: "rect", x: 520, y: 100, w: 40, h: 260, label: "ISOLATION VAULT" }
        ],
        movingObstacles: []
      }
    ]
  },

  kabir: {
    id: "kabir",
    name: "Kabir Ansari",
    age: 27,
    socioeconomic: "Middle Class • Gig Courier (No Employer Coverage)",
    role: "Priority Delivery Courier (Gig Worker)",
    facility: "Suburban Municipal Trauma Wing 3 • Shared Bay 11",
    diagnosisTitle: "Sensory Overload & Exhaustion Neural Spikes",
    clinicalCode: "DX-ACOUSTIC-412K",
    etiology: "14-hour delivery shifts through torrential monsoon downpours, relentless acoustic traffic screeching, vibrating smartphone dispatch haptics, acute sensory fatigue.",
    vitals: {
      pulseBpm: 128,
      focalTemp: "39.1°C",
      synapticResistance: "295 Ω·cm²",
      neuralWearFactor: "91% (Sensory Overdrive)"
    },
    journalNotes: [
      "Admitted in drenched delivery raincoat. Algorithmic delivery app docking rating while patient is in clonic spasms.",
      "Family forced to swipe two credit cards for ₹35,000 admission deposit before central pharmacy released neuro-stabilizer ampoules.",
      "Shared observation bay with 18 beds behind thin vinyl curtain. Navigating volatile traffic-mimicking barriers with dual-bounce vectors."
    ],
    accentColor: "#4a6b5d", // aged moss/sage green
    inkStampColor: "#8f382a",
    portraitTheme: "courier_overload",
    levels: [
      // ───── STAGE 1: MOVING TIMING (Kinematic Phase Windows) ─────
      {
        levelNumber: 1,
        title: "Monsoon Traffic Bifurcation",
        clinicalGoal: "Dampen Auditory Hyper-Spikes",
        gameType: "moving_timing",
        geometryType: "Dynamic Oscillating Barrier Bypass",
        mathConcept: "Phase-Timed Trajectory: y(t) = Y₀ + A·sin(ωt)",
        caseBrief: "Sensory spikes mimic chaotic city intersections. Timing is critical: wait for the oscillating neural blocker to clear the channel, then bounce off the lower vessel wall.",
        launcher: { x: 90, y: 270 },
        targets: [{ x: 820, y: 270, r: 24, label: "SIREN SPIKE 1", hp: 1 }],
        mirrors: [
          { x1: 440, y1: 440, x2: 520, y2: 440, label: "ACOUSTIC REFLECTOR" }
        ],
        obstacles: [],
        movingObstacles: [
          { x: 470, yMin: 80, yMax: 360, y: 180, w: 35, h: 140, vy: 2.2, label: "DISPATCH STATIC" }
        ]
      },
      // ───── STAGE 2: WAVE SUPERPOSITION (Trigonometric Interference) ─────
      {
        levelNumber: 2,
        title: "Auditory Resonance Neutralizer",
        clinicalGoal: "Suppress Temporal Lobe Panic Clusters",
        gameType: "wave_superposition",
        geometryType: "Destructive Wave Interference",
        mathConcept: "y_total = A·sin(kx−ωt) + A·sin(kx−ωt+φ) = 0 at φ=180°",
        caseBrief: "Kabir's auditory cortex is flooded with a pathogen resonance wave. Adjust frequency f and phase shift φ to produce complete destructive interference and collapse the viral signal.",
        targetFreq: 3.0,
        launcher: { x: 90, y: 380 },
        targets: [],
        mirrors: [],
        obstacles: [],
        movingObstacles: []
      },
      // ───── STAGE 3: GRAVITY SLINGSHOT (Central Force Deflection) ─────
      {
        levelNumber: 3,
        title: "Thunderstorm Neural Slingshot",
        clinicalGoal: "Restore Kabir's Calm Sensory Baseline",
        gameType: "gravity_slingshot",
        geometryType: "Keplerian Gravity Well Slingshot",
        mathConcept: "F = -μ/r²·r̂ | Hyperbolic Deflection Orbit",
        caseBrief: "Kabir's auditory cortex is flooded with storm sirens. Fire a therapeutic pulse past the central neural gravity well. Its gravitational pull will bend the trajectory to strike the hidden trauma focus.",
        launcher: { x: 90, y: 270 },
        targets: [
          { x: 860, y: 420, r: 26, label: "CORE TRAUMA SPIKE", hp: 1 }
        ],
        gravityWells: [
          { x: 480, y: 260, mass: 600, r: 32, name: "NEURAL MASS" }
        ],
        mirrors: [],
        obstacles: [],
        movingObstacles: []
      }
    ]
  },

  radha: {
    id: "radha",
    name: "Radha Devi",
    age: 49,
    socioeconomic: "Low-Income / Working Class • Municipal Daily Wage",
    role: "Municipal Sanitation & Domestic Care Worker",
    facility: "District General Charitable Hospital • Female Ward 3 (Cot 14)",
    diagnosisTitle: "Critical Synaptic Degradation & Dengue Shock",
    clinicalCode: "DX-VIREMIA-981R",
    etiology: "Heavy post-dengue viral neuro-inflammation, untreated capillary leakage, chronic severe microvascular anemia, absence of preventive healthcare infrastructure.",
    vitals: {
      pulseBpm: 136,
      focalTemp: "40.3°C",
      synapticResistance: "140 Ω·cm² (Severe Leakage)",
      neuralWearFactor: "96% (Near-Terminal Decay)"
    },
    journalNotes: [
      "Admitted via charity ambulance in critical condition. Open ward with 42 beds, single ceiling fan, zero air conditioning.",
      "Dispensary out of platelet concentrate for 48 hours; family begging third-party blood banks across town. Platelets: 21,000 /μL.",
      "Severe capillary leakage and jagged necrotic decay. Zero margin for error—requires sub-degree needle precision."
    ],
    accentColor: "#7c4a36", // burnt terra-cotta
    inkStampColor: "#b91c1c",
    portraitTheme: "sanitation_fragile",
    levels: [
      // ───── STAGE 1: NEEDLE SLIT (Micro-Angle Precision) ─────
      {
        levelNumber: 1,
        title: "The Narrow Synaptic Fissure",
        clinicalGoal: "Halt Cerebellar Synaptic Leaking",
        gameType: "needle_slit",
        geometryType: "Micro-Angle Needle Passage",
        mathConcept: "Angular Aperture Tolerance: Δθ < 2.8°",
        caseBrief: "Radha's vascular walls are eroded by viral load. Navigate a precision needle-slit passage through necrotic decay barriers with zero margin for error.",
        launcher: { x: 80, y: 270 },
        targets: [{ x: 840, y: 270, r: 24, label: "VIRAL RESERVOIR", hp: 1 }],
        mirrors: [],
        obstacles: [
          // Narrow horizontal slit — gap adjusted by difficulty
          { type: "rect", x: 440, y: 40, w: 50, h: 195, label: "DECAY SLIT UPPER" },
          { type: "rect", x: 440, y: 305, w: 50, h: 200, label: "DECAY SLIT LOWER" }
        ],
        movingObstacles: []
      },
      // ───── STAGE 2: POLYGON TRIANGULATION (Delaunay Fibrin Patches) ─────
      {
        levelNumber: 2,
        title: "Vascular Fibrin Mesh Reconstruction",
        clinicalGoal: "Seal Capillary Leakage Fissures",
        gameType: "polygon_triangulation",
        geometryType: "Delaunay Triangulation & Shoelace Area",
        mathConcept: "Area = ½|x_A(y_B−y_C) + x_B(y_C−y_A) + x_C(y_A−y_B)|",
        caseBrief: "Radha's capillary walls are disintegrating. Click three vascular junction nodes to construct triangular fibrin patches. Cover the entire fissure zone to halt hemorrhagic leakage.",
        nodes: [
          { x: 280, y: 140 }, { x: 440, y: 120 }, { x: 600, y: 160 },
          { x: 240, y: 280 }, { x: 400, y: 260 }, { x: 560, y: 300 },
          { x: 320, y: 400 }, { x: 500, y: 410 }, { x: 680, y: 380 }
        ],
        launcher: { x: 90, y: 420 },
        targets: [],
        mirrors: [],
        obstacles: [],
        movingObstacles: []
      },
      // ───── STAGE 3: COMPOUND RICOCHET (Tremor + Grazing Deflection) ─────
      {
        levelNumber: 3,
        title: "The Brink of Synaptic Respawn",
        clinicalGoal: "Restore Radha's Core Vital Synapse",
        gameType: "compound_ricochet",
        geometryType: "Erratic Vibrating Decay Maze",
        mathConcept: "Dynamic Phase-Locked Grazing Ricochet θ_graze < 25°",
        caseBrief: "Final battle for Radha's life. Severe hemorrhagic necrosis creates erratic vibrating boundaries. Fire the definitive pulse through tremor gates to trigger complete synaptic recovery!",
        launcher: { x: 80, y: 160 },
        targets: [
          { x: 860, y: 420, r: 26, label: "CORE CONSCIOUSNESS", hp: 1 }
        ],
        mirrors: [
          { x1: 340, y1: 120, x2: 400, y2: 180, label: "FIBRIN STRAND 1" },
          { x1: 580, y1: 440, x2: 660, y2: 440, label: "FIBRIN STRAND 2" }
        ],
        obstacles: [
          { type: "rect", x: 280, y: 220, w: 40, h: 260, label: "ACUTE INFARCT" },
          { type: "rect", x: 500, y: 60, w: 40, h: 260, label: "VIRAL CLUSTER" }
        ],
        movingObstacles: [
          { x: 740, yMin: 120, yMax: 360, y: 220, w: 30, h: 100, vy: 1.8, label: "TREMOR PULSE" }
        ]
      }
    ]
  }
};
