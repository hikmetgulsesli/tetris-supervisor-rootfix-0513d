// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home, Play } from "lucide-react";


export type PauseOverlayTetrisSupervisorActionId = "resume-1" | "restart-2" | "main-menu-3";

export interface PauseOverlayTetrisSupervisorProps {
  actions?: Partial<Record<PauseOverlayTetrisSupervisorActionId, () => void>>;
}

export function PauseOverlayTetrisSupervisor({ actions }: PauseOverlayTetrisSupervisorProps) {
  return (
    <>
      {/* FAUX BACKGROUND: Dimmed & Blurred Game Board Context */}
      {/* This provides the "dimmed score" and contextual background requested */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-25 blur-[6px] pointer-events-none scale-105 transition-colors duration-300">
      {/* 3-Column Desktop Grid Setup */}
      <div className="flex gap-lg h-[819px] max-h-[800px] w-full max-w-4xl px-md">
      {/* Left Column: Hold & Stats */}
      <div className="hidden md:flex flex-col gap-md w-32 shrink-0">
      {/* HUD Module: HOLD */}
      <div className="bg-surface-container border-t border-primary p-sm min-h-[120px]">
      <h3 className="font-hud-label text-hud-label text-on-surface-variant uppercase">Hold</h3>
      <div className="mt-sm h-16 w-full bg-surface-variant rounded flex items-center justify-center">
      {/* Faux block shape */}
      <div className="w-8 h-8 bg-tertiary rounded-sm opacity-50"></div>
      </div>
      </div>
      {/* Spacer */}
      <div className="flex-grow"></div>
      {/* HUD Module: SCORE */}
      <div className="bg-surface-container border-t border-primary p-sm">
      <h3 className="font-hud-label text-hud-label text-on-surface-variant uppercase">Score</h3>
      <p className="font-hud-value text-hud-value text-primary mt-xs text-right tracking-tight">042,950</p>
      </div>
      {/* HUD Module: LEVEL */}
      <div className="bg-surface-container border-t border-primary p-sm">
      <h3 className="font-hud-label text-hud-label text-on-surface-variant uppercase">Level</h3>
      <p className="font-hud-value text-hud-value text-on-surface mt-xs text-right">12</p>
      </div>
      </div>
      {/* Center Column: Playfield */}
      <div className="flex-grow max-w-[400px] mx-auto bg-surface border-2 border-outline-variant relative overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 tetris-grid opacity-30"></div>
      {/* Faux blocks at bottom of well */}
      <div className="w-full h-[30%] bg-surface-container-highest border-t border-outline relative z-10">
      <div className="absolute bottom-0 left-[10%] w-[20%] h-[20%] bg-primary opacity-60"></div>
      <div className="absolute bottom-0 right-[20%] w-[30%] h-[40%] bg-secondary opacity-60"></div>
      <div className="absolute bottom-[20%] left-[30%] w-[40%] h-[20%] bg-tertiary opacity-60"></div>
      </div>
      {/* Faux falling block */}
      <div className="absolute top-[30%] left-[40%] w-[20%] h-[10%] border-2 border-primary bg-primary/20 neon-bloom-primary z-20"></div>
      </div>
      {/* Right Column: Next Queue */}
      <div className="hidden md:flex flex-col gap-md w-32 shrink-0">
      {/* HUD Module: NEXT */}
      <div className="bg-surface-container border-t border-primary p-sm h-[300px]">
      <h3 className="font-hud-label text-hud-label text-on-surface-variant uppercase">Next</h3>
      <div className="flex flex-col gap-sm mt-sm">
      <div className="h-16 w-full bg-surface-variant rounded flex items-center justify-center">
      <div className="w-12 h-4 bg-primary rounded-sm opacity-50"></div>
      </div>
      <div className="h-12 w-full bg-surface-dim rounded flex items-center justify-center">
      <div className="w-8 h-8 bg-secondary rounded-sm opacity-30"></div>
      </div>
      <div className="h-12 w-full bg-surface-dim rounded flex items-center justify-center">
      <div className="w-8 h-8 bg-error rounded-sm opacity-30"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* PAUSE OVERLAY (Foreground) */}
      {/* Full screen backdrop with heavy tint and slight blur */}
      <div className="absolute inset-0 z-50 bg-background/85 backdrop-blur-sm flex flex-col items-center justify-center px-gutter">
      {/* Centered Modal Container */}
      <div className="w-full max-w-sm flex flex-col items-center">
      {/* Title */}
      <div className="mb-xl text-center">
      <h1 className="font-display-lg text-display-lg text-primary tracking-widest uppercase drop-shadow-[0_0_12px_rgba(76,215,246,0.5)]">
                          Paused
                      </h1>
      <div className="h-1 w-24 bg-primary mx-auto mt-xs neon-bloom-primary rounded-full"></div>
      </div>
      {/* Action Buttons Menu */}
      <div className="flex flex-col gap-sm w-full">
      {/* Large Primary 'Resume' Button */}
      <button className="group relative flex items-center justify-center h-14 bg-surface border border-primary text-primary font-button-text text-button-text uppercase tracking-widest rounded-DEFAULT overflow-hidden transition-colors duration-200 hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] neon-bloom-primary mb-md" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="mr-sm text-xl" aria-hidden={true} focusable="false" />
                          Resume
                          {/* Interaction highlight */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors pointer-events-none"></div>
      </button>
      {/* Secondary 'Restart' Button */}
      <button className="flex items-center justify-center h-touch-target-min bg-surface-container-low border border-outline-variant text-on-surface font-button-text text-button-text uppercase tracking-widest rounded-DEFAULT transition-colors duration-200 hover:bg-surface-bright hover:border-outline hover:text-white active:scale-[0.98]" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle className="mr-sm text-lg" aria-hidden={true} focusable="false" />
                          Restart
                      </button>
      {/* Secondary 'Main Menu' Button */}
      <button className="flex items-center justify-center h-touch-target-min bg-surface-container-low border border-outline-variant text-on-surface font-button-text text-button-text uppercase tracking-widest rounded-DEFAULT transition-colors duration-200 hover:bg-surface-bright hover:border-outline hover:text-white active:scale-[0.98]" type="button" data-action-id="main-menu-3" onClick={actions?.["main-menu-3"]}>
      <Home className="mr-sm text-lg" aria-hidden={true} focusable="false" />
                          Main Menu
                      </button>
      </div>
      {/* Quick Stats (Optional context while paused) */}
      <div className="mt-xl pt-lg border-t border-outline-variant w-full flex justify-between px-md opacity-60">
      <div className="flex flex-col items-start">
      <span className="font-hud-label text-hud-label text-on-surface-variant">CURRENT SCORE</span>
      <span className="font-hud-value text-hud-value text-on-surface">042,950</span>
      </div>
      <div className="flex flex-col items-end">
      <span className="font-hud-label text-hud-label text-on-surface-variant">TIME PLAYED</span>
      <span className="font-hud-value text-hud-value text-on-surface">12:45</span>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
