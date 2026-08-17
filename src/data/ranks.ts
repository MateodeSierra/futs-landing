/**
 * Mirrors futs-app/src/types/index.ts (BaseTier, TIER_COLOR) — single source
 * of truth so this page can't drift from the shipped rank system the way the
 * old static HTML did (it still showed a retired "Hierro" tier with
 * roman-numeral divisions).
 */
export type BaseTier = 'BRONZE' | 'SILVER' | 'GOLD' | 'EMERALD' | 'DIAMOND' | 'MASTER';

export interface RankTier {
  tier: BaseTier;
  label: string;
  color: string;
  /** MASTER has no divisions — players are shown a global leaderboard position instead. */
  divisions: number;
}

export const RANKS: RankTier[] = [
  { tier: 'BRONZE', label: 'Bronce', color: '#c2703a', divisions: 4 },
  { tier: 'SILVER', label: 'Plata', color: '#6b7fa3', divisions: 4 },
  { tier: 'GOLD', label: 'Oro', color: '#c9920a', divisions: 4 },
  { tier: 'EMERALD', label: 'Esmeralda', color: '#10b981', divisions: 4 },
  { tier: 'DIAMOND', label: 'Diamante', color: '#8b5cf6', divisions: 4 },
  { tier: 'MASTER', label: 'Maestro', color: '#ef4444', divisions: 0 },
];

/** Mirrors futs-app TIER_GRADIENT — same diagonal light→dark pair used to fill a rank's PlayerCard face. */
export const TIER_GRADIENT: Record<BaseTier, [string, string]> = {
  BRONZE: ['#c2703a', '#8b4513'],
  SILVER: ['#6b7fa3', '#374766'],
  GOLD: ['#c9920a', '#8a6106'],
  EMERALD: ['#10b981', '#065f46'],
  DIAMOND: ['#8b5cf6', '#5b21b6'],
  MASTER: ['#ef4444', '#7f1d1d'],
};
