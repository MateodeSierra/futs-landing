import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all duration-150 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-app-accent focus-visible:ring-offset-2 focus-visible:ring-offset-app-bg';

const VARIANTS = {
  primary: 'bg-app-accent text-app-bg shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_8px_20px_-6px_rgba(164,214,24,0.45)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_12px_28px_-6px_rgba(164,214,24,0.55)]',
  secondary:
    'bg-app-accent/[0.15] text-app-accent border border-app-accent/40 hover:bg-app-accent/[0.22] hover:-translate-y-0.5 font-semibold',
};

export default function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
