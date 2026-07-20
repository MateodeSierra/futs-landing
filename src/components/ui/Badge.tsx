import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-app-accent/40 bg-app-accent/[0.12] px-4 py-1.5 text-xs font-semibold tracking-wide text-app-accent">
      {children}
    </span>
  );
}
