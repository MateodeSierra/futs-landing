import type { LegalSection } from './privacy-content';

export const DELETE_ACCOUNT_UPDATED = '29 de julio de 2026';

export const DELETE_ACCOUNT_SECTIONS: LegalSection[] = [
  {
    heading: '1. Eliminar tu cuenta desde la app',
    body: (
      <>
        <p>La forma más rápida de eliminar tu cuenta es directamente desde FUTS:</p>
        <ul>
          <li>
            Abrí la app y entrá a tu <strong>Perfil</strong>.
          </li>
          <li>
            Bajá hasta la sección de cuenta y tocá <strong>"Eliminar cuenta"</strong>.
          </li>
          <li>Confirmá la acción.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '2. Eliminar tu cuenta sin acceso a la app',
    body: (
      <p>
        Si no podés acceder a la app (perdiste tu teléfono, no podés iniciar sesión, etc.), podés solicitar la eliminación de tu
        cuenta escribiendo a <a href="mailto:support@futs.app">support@futs.app</a> desde el correo electrónico asociado a tu
        cuenta. Vamos a confirmar tu identidad y procesar la solicitud manualmente.
      </p>
    ),
  },
  {
    heading: '3. Qué pasa cuando eliminás tu cuenta',
    body: (
      <ul>
        <li>Tu cuenta queda inactiva de inmediato.</li>
        <li>
          Tenés <strong>14 días</strong> para arrepentirte: si volvés a iniciar sesión dentro de ese plazo, la eliminación se
          cancela automáticamente.
        </li>
        <li>Pasados los 14 días, la eliminación es definitiva e irreversible.</li>
      </ul>
    ),
  },
  {
    heading: '4. Qué datos se borran',
    body: (
      <ul>
        <li>Nombre de display.</li>
        <li>Foto de perfil.</li>
        <li>Correo electrónico.</li>
        <li>Número de teléfono.</li>
      </ul>
    ),
  },
  {
    heading: '5. Qué datos se conservan',
    body: (
      <p>
        Tu participación en partidos ya jugados se mantiene en el historial (resultados, equipos, estadísticas agregadas) para no
        afectar el ranking de otros jugadores, pero se desvincula de tu identidad — dejás de aparecer con tu nombre o foto.{' '}
        <strong>Las fichas y el MMR asociados a tu cuenta no son recuperables</strong> una vez completada la eliminación.
      </p>
    ),
  },
];
