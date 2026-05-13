// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuTetrisSupervisorActionId = "new-game-1" | "controls-2" | "settings-3";

export interface MainMenuTetrisSupervisorProps {
  actions?: Partial<Record<MainMenuTetrisSupervisorActionId, () => void>>;
}

export function MainMenuTetrisSupervisor({ actions }: MainMenuTetrisSupervisorProps) {
  return (
    <>
      {/* Background Decoration (Falling Blocks Simulation) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      <div className="absolute top-[10%] left-[20%] w-12 h-12 border-2 border-primary rounded shadow-[0_0_10px_rgba(76,215,246,0.4)]"></div>
      <div className="absolute top-[40%] right-[15%] w-24 h-12 border-2 border-secondary rounded shadow-[0_0_10px_rgba(221,183,255,0.4)]"></div>
      <div className="absolute bottom-[20%] left-[30%] w-12 h-24 border-2 border-tertiary rounded shadow-[0_0_10px_rgba(255,184,115,0.4)]"></div>
      </div>
      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center w-full max-w-md px-gutter">
      {/* Title Section */}
      <div className="mb-xl text-center">
      <h1 className="font-display-lg text-display-lg text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(76,215,246,0.3)]">
                      TETRIS
                      <br />
      <span className="text-on-surface">SUPERVISOR</span>
      </h1>
      <p className="font-hud-label text-hud-label text-on-surface-variant mt-sm uppercase">Grandmaster Edition</p>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-sm">
      {/* Primary Action */}
      <button className="w-full h-touch-target-min bg-surface border border-primary text-primary font-button-text text-button-text rounded flex items-center justify-center gap-xs neon-glow transition-colors active:scale-95" type="button" data-action-id="new-game-1" onClick={actions?.["new-game-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      New Game
                  </button>
      {/* Secondary Actions */}
      <button className="w-full h-touch-target-min bg-surface border border-outline-variant text-on-surface font-button-text text-button-text rounded flex items-center justify-center gap-xs hover:border-primary hover:text-primary transition-colors active:scale-95" type="button" data-action-id="controls-2" onClick={actions?.["controls-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                      Controls
                  </button>
      <button className="w-full h-touch-target-min bg-surface border border-outline-variant text-on-surface font-button-text text-button-text rounded flex items-center justify-center gap-xs hover:border-primary hover:text-primary transition-colors active:scale-95" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </button>
      </div>
      </div>
      {/* Version Info */}
      <div className="absolute bottom-gutter right-gutter z-10">
      <span className="font-hud-label text-hud-label text-on-surface-variant opacity-50">Version 0513d</span>
      </div>
    </>
  );
}
