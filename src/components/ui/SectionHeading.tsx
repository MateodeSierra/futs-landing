interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/** Splits `title` on `accentWord` so that one word can render in the brand green — matches the emphasis pattern used throughout the old landing's headings. */
export default function SectionHeading({ eyebrow, title, accentWord, subtitle, align = 'left' }: SectionHeadingProps) {
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-app-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold tracking-tight text-app-text sm:text-4xl">
        {accentWord ? (
          <>
            {parts[0]}
            <span className="text-app-accent">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="mt-3 text-[15px] text-app-secondary">{subtitle}</p>}
    </div>
  );
}
