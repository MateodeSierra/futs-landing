import type { LegalSection } from './privacy-content';

export const TERMS_UPDATED = '25 de junio de 2026';

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: '1. Cuenta y elegibilidad',
    body: (
      <ul>
        <li>Debés tener al menos 13 años para usar FUTS.</li>
        <li>
          <strong>Una cuenta por persona.</strong> Está prohibido crear múltiples cuentas para manipular el sistema de rangos o
          evadir un ban.
        </li>
        <li>Sos responsable de mantener la seguridad de tu cuenta. No compartás tus credenciales.</li>
        <li>La cuenta es personal e intransferible.</li>
      </ul>
    ),
  },
  {
    heading: '2. Verificación de identidad',
    body: (
      <ul>
        <li>Para jugar partidos rankeados es obligatorio verificar tu número de teléfono y subir una foto de perfil real.</li>
        <li>
          La foto debe mostrar claramente tu rostro. Imágenes falsas, de otra persona o generadas por IA serán rechazadas y
          pueden resultar en ban permanente.
        </li>
        <li>Al verificar tu identidad autorizás el procesamiento de tu foto para reconocimiento facial con fines de verificación de identidad.</li>
      </ul>
    ),
  },
  {
    heading: '3. Partidos y asistencia',
    body: (
      <ul>
        <li>Al confirmar asistencia a un partido se descuentan fichas de tu cuenta. Este cargo es definitivo.</li>
        <li>
          <strong>La inasistencia injustificada</strong> puede resultar en penalidades de MMR y restricciones temporales para
          unirse a partidos.
        </li>
        <li>
          Los resultados se determinan por votación de los jugadores. En caso de disputa, un administrador puede resolver el
          resultado de forma definitiva.
        </li>
        <li>Manipular votos de resultado (acordar votar incorrectamente) está prohibido y puede resultar en ban.</li>
      </ul>
    ),
  },
  {
    heading: '4. Sistema de rangos y MMR',
    body: (
      <ul>
        <li>El MMR se calcula automáticamente en base a resultados y calibración entre jugadores.</li>
        <li>FUTS se reserva el derecho de corregir el MMR de cuentas que hayan obtenido puntos de forma fraudulenta.</li>
        <li>Los rangos son individuales y no transferibles.</li>
      </ul>
    ),
  },
  {
    heading: '5. Conducta',
    body: (
      <>
        <p>Está prohibido:</p>
        <ul>
          <li>Usar lenguaje abusivo, amenazante o discriminatorio dentro de la plataforma.</li>
          <li>Acordar deliberadamente perder partidos para manipular el sistema (match fixing).</li>
          <li>Intentar acceder a cuentas ajenas o vulnerar la seguridad de la plataforma.</li>
          <li>Crear cuentas falsas o usar información de identidad de terceros.</li>
        </ul>
        <p>Las violaciones pueden resultar en suspensión temporal o ban permanente según la gravedad.</p>
      </>
    ),
  },
  {
    heading: '6. Fichas y pagos',
    body: (
      <ul>
        <li>Las fichas son moneda virtual dentro de la plataforma y no tienen valor en dinero real.</li>
        <li>No se realizan reembolsos de fichas una vez consumidas.</li>
        <li>FUTS puede modificar el sistema de fichas con previo aviso a los usuarios.</li>
      </ul>
    ),
  },
  {
    heading: '7. Suspensión y ban',
    body: (
      <ul>
        <li>FUTS puede suspender o eliminar cuentas que violen estos términos, sin previo aviso en casos graves.</li>
        <li>Los bans por múltiples cuentas, fraude de identidad o manipulación de resultados son permanentes.</li>
        <li>
          Podés apelar un ban escribiendo a <a href="mailto:support@futs.app">support@futs.app</a> dentro de los 7 días de la
          sanción.
        </li>
      </ul>
    ),
  },
  {
    heading: '8. Propiedad intelectual',
    body: (
      <p>
        Todo el contenido de la plataforma (diseño, código, marca FUTS, sistema de rangos) es propiedad de FUTS. No podés
        reproducirlo ni usarlo sin autorización escrita.
      </p>
    ),
  },
  {
    heading: '9. Limitación de responsabilidad',
    body: (
      <p>
        FUTS no es responsable de lesiones o incidentes ocurridos durante los partidos físicos. La plataforma conecta jugadores
        pero no organiza ni supervisa los encuentros presencialmente. Cada jugador es responsable de su seguridad.
      </p>
    ),
  },
  {
    heading: '10. Ley aplicable',
    body: (
      <p>
        Estos términos se rigen por la legislación vigente en la República Oriental del Uruguay. Cualquier disputa se someterá a
        los tribunales competentes de Montevideo, Uruguay.
      </p>
    ),
  },
];
