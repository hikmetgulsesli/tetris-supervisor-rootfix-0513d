// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, MousePointerClick, RotateCw } from "lucide-react";


export type ControlsHelpTetrisSupervisorActionId = "back-1";

export interface ControlsHelpTetrisSupervisorProps {
  actions?: Partial<Record<ControlsHelpTetrisSupervisorActionId, () => void>>;
}

export function ControlsHelpTetrisSupervisor({ actions }: ControlsHelpTetrisSupervisorProps) {
  return (
    <>
      {/* Main Container */}
      <main className="w-full max-w-5xl bg-surface border-2 border-outline-variant rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-lg border-b-2 border-outline-variant bg-surface-container-low">
      <h1 className="text-headline-md font-headline-md text-primary tracking-tight">How to Play</h1>
      <button className="flex items-center justify-center gap-sm h-touch-target-min px-md bg-surface border border-outline-variant rounded hover:bg-surface-container-highest hover:border-primary transition-colors group" type="button" data-action-id="back-1" onClick={actions?.["back-1"]}>
      <ArrowLeft className="text-on-surface-variant group-hover:text-primary transition-colors text-[20px]" aria-hidden={true} focusable="false" />
      <span className="text-button-text font-button-text text-on-surface-variant group-hover:text-primary transition-colors uppercase">Back</span>
      </button>
      </header>
      {/* Content Area */}
      <div className="p-lg lg:p-xl flex flex-col gap-xl">
      {/* Goal Section */}
      <section className="bg-surface-container-low border-l-4 border-primary p-md lg:p-lg rounded-r">
      <div className="flex items-start gap-md">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-[32px] mt-1" aria-hidden={true} focusable="false" />
      <div>
      <h2 className="text-hud-label font-hud-label text-primary uppercase mb-xs">The Goal</h2>
      <p className="text-body-base font-body-base text-on-surface">
                                  Survive and score by dropping tetrominoes to complete solid horizontal lines. Cleared lines vanish, granting points and pushing back the rising stack. The game ends when the blocks breach the top of the playfield.
                              </p>
      </div>
      </div>
      </section>
      {/* Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
      {/* Column 1: Keyboard */}
      <section className="flex flex-col gap-md">
      <h3 className="text-hud-label font-hud-label text-on-surface-variant uppercase border-b border-outline-variant pb-xs">Keyboard Controls</h3>
      <ul className="flex flex-col gap-sm">
      {/* Move */}
      <li className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high transition-colors rounded">
      <span className="text-body-base font-body-base text-on-surface">Move Left / Right</span>
      <div className="flex gap-xs">
      <kbd className="h-[32px] min-w-[32px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
      <ArrowLeft className="text-[18px]" aria-hidden={true} focusable="false" />
      </kbd>
      <kbd className="h-[32px] min-w-[32px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
      <ArrowRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </kbd>
      </div>
      </li>
      {/* Rotate */}
      <li className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high transition-colors rounded">
      <span className="text-body-base font-body-base text-on-surface">Rotate Clockwise</span>
      <kbd className="h-[32px] min-w-[32px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
      <ArrowUp className="text-[18px]" aria-hidden={true} focusable="false" />
      </kbd>
      </li>
      {/* Soft Drop */}
      <li className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high transition-colors rounded">
      <span className="text-body-base font-body-base text-on-surface">Soft Drop</span>
      <kbd className="h-[32px] min-w-[32px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
      <ArrowDown className="text-[18px]" aria-hidden={true} focusable="false" />
      </kbd>
      </li>
      {/* Hard Drop (Highlight) */}
      <li className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high transition-colors rounded border border-primary/30">
      <span className="text-body-base font-body-base text-primary font-bold">Hard Drop</span>
      <kbd className="h-[32px] min-w-[64px] px-md flex items-center justify-center bg-primary/10 border border-primary border-b-2 rounded text-hud-label font-hud-label text-primary neon-glow">
                                      SPACE
                                  </kbd>
      </li>
      {/* Hold */}
      <li className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high transition-colors rounded">
      <span className="text-body-base font-body-base text-on-surface">Hold Piece</span>
      <div className="flex gap-xs items-center">
      <kbd className="h-[32px] min-w-[32px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
                                          C
                                      </kbd>
      <span className="text-hud-label font-hud-label text-on-surface-variant">or</span>
      <kbd className="h-[32px] min-w-[48px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
                                          SHIFT
                                      </kbd>
      </div>
      </li>
      {/* Pause */}
      <li className="flex items-center justify-between p-sm bg-surface-container hover:bg-surface-container-high transition-colors rounded">
      <span className="text-body-base font-body-base text-on-surface">Pause Game</span>
      <kbd className="h-[32px] min-w-[32px] px-xs flex items-center justify-center bg-surface-bright border-b-2 border-outline rounded text-hud-label font-hud-label text-on-surface shadow-sm">
                                      P
                                  </kbd>
      </li>
      </ul>
      </section>
      {/* Column 2: Touch */}
      <section className="flex flex-col gap-md">
      <h3 className="text-hud-label font-hud-label text-on-surface-variant uppercase border-b border-outline-variant pb-xs">Touch Controls</h3>
      <div className="grid grid-cols-2 gap-md h-full">
      {/* Tap to Rotate */}
      <div className="bg-surface-container rounded border border-outline-variant flex flex-col items-center justify-center p-md aspect-square text-center">
      <div className="relative w-16 h-16 flex items-center justify-center mb-sm">
      <MousePointerClick className="text-[48px] text-primary" aria-hidden={true} focusable="false" />
      <RotateCw className="text-[24px] text-tertiary absolute top-0 right-0 animate-spin-slow" aria-hidden={true} focusable="false" />
      </div>
      <span className="text-button-text font-button-text text-on-surface block mb-xs">Tap</span>
      <span className="text-hud-label font-hud-label text-on-surface-variant block">To Rotate</span>
      </div>
      {/* Swipe to Move */}
      <div className="bg-surface-container rounded border border-outline-variant flex flex-col items-center justify-center p-md aspect-square text-center">
      <div className="w-16 h-16 flex items-center justify-center mb-sm">
      <Circle className="text-[48px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <span className="text-button-text font-button-text text-on-surface block mb-xs">Swipe L/R</span>
      <span className="text-hud-label font-hud-label text-on-surface-variant block">To Move Piece</span>
      </div>
      {/* Swipe Down */}
      <div className="bg-surface-container rounded border border-outline-variant flex flex-col items-center justify-center p-md aspect-square text-center">
      <div className="w-16 h-16 flex items-center justify-center mb-sm">
      <Circle className="text-[48px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <span className="text-button-text font-button-text text-on-surface block mb-xs">Swipe Down</span>
      <span className="text-hud-label font-hud-label text-on-surface-variant block">Soft Drop</span>
      </div>
      {/* Hard Drop (Flick) */}
      <div className="bg-surface-container rounded border border-primary/50 flex flex-col items-center justify-center p-md aspect-square text-center neon-glow">
      <div className="w-16 h-16 flex items-center justify-center mb-sm relative">
      <Circle className="text-[48px] text-primary" aria-hidden={true} focusable="false" />
      <MousePointerClick  style={{fontVariationSettings: "'FILL' 1"}} className="text-[24px] text-surface-dim absolute bottom-2" aria-hidden={true} focusable="false" />
      </div>
      <span className="text-button-text font-button-text text-primary block mb-xs">Flick Down</span>
      <span className="text-hud-label font-hud-label text-primary block">Hard Drop</span>
      </div>
      </div>
      </section>
      </div>
      </div>
      </main>
    </>
  );
}
