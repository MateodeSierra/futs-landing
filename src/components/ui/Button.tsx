import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const BASE =
  'inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-bold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-accent';

const VARIANTS = {
  primary: 'bg-app-accent text-app-bg hover:opacity-90 hover:-translate-y-0.5',
  secondary:
    'bg-app-accent/[0.15] text-app-accent border border-app-accent/40 hover:bg-app-accent/[0.22] font-semibold',
};

export default function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
