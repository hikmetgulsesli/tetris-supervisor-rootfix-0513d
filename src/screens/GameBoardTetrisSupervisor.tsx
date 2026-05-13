// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, Circle, Pause, RotateCw, Settings } from "lucide-react";


export type GameBoardTetrisSupervisorActionId = "button-1-1" | "button-2-2" | "pause-3" | "restart-4";

export interface GameBoardTetrisSupervisorProps {
  actions?: Partial<Record<GameBoardTetrisSupervisorActionId, () => void>>;
}

export function GameBoardTetrisSupervisor({ actions }: GameBoardTetrisSupervisorProps) {
  return (
    <>
      {/* Top App Bar (From Shared Components) */}
      <header className="bg-surface-dim border-b border-outline-variant fixed top-0 w-full z-50 flex justify-between items-center px-md h-touch-target-min">
      <div className="text-headline-md font-headline-md font-extrabold text-primary tracking-tighter">Tetris Supervisor</div>
      <div className="flex gap-sm">
      <button className="h-touch-target-min w-touch-target-min flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:scale-95 duration-100" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target-min w-touch-target-min flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:scale-95 duration-100" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Side Navigation (From Shared Components) */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 py-lg px-md bg-surface-container-low border-r border-outline-variant pt-[calc(44px+24px)] z-40">
      <div className="mb-xl px-sm">
      <h2 className="text-headline-md font-headline-md font-bold text-primary mb-xs">Tetris Supervisor</h2>
      <p className="text-body-base text-on-surface-variant">Rank: Grandmaster</p>
      </div>
      <ul className="flex flex-col gap-sm">
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg hover:bg-surface-container-highest transition-colors text-on-surface-variant pl-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg hover:bg-surface-container-highest transition-colors text-primary font-bold border-l-4 border-primary pl-2 opacity-80" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Training</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg hover:bg-surface-container-highest transition-colors text-on-surface-variant pl-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">History</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg hover:bg-surface-container-highest transition-colors text-on-surface-variant pl-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Social</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-sm px-sm py-sm rounded-lg hover:bg-surface-container-highest transition-colors text-on-surface-variant pl-4" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Support</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center pt-touch-target-min pb-[80px] lg:pl-64 h-screen relative">
      <div className="flex flex-row items-stretch justify-center gap-md w-full max-w-4xl px-md relative">
      {/* Left Sidebar (Hold, Stats) */}
      <aside className="flex flex-col gap-md w-24 sm:w-32 justify-start mt-xl shrink-0">
      {/* Hold Piece Module */}
      <div className="bg-[#111827] border-t border-primary p-xs flex flex-col items-center rounded-DEFAULT">
      <span className="text-hud-label font-hud-label text-on-surface-variant uppercase w-full text-left mb-sm">Hold</span>
      <div className="w-16 h-16 bg-[#0F172A] border border-[#334155] rounded-DEFAULT flex items-center justify-center">
      {/* Empty slot */}
      </div>
      </div>
      {/* Stats Module */}
      <div className="bg-[#111827] border-t border-primary p-sm flex flex-col rounded-DEFAULT">
      <span className="text-hud-label font-hud-label text-on-surface-variant uppercase mb-xs">Level</span>
      <span className="text-hud-value font-hud-value text-primary text-right">15</span>
      </div>
      <div className="bg-[#111827] border-t border-primary p-sm flex flex-col rounded-DEFAULT">
      <span className="text-hud-label font-hud-label text-on-surface-variant uppercase mb-xs">Lines</span>
      <span className="text-hud-value font-hud-value text-primary text-right">142</span>
      </div>
      </aside>
      {/* Center Playfield */}
      <div className="relative flex-shrink-0">
      {/* Game Board 10x20 Grid */}
      <div className="w-[200px] h-[400px] sm:w-[250px] sm:h-[500px] md:w-[300px] md:h-[600px] bg-[#111827] border-2 border-[#334155] relative grid-bg overflow-hidden mx-auto shadow-2xl">
      {/* Falling 'T' Piece (Purple) */}
      <div className="absolute top-[20%] left-[40%] w-[30%] h-[10%] flex flex-col">
      <div className="flex justify-center h-1/2 w-full">
      <div className="w-1/3 h-full bg-purple-500 neon-glow-t"></div>
      </div>
      <div className="flex h-1/2 w-full">
      <div className="w-1/3 h-full bg-purple-500 neon-glow-t"></div>
      <div className="w-1/3 h-full bg-purple-500 neon-glow-t"></div>
      <div className="w-1/3 h-full bg-purple-500 neon-glow-t"></div>
      </div>
      </div>
      {/* Example Stacked Pieces */}
      <div className="absolute bottom-0 left-0 w-full h-[15%] flex flex-col justify-end">
      <div className="flex h-1/3 w-full">
      <div className="w-[10%] h-full bg-blue-600 border border-blue-400"></div>
      <div className="w-[10%] h-full bg-blue-600 border border-blue-400"></div>
      <div className="w-[10%] h-full"></div>
      <div className="w-[10%] h-full bg-yellow-500 border border-yellow-300"></div>
      <div className="w-[10%] h-full bg-yellow-500 border border-yellow-300"></div>
      <div className="w-[10%] h-full"></div>
      <div className="w-[10%] h-full"></div>
      <div className="w-[10%] h-full bg-green-500 border border-green-300"></div>
      <div className="w-[10%] h-full bg-green-500 border border-green-300"></div>
      <div className="w-[10%] h-full bg-green-500 border border-green-300"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Sidebar (Next, Score) */}
      <aside className="flex flex-col gap-md w-24 sm:w-32 justify-start mt-xl shrink-0">
      {/* Next Piece Module */}
      <div className="bg-[#111827] border-t border-primary p-xs flex flex-col items-center rounded-DEFAULT">
      <span className="text-hud-label font-hud-label text-on-surface-variant uppercase w-full text-left mb-sm">Next</span>
      <div className="w-16 h-16 bg-[#0F172A] border border-[#334155] rounded-DEFAULT flex items-center justify-center">
      {/* Cyan 'I' Piece */}
      <div className="flex w-full h-1/4 px-1">
      <div className="w-1/4 h-full bg-cyan-400 neon-glow-i"></div>
      <div className="w-1/4 h-full bg-cyan-400 neon-glow-i"></div>
      <div className="w-1/4 h-full bg-cyan-400 neon-glow-i"></div>
      <div className="w-1/4 h-full bg-cyan-400 neon-glow-i"></div>
      </div>
      </div>
      </div>
      {/* Score Module */}
      <div className="bg-[#111827] border-t border-primary p-sm flex flex-col rounded-DEFAULT">
      <span className="text-hud-label font-hud-label text-on-surface-variant uppercase mb-xs">Score</span>
      <span className="text-hud-value font-hud-value text-primary text-right">048,250</span>
      </div>
      <div className="bg-[#111827] border-t border-primary p-sm flex flex-col rounded-DEFAULT">
      <span className="text-hud-label font-hud-label text-on-surface-variant uppercase mb-xs">High</span>
      <span className="text-hud-value font-hud-value text-on-surface-variant text-right">999,999</span>
      </div>
      </aside>
      </div>
      {/* Touch Controls Overlay (Visible primarily on mobile/small screens, but requested for testing) */}
      <div className="absolute bottom-24 left-0 w-full px-md flex justify-between items-center lg:hidden opacity-50 pointer-events-none">
      <div className="flex gap-sm">
      <div className="w-16 h-16 rounded-full border-2 border-[#334155] flex items-center justify-center">
      <ArrowLeft className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-16 h-16 rounded-full border-2 border-[#334155] flex items-center justify-center">
      <ArrowDown className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-16 h-16 rounded-full border-2 border-[#334155] flex items-center justify-center">
      <ArrowRight className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex gap-sm">
      <div className="w-16 h-16 rounded-full border-2 border-[#334155] flex items-center justify-center">
      <Circle className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-16 h-16 rounded-full border-2 border-[#334155] flex items-center justify-center">
      <RotateCw className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </main>
      {/* Bottom Navigation (From Shared Components) */}
      <nav className="bg-surface-container fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-sm border-t border-outline-variant lg:hidden">
      <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 hover:bg-surface-container-highest transition-colors scale-90 duration-150" href="#">
      <Circle  data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Leaderboard</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-colors" href="#">
      <Settings aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Settings</span>
      </a>
      </nav>
      {/* Action Bar (Desktop Bottom Right) */}
      <div className="fixed bottom-lg right-lg hidden lg:flex gap-sm z-40">
      <button className="h-touch-target-min px-lg bg-surface border border-outline-variant text-on-surface rounded-DEFAULT flex items-center gap-xs hover:border-primary transition-colors" type="button" data-action-id="pause-3" onClick={actions?.["pause-3"]}>
      <Pause className="text-sm" aria-hidden={true} focusable="false" />
      <span className="text-button-text font-button-text">Pause</span>
      </button>
      <button className="h-touch-target-min px-lg bg-surface border border-outline-variant text-on-surface rounded-DEFAULT flex items-center gap-xs hover:border-primary transition-colors" type="button" data-action-id="restart-4" onClick={actions?.["restart-4"]}>
      <Circle className="text-sm" aria-hidden={true} focusable="false" />
      <span className="text-button-text font-button-text">Restart</span>
      </button>
      </div>
    </>
  );
}
