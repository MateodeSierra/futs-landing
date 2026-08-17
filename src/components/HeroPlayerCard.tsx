import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { TIER_GRADIENT } from '../data/ranks';
import placeholderAvatar from '../assets/player-placeholder.png';

// Shield silhouette ported verbatim from futs-app/src/components/PlayerCard.constants.ts
// (CARD_PATH, viewBox 0 0 267.3 427.3) — same cookie-cutter shape the real player card uses.
const CARD_PATH =
  'M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-0.2-1.1-0.4-2.3-0.4-3.4' +
  ' 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-11.6A257.3 257.3 0 0 0 133.7 0a254.9 254.9 0 0 0-67.1' +
  ' 8.7 170 170 0 0 0-31 11.6c-0.8 0.4-1.8 0.6-1.8 1.9 0 1.1-0.2 2.3-0.4 3.4a32.4 32.4 0 0 1-13.7' +
  ' 22.9A33.8 33.8 0 0 1 2 53.9c-1.5 0.1-2.1 0.4-2 2v293.9c0 3.3 0 6.6 0.4 9.9a22 22 0 0 0 7.9' +
  ' 14.4c3.8 3.2 8.3 5.3 13 6.8 12.4 3.9 24.8 7.5 37.2 11.5a388.7 388.7 0 0 1 50 19.4' +
  ' 88.7 88.7 0 0 1 25 15.5c7.2-7 16.1-11.3 25-15.5a427 427 0 0 1 50-19.4l37.2-11.5c4.7-1.5' +
  ' 9.1-3.5 13-6.8 4.5-3.8 7.2-8.5 7.9-14.4 0.4-3.3 0.4-3.3 0.4-9.9V231.6V60.5v-4.6c0.4-1.6-0.3-1.9-1.7-2z';

const TIER_COLOR = '#8b5cf6'; // TIER_COLOR.DIAMOND — the showcase tier
const TIER_GRAD = TIER_GRADIENT.DIAMOND;

const STATS = [
  { val: '24', lbl: 'PJ' },
  { val: '18', lbl: 'V' },
  { val: '4', lbl: 'D' },
  { val: '75%', lbl: 'W%' },
  { val: '2', lbl: 'E' },
  { val: '9', lbl: 'MVP' },
];

/**
 * Hero showcase — a simplified web recreation of the real app's PlayerCard
 * (same shield path and tier gradient) so the landing's "premium" centerpiece
 * is drawn from the actual product, not a stock mockup. Mouse-move tilt
 * echoes the app's gyroscope tilt; both are skipped for prefers-reduced-motion.
 */
export default function HeroPlayerCard() {
  const reduced = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 200, damping: 22 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRotateY.set(px * 18);
    rawRotateX.set(-py * 18);
  }

  function handleMouseLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-[220px] sm:w-[260px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={reduced ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <svg viewBox="0 0 267.3 427.3" className="block w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)]">
          <defs>
            <linearGradient id="hero-card-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={TIER_GRAD[0]} />
              <stop offset="1" stopColor={TIER_GRAD[1]} />
            </linearGradient>
            <linearGradient id="hero-card-shimmer" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" stopOpacity="0.35" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="hero-card-clip">
              <path d={CARD_PATH} />
            </clipPath>
          </defs>

          <path d={CARD_PATH} fill="#141414" />
          <path d={CARD_PATH} fill="url(#hero-card-fill)" fillOpacity={0.92} />

          {!reduced && (
            <g clipPath="url(#hero-card-clip)">
              <g transform="rotate(-25 133 213)">
                <motion.rect
                  y={-200}
                  width={90}
                  height={900}
                  fill="url(#hero-card-shimmer)"
                  animate={{ x: [-160, 420] }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 2.4, ease: 'easeInOut' }}
                />
              </g>
            </g>
          )}

          <path d={CARD_PATH} fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth={9} />
          <path d={CARD_PATH} fill="none" stroke={TIER_COLOR} strokeWidth={4.5} opacity={0.95} />
          <path d={CARD_PATH} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} />

          <line x1={16} y1={231} x2={251} y2={231} stroke="rgba(255,255,255,0.14)" strokeWidth={1} />
        </svg>

        {/* Content is anchored by top-% (not stretched flex) so nothing pushes into
            the shield's tapering bottom point — that's what overflowed before.
            Info/image proportions (30%/70% width, bottom-aligned to the divider)
            mirror futs-app's PlayerCard.tsx (infoW/imgW/imgH vs. TOP_H). */}
        <div className="pointer-events-none absolute inset-0" style={{ transform: 'translateZ(30px)' }}>
          <div className="absolute left-0 right-0 flex items-end" style={{ top: '13.5%', height: '40.5%' }}>
            <div className="flex h-full w-[30%] flex-col items-center justify-end pb-2">
              <span className="text-[22px] font-black leading-none text-white">2450</span>
              <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-white/55">MMR</span>
            </div>
            <div
              className="ml-auto mr-[3%] h-full w-[66%] overflow-hidden border-[3px]"
              style={{ borderColor: TIER_COLOR, backgroundColor: `${TIER_COLOR}26` }}
            >
              <img src={placeholderAvatar} alt="" className="h-full w-full object-cover object-top" />
            </div>
          </div>

          <div className="absolute left-0 right-0 flex flex-col items-center px-6" style={{ top: '60%' }}>
            <span className="text-[13px] font-black uppercase tracking-wide text-white">Jugador</span>
            <div className="mt-3 grid w-full grid-cols-3 gap-x-2 gap-y-2.5">
              {STATS.map((s) => (
                <div key={s.lbl} className="text-center">
                  <div className="text-[14px] font-black text-white">{s.val}</div>
                  <div className="text-[7.5px] font-bold uppercase tracking-wider text-white/50">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
