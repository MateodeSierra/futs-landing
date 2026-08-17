/** Every entry here maps to a real, shipped mechanic — verified against futs-app and futs-backend source, not the roadmap. */
export interface Feature {
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    title: 'MMR real, no un medidor de mentira',
    description: 'Tu rango se calcula con un sistema tipo ELO (probabilidad esperada + factor K) después de cada partido, igual que en un juego competitivo de verdad.',
  },
  {
    title: 'Equipos balanceados por nivel',
    description: 'Antes de cada partido, el sistema arma los dos equipos probando combinaciones para minimizar la diferencia de MMR entre ambos lados.',
  },
  {
    title: 'Identidad verificada de verdad',
    description: 'Verificación de teléfono por SMS y una selfie validada por reconocimiento facial (AWS Rekognition) antes de tu primer partido. Sin cuentas falsas.',
  },
  {
    title: 'Calibración inicial',
    description: 'Tus primeros 5 partidos son de calibración: tus compañeros puntúan tu rendimiento para ubicarte cerca de tu nivel real desde el arranque.',
  },
  {
    title: 'Resultados por votación',
    description: 'Votás el resultado desde tu perspectiva. Con consenso se actualiza el MMR al toque; si no hay acuerdo, un admin resuelve la disputa.',
  },
  {
    title: 'Tu carta de jugador',
    description: 'Una carta estilo FIFA que evoluciona con vos: rango, división y 6 stats en vivo (PJ, victorias, derrotas, W%, empates, MVP).',
  },
];
