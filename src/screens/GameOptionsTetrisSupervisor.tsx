// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options - Tetris Supervisor
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings } from "lucide-react";


export type GameOptionsTetrisSupervisorActionId = "button-1-1" | "button-2-2" | "reset-to-defaults-3" | "save-and-close-4";

export interface GameOptionsTetrisSupervisorProps {
  actions?: Partial<Record<GameOptionsTetrisSupervisorActionId, () => void>>;
}

export function GameOptionsTetrisSupervisor({ actions }: GameOptionsTetrisSupervisorProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-md h-[76px] bg-surface-dim dark:bg-surface-dim border-b border-outline-variant flat no shadows docked full-width md:pl-[calc(16rem+16px)]">
      <div className="text-headline-md font-headline-md font-extrabold text-primary tracking-tighter">Tetris Supervisor</div>
      <div className="flex items-center gap-sm">
      <button aria-label="settings" className="h-touch-target-min w-touch-target-min flex items-center justify-center text-primary font-bold hover:text-primary transition-colors active:scale-95 transition-transform duration-100 rounded-full" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help" className="h-touch-target-min w-touch-target-min flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded-full" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="help" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-64 py-lg px-md bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant flat no shadows z-40 docked h-full left-0">
      <div className="mb-xl px-4">
      <h2 className="text-headline-md font-headline-md font-bold text-primary truncate">Tetris Supervisor</h2>
      <p className="text-hud-label font-hud-label text-on-surface-variant mt-1">Rank: Grandmaster</p>
      </div>
      <div className="flex flex-col gap-2 flex-1">
      <a className="h-touch-target-min flex items-center gap-md text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-colors rounded-lg" href="#">
      <Circle  data-icon="dashboard" aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Dashboard</span>
      </a>
      <a className="h-touch-target-min flex items-center gap-md text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-colors rounded-lg" href="#">
      <Circle  data-icon="model_training" aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Training</span>
      </a>
      <a className="h-touch-target-min flex items-center gap-md text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-colors rounded-lg" href="#">
      <Circle  data-icon="history" aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">History</span>
      </a>
      <a className="h-touch-target-min flex items-center gap-md text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-colors rounded-lg" href="#">
      <Circle  data-icon="group" aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Social</span>
      </a>
      <a className="h-touch-target-min flex items-center gap-md text-on-surface-variant pl-4 hover:bg-surface-container-highest transition-colors rounded-lg" href="#">
      <Circle  data-icon="support_agent" aria-hidden={true} focusable="false" />
      <span className="text-body-base font-body-base">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-gutter py-xl">
      <h1 className="text-display-lg font-display-lg text-on-surface mb-xl">Settings</h1>
      {/* Audio Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg mb-lg">
      <div className="border-t border-primary pt-2 mb-md">
      <h2 className="text-hud-label font-hud-label text-primary uppercase tracking-widest">Audio</h2>
      </div>
      <div className="flex flex-col gap-lg">
      {/* Music Volume */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center h-touch-target-min">
      <label className="text-body-base font-body-base text-on-surface" htmlFor="music-volume">Music Volume</label>
      <span className="text-hud-value font-hud-value text-primary">80%</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-full appearance-none outline-none accent-primary cursor-pointer" id="music-volume" max="100" min="0" type="range" value="80" />
      </div>
      {/* SFX Volume */}
      <div className="flex flex-col gap-sm">
      <div className="flex justify-between items-center h-touch-target-min">
      <label className="text-body-base font-body-base text-on-surface" htmlFor="sfx-volume">SFX Volume</label>
      <span className="text-hud-value font-hud-value text-primary">100%</span>
      </div>
      <input className="w-full h-2 bg-surface-container-highest rounded-full appearance-none outline-none accent-primary cursor-pointer" id="sfx-volume" max="100" min="0" type="range" value="100" />
      </div>
      </div>
      </section>
      {/* Gameplay Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg mb-lg">
      <div className="border-t border-primary pt-2 mb-md">
      <h2 className="text-hud-label font-hud-label text-primary uppercase tracking-widest">Gameplay</h2>
      </div>
      <div className="flex flex-col gap-md">
      {/* Ghost Piece */}
      <div className="flex justify-between items-center h-touch-target-min">
      <span className="text-body-base font-body-base text-on-surface">Ghost Piece</span>
      <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-end">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[10px] after:left-[calc(100%-42px)] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant"></div>
      </label>
      </div>
      {/* Starting Level */}
      <div className="flex justify-between items-center h-touch-target-min">
      <label className="text-body-base font-body-base text-on-surface" htmlFor="starting-level">Starting Level</label>
      <div className="relative">
      <select className="bg-surface border border-outline-variant text-hud-value font-hud-value text-primary h-touch-target-min pl-md pr-xl rounded outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer" id="starting-level">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option selected={true} value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select>
      <Circle  data-icon="arrow_drop_down" className="absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Instant Drop */}
      <div className="flex justify-between items-center h-touch-target-min">
      <span className="text-body-base font-body-base text-on-surface">Instant Drop</span>
      <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-end">
      <input className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[10px] after:left-[calc(100%-42px)] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Interface Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg mb-xl">
      <div className="border-t border-primary pt-2 mb-md">
      <h2 className="text-hud-label font-hud-label text-primary uppercase tracking-widest">Interface</h2>
      </div>
      <div className="flex flex-col gap-md">
      {/* Show Touch Controls */}
      <div className="flex justify-between items-center h-touch-target-min">
      <span className="text-body-base font-body-base text-on-surface">Show Touch Controls</span>
      <label className="relative inline-flex items-center cursor-pointer min-h-[44px] min-w-[44px] justify-end">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[10px] after:left-[calc(100%-42px)] after:bg-on-surface after:border-outline-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-md pb-xl">
      <button className="flex-1 bg-surface-dim border border-outline-variant text-on-surface h-touch-target-min rounded font-button-text text-button-text hover:bg-surface-container-highest transition-colors flex items-center justify-center" type="button" data-action-id="reset-to-defaults-3" onClick={actions?.["reset-to-defaults-3"]}>
                      Reset to Defaults
                  </button>
      <button className="flex-1 bg-surface-dim border border-primary text-primary h-touch-target-min rounded font-button-text text-button-text shadow-[0_0_10px_rgba(76,215,246,0.4)] hover:shadow-[0_0_15px_rgba(76,215,246,0.6)] hover:bg-primary/10 transition-colors flex items-center justify-center" type="button" data-action-id="save-and-close-4" onClick={actions?.["save-and-close-4"]}>
                      Save &amp; Close
                  </button>
      </div>
      </main>
      {/* BottomNavBar (Visible on Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-sm bg-surface-container dark:bg-surface-container border-t border-outline-variant flat no shadows docked full-width">
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-colors min-h-[44px]" href="#">
      <Circle  data-icon="sports_esports" aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-colors min-h-[44px]" href="#">
      <Circle  data-icon="analytics" aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-container-highest transition-colors min-h-[44px]" href="#">
      <Circle  data-icon="leaderboard" aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Leaderboard</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 hover:bg-surface-container-highest transition-colors scale-90 transition-colors duration-150 min-h-[44px]" href="#">
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      <span className="text-hud-label font-hud-label mt-1">Settings</span>
      </a>
      </nav>
    </>
  );
}
