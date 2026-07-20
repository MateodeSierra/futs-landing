/**
 * Real system constants, not usage/growth metrics — the app has no public
 * launch yet (per futs-app roadmap: no store build), so counting up a fake
 * "10,000+ jugadores" would be dishonest. These are true regardless of how
 * many people have signed up.
 */
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { value: 21, suffix: '', label: 'rangos distintos' },
  { value: 6, suffix: '', label: 'tiers, de Bronce a Maestro' },
  { value: 5, suffix: '', label: 'partidos de calibración inicial' },
  { value: 80, suffix: '%', label: 'de consenso para cerrar un resultado' },
];
