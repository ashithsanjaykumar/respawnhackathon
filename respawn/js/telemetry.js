// ==============================================================================
// NANO-PULSE REAL-TIME TELEMETRY & BIO-HARMONIC OVERRIDE ENGINE
// Continuous tracking of mouse velocity, click frequency, and angular jitter.
// Automatic Bio-Harmonic Override activation when player stress index > 70%.
// ==============================================================================

class TelemetryEngine {
  constructor() {
    this.mouseHistory = []; // { x, y, time }
    this.clickHistory = []; // timestamps
    this.directionChanges = 0;
    this.lastAngle = null;

    this.currentVelocity = 0; // px/sec
    this.clickFrequency = 0; // clicks/sec
    this.jitterScore = 0; // 0-100%
    this.stressIndex = 25; // 0-100%

    this.isOverrideActive = false;
    this.overrideTimer = null;
    this.overrideDurationMs = 12000; // 12 seconds of soothing bio-harmonic assistance
    this.onOverrideCallback = null;

    this.initListeners();
    this.startAnalysisLoop();
  }

  initListeners() {
    window.addEventListener('mousemove', (e) => {
      const now = performance.now();
      const pt = { x: e.clientX, y: e.clientY, time: now };

      if (this.mouseHistory.length > 0) {
        const lastPt = this.mouseHistory[this.mouseHistory.length - 1];
        const dt = (now - lastPt.time) / 1000;
        if (dt > 0.005) {
          const dx = pt.x - lastPt.x;
          const dy = pt.y - lastPt.y;
          const dist = Math.hypot(dx, dy);
          const vel = dist / dt;
          this.currentVelocity = this.currentVelocity * 0.7 + vel * 0.3;

          const angle = Math.atan2(dy, dx);
          if (this.lastAngle !== null && dist > 14) {
            let angleDiff = Math.abs(angle - this.lastAngle);
            if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;
            // High angular change at speed indicates erratic frantic movement
            if (angleDiff > Math.PI * 0.45) {
              this.directionChanges++;
            }
          }
          this.lastAngle = angle;
        }
      }

      this.mouseHistory.push(pt);
      if (this.mouseHistory.length > 30) this.mouseHistory.shift();
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      const now = performance.now();
      this.clickHistory.push(now);
      this.cleanClickHistory(now);
    }, { passive: true });
  }

  cleanClickHistory(now) {
    const windowMs = 2500; // rolling 2.5s window
    this.clickHistory = this.clickHistory.filter(t => now - t <= windowMs);
    this.clickFrequency = (this.clickHistory.length / (windowMs / 1000));
  }

  startAnalysisLoop() {
    setInterval(() => {
      const now = performance.now();
      this.cleanClickHistory(now);

      // Jitter volatility based on rapid direction reversals
      const jitterFactor = Math.min(100, this.directionChanges * 18);
      this.jitterScore = this.jitterScore * 0.65 + jitterFactor * 0.35;
      this.directionChanges = Math.max(0, this.directionChanges - 1); // decay

      // Click stress factor (frantic clicking > 2.5 clicks/sec)
      const clickStress = Math.min(100, Math.max(0, (this.clickFrequency - 1.2) * 35));

      // Velocity stress factor (violent mouse flailing)
      const velStress = Math.min(100, Math.max(0, (this.currentVelocity - 1400) / 25));

      // Composite Stress Index
      const rawStress = (this.jitterScore * 0.45) + (clickStress * 0.35) + (velStress * 0.20) + 15;
      this.stressIndex = Math.min(100, Math.max(12, Math.round(this.stressIndex * 0.75 + rawStress * 0.25)));

      // Trigger Bio-Harmonic Override if Stress > 70%
      if (this.stressIndex >= 70 && !this.isOverrideActive) {
        this.triggerBioHarmonicOverride();
      }

      this.updateHudTelemetry();
    }, 250);
  }

  triggerBioHarmonicOverride() {
    this.isOverrideActive = true;
    if (window.soundEngine) {
      window.soundEngine.playBioHarmonicChime();
    }
    if (window.storageEngine) {
      window.storageEngine.recordTelemetryStats({ overrideTriggered: true, stressScore: this.stressIndex });
    }

    if (typeof this.onOverrideCallback === 'function') {
      this.onOverrideCallback(true);
    }

    if (this.overrideTimer) clearTimeout(this.overrideTimer);
    this.overrideTimer = setTimeout(() => {
      this.isOverrideActive = false;
      this.stressIndex = Math.min(35, this.stressIndex);
      if (typeof this.onOverrideCallback === 'function') {
        this.onOverrideCallback(false);
      }
    }, this.overrideDurationMs);
  }

  resetOverride() {
    this.isOverrideActive = false;
    if (this.overrideTimer) {
      clearTimeout(this.overrideTimer);
      this.overrideTimer = null;
    }
    if (typeof this.onOverrideCallback === 'function') {
      this.onOverrideCallback(false);
    }
  }

  updateHudTelemetry() {
    const elStress = document.getElementById('telemetry-stress-value');
    const elJitter = document.getElementById('telemetry-jitter-value');
    const elClickRate = document.getElementById('telemetry-clicks-value');
    const elOverrideBadge = document.getElementById('telemetry-override-badge');

    if (elStress) {
      elStress.textContent = `${this.stressIndex}%`;
      elStress.className = this.stressIndex > 65 ? 'val-danger' : (this.stressIndex > 45 ? 'val-warning' : 'val-calm');
    }
    if (elJitter) {
      elJitter.textContent = `${Math.round(this.jitterScore)}%`;
    }
    if (elClickRate) {
      elClickRate.textContent = `${this.clickFrequency.toFixed(1)}/s`;
    }
    if (elOverrideBadge) {
      if (this.isOverrideActive) {
        elOverrideBadge.className = 'override-badge active';
        elOverrideBadge.textContent = 'HARMONIC OVERRIDE ACTIVE';
      } else {
        elOverrideBadge.className = 'override-badge standby';
        elOverrideBadge.textContent = 'TELEMETRY MONITORED';
      }
    }
  }
}

window.telemetryEngine = new TelemetryEngine();
