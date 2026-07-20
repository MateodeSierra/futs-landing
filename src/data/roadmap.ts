/** Ported verbatim (trimmed for landing length) from futs-app/src/screens/HomeScreen.tsx's NEWS array — keep in sync if that changes. Never merge these into features.ts. */
export interface RoadmapItem {
  icon: string;
  title: string;
  status: string;
  description: string;
}

export const ROADMAP: RoadmapItem[] = [
  {
    icon: '🏆',
    title: 'Se viene la Primera Temporada',
    status: 'Próximamente',
    description: '6 meses de competencia y grandes premios. El primer puesto se lleva una camiseta de la selección firmada por Valverde, Bentancur, De la Cruz, Darwin Núñez y otros — y hay más premios para los que se destaquen.',
  },
  {
    icon: '👥',
    title: 'Partidos rankeados por equipo',
    status: 'En desarrollo',
    description: 'Una nueva forma de jugar: partidos rankeados en equipo con tu grupo de siempre. Vas a necesitar tener tu rango ya establecido, así que asegurate de completar tu calibración antes de que llegue.',
  },
];
