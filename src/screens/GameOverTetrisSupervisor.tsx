// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu } from "lucide-react";


export type GameOverTetrisSupervisorActionId = "play-again-1" | "return-to-menu-2";

export interface GameOverTetrisSupervisorProps {
  actions?: Partial<Record<GameOverTetrisSupervisorActionId, () => void>>;
}

export function GameOverTetrisSupervisor({ actions }: GameOverTetrisSupervisorProps) {
  return (
    <>
      {/* Nav Shell Suppressed due to "Transactional/Success/Game Over" state */}
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-xl">
      {/* Game Over Header */}
      <div className="text-center space-y-sm">
      <h1 className="text-display-lg font-display-lg text-[#F43F5E] error-glow uppercase tracking-tighter">GAME OVER</h1>
      <p className="text-body-base font-body-base text-on-surface-variant">Supervisor intervention required.</p>
      </div>
      {/* High Score Chip */}
      <div className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-full flex items-center gap-2 border border-tertiary-fixed">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="text-button-text font-button-text">NEW HIGH SCORE</span>
      </div>
      {/* Stats Summary Bento Grid */}
      <div className="w-full grid grid-cols-2 gap-sm">
      {/* Final Score */}
      <div className="col-span-2 bg-surface-container-low border-t border-primary rounded px-md py-sm flex flex-col gap-xs neon-glow">
      <span className="text-hud-label font-hud-label text-primary">FINAL SCORE</span>
      <span className="text-display-lg font-display-lg text-on-surface">1,459,200</span>
      </div>
      {/* Lines Cleared */}
      <div className="col-span-1 bg-surface-container border-t border-primary rounded px-md py-sm flex flex-col gap-xs">
      <span className="text-hud-label font-hud-label text-primary">LINES</span>
      <span className="text-hud-value font-hud-value text-on-surface">142</span>
      </div>
      {/* Level Reached */}
      <div className="col-span-1 bg-surface-container border-t border-primary rounded px-md py-sm flex flex-col gap-xs">
      <span className="text-hud-label font-hud-label text-primary">LEVEL</span>
      <span className="text-hud-value font-hud-value text-on-surface">15</span>
      </div>
      {/* Time Elapsed */}
      <div className="col-span-2 bg-surface-container border-t border-primary rounded px-md py-sm flex flex-col gap-xs items-center justify-center">
      <span className="text-hud-label font-hud-label text-primary">TIME ELAPSED</span>
      <span className="text-hud-value font-hud-value text-on-surface">12:45.33</span>
      </div>
      </div>
      {/* Actions */}
      <div className="w-full flex flex-col gap-sm mt-md">
      {/* Primary Action */}
      <button className="w-full min-h-touch-target-min bg-surface text-primary border border-primary hover:neon-glow transition-colors rounded flex items-center justify-center gap-sm group" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle className="group-hover:rotate-180 transition-transform duration-300" aria-hidden={true} focusable="false" />
      <span className="text-button-text font-button-text">Play Again</span>
      </button>
      {/* Secondary Action */}
      <button className="w-full min-h-touch-target-min bg-surface text-on-surface border border-outline-variant hover:border-primary transition-colors rounded flex items-center justify-center gap-sm" type="button" data-action-id="return-to-menu-2" onClick={actions?.["return-to-menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      <span className="text-button-text font-button-text">Return to Menu</span>
      </button>
      </div>
      </main>
    </>
  );
}
