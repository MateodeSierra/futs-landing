import type { ReactNode } from 'react';

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

export const PRIVACY_UPDATED = '5 de septiembre de 2026';

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: '1. Responsable del tratamiento',
    body: (
      <p>
        <strong>FUTS</strong> es el responsable del tratamiento de tus datos personales. Para cualquier consulta relacionada con
        privacidad, podés contactarnos en <a href="mailto:support@futs.app">support@futs.app</a>.
      </p>
    ),
  },
  {
    heading: '2. Datos que recolectamos',
    body: (
      <>
        <h3>Al crear tu cuenta</h3>
        <ul>
          <li>
            <strong>Correo electrónico</strong> — para autenticación e identificación.
          </li>
          <li>
            <strong>Número de teléfono</strong> — verificado por SMS para confirmar tu identidad. No es visible para otros
            jugadores.
          </li>
          <li>
            <strong>Nombre de display</strong> — visible públicamente dentro de la app.
          </li>
        </ul>
        <h3>Verificación de identidad (datos de rostro)</h3>
        <ul>
          <li>
            <strong>Foto de perfil</strong> — al crear tu cuenta te pedimos una foto de tu cara (tomada con la cámara o elegida de
            tu galería). Esa foto se almacena de forma segura en Firebase Storage (Google) y se usa como tu foto de perfil visible
            para otros jugadores dentro de la plataforma.
          </li>
          <li>
            <strong>Detección de rostro</strong> — al subir esa foto, la enviamos una única vez a la API DetectFaces de Amazon
            Rekognition (AWS), que analiza la imagen para confirmar que contiene un rostro humano real (con al menos 90% de
            confianza) y previene cuentas falsas o fotos que no son de una persona. Este análisis es puntual y sin estado:
            Rekognition no crea ni guarda una plantilla facial, huella biométrica ni ningún identificador facial de tu cara, y no
            la compara contra ninguna base de datos de rostros — únicamente detecta si hay un rostro en la imagen que le enviamos.
            AWS no retiene la imagen ni el resultado del análisis una vez respondida la solicitud.
          </li>
          <li>
            <strong>Retención y eliminación</strong> — la foto se conserva en Firebase Storage mientras tu cuenta esté activa. Si
            solicitás la eliminación de tu cuenta, la foto se borra de forma permanente de Firebase Storage al finalizar el plazo
            descripto en la sección 6.
          </li>
        </ul>
        <h3>Actividad dentro de la app</h3>
        <ul>
          <li>
            <strong>Historial de partidos</strong> — partidos jugados, resultados votados, equipos.
          </li>
          <li>
            <strong>MMR y rango</strong> — tu puntuación de habilidad y categoría actual.
          </li>
          <li>
            <strong>Estadísticas</strong> — partidos jugados, victorias, derrotas, MVP, empates.
          </li>
          <li>
            <strong>Disponibilidad horaria</strong> — días y franjas horarias que configurás voluntariamente.
          </li>
          <li>
            <strong>Votos de calibración</strong> — evaluaciones de rendimiento post-partido entre jugadores.
          </li>
        </ul>
        <h3>Datos técnicos</h3>
        <ul>
          <li>Token de dispositivo para notificaciones push (Expo Notifications / FCM).</li>
          <li>Logs de acceso y errores de la aplicación.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '3. Cómo usamos tus datos',
    body: (
      <ul>
        <li>Verificar tu identidad y prevenir cuentas falsas o múltiples cuentas por persona.</li>
        <li>Mostrarte y asignarte a partidos de tu nivel de rango.</li>
        <li>Calcular tu MMR y posición en la tabla de clasificación.</li>
        <li>Enviarte notificaciones sobre partidos, resultados y novedades de la plataforma.</li>
        <li>Resolver disputas sobre resultados de partidos.</li>
        <li>Mejorar la plataforma a partir de datos de uso agregados y anónimos.</li>
      </ul>
    ),
  },
  {
    heading: '4. Con quién compartimos tus datos',
    body: (
      <>
        <p>
          No vendemos ni cedemos tus datos personales a terceros con fines comerciales. Compartimos datos únicamente con los
          siguientes proveedores de servicios, en la medida estrictamente necesaria:
        </p>
        <ul>
          <li>
            <strong>Google Firebase</strong> (autenticación, almacenamiento de fotos, base de datos).
          </li>
          <li>
            <strong>Amazon Web Services</strong> (detección de rostro en tu foto de verificación mediante AWS Rekognition —
            ver sección 2 para más detalle sobre qué hace y qué no hace este análisis).
          </li>
          <li>
            <strong>Twilio</strong> (envío y verificación del código SMS que confirma tu número de teléfono).
          </li>
          <li>
            <strong>MercadoPago</strong> (procesamiento de pagos cuando comprás fichas; no accedemos ni almacenamos los datos de
            tu tarjeta, que son manejados directamente por MercadoPago).
          </li>
          <li>
            <strong>Railway</strong> (infraestructura del servidor backend).
          </li>
        </ul>
        <p>Todos estos proveedores actúan como encargados del tratamiento bajo acuerdos de confidencialidad.</p>
      </>
    ),
  },
  {
    heading: '5. Qué datos ven otros usuarios',
    body: (
      <>
        <p>Dentro de la app, otros jugadores pueden ver:</p>
        <ul>
          <li>Tu nombre de display.</li>
          <li>Tu foto de perfil.</li>
          <li>Tu rango (tier y división).</li>
          <li>Tus estadísticas públicas (PJ, victorias, derrotas, W%, empates, MVP).</li>
        </ul>
        <p>
          Tu <strong>número de teléfono</strong> y tu <strong>correo electrónico</strong> nunca son visibles para otros jugadores.
        </p>
      </>
    ),
  },
  {
    heading: '6. Retención de datos',
    body: (
      <p>
        Conservamos tus datos mientras tu cuenta esté activa. Si solicitás la eliminación de tu cuenta, tenés 14 días para
        arrepentirte iniciando sesión de nuevo; pasado ese plazo, borramos de forma permanente tus datos personales —incluida tu
        foto de perfil/verificación— excepto cuando debamos conservar cierta información por obligaciones legales o para resolver
        disputas pendientes sobre partidos ya jugados.
      </p>
    ),
  },
  {
    heading: '7. Tus derechos',
    body: (
      <>
        <p>Tenés derecho a:</p>
        <ul>
          <li>
            <strong>Acceder</strong> a los datos personales que tenemos sobre vos.
          </li>
          <li>
            <strong>Rectificar</strong> datos incorrectos o desactualizados.
          </li>
          <li>
            <strong>Solicitar la eliminación</strong> de tu cuenta y datos asociados.
          </li>
          <li>
            <strong>Oponerte</strong> al tratamiento de tus datos en determinadas circunstancias.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, escribinos a <a href="mailto:support@futs.app">support@futs.app</a>.
        </p>
      </>
    ),
  },
  {
    heading: '8. Seguridad',
    body: (
      <p>
        Implementamos medidas técnicas y organizativas para proteger tus datos, incluyendo transmisión cifrada (HTTPS/TLS),
        almacenamiento seguro en Firebase y control de acceso con autenticación de Firebase. Sin embargo, ningún sistema es 100%
        seguro.
      </p>
    ),
  },
  {
    heading: '9. Menores de edad',
    body: (
      <p>
        FUTS no está dirigido a menores de 13 años. No recolectamos intencionalmente datos de menores. Si tomás conocimiento de
        que un menor nos ha proporcionado datos sin autorización, contactanos para eliminarlos.
      </p>
    ),
  },
  {
    heading: '10. Cambios a esta política',
    body: (
      <p>
        Podemos actualizar esta política en cualquier momento. Si los cambios son significativos, te notificaremos por la app. La
        fecha de la última actualización siempre está visible al inicio de este documento.
      </p>
    ),
  },
];
