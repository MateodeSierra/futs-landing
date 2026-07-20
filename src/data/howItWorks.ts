export interface Step {
  number: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: Step[] = [
  {
    number: '01',
    title: 'Verificate',
    description: 'Confirmás tu teléfono por SMS y subís una selfie que se valida por reconocimiento facial. Un jugador, una cuenta.',
  },
  {
    number: '02',
    title: 'Unite a un partido de tu nivel',
    description: 'Elegís entre los partidos abiertos dentro de tu rango. Los equipos se arman automáticamente balanceados por MMR.',
  },
  {
    number: '03',
    title: 'Confirmá con fichas',
    description: 'Al llenarse el partido, confirmás tu asistencia y se descuentan tus fichas. Si no vas después de confirmar, perdés las fichas y MMR.',
  },
  {
    number: '04',
    title: 'Votá y subí de rango',
    description: 'Después de jugar, votás el resultado desde tu perspectiva. Tu MMR se actualiza y tu carta refleja tu nuevo nivel al instante.',
  },
];
