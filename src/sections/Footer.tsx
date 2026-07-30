import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Container from '../components/ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-app-border bg-app-bg">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-8">
        <Logo />
        <p className="text-xs text-app-muted/60">© 2026 FUTS. Uruguay.</p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="/privacy"
            className="rounded text-[13px] text-app-muted transition-colors hover:text-app-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
          >
            Política de privacidad
          </Link>
          <Link
            to="/terms"
            className="rounded text-[13px] text-app-muted transition-colors hover:text-app-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
          >
            Términos de uso
          </Link>
          <Link
            to="/delete-account"
            className="rounded text-[13px] text-app-muted transition-colors hover:text-app-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
          >
            Eliminar cuenta
          </Link>
          <a
            href="mailto:support@futs.app"
            className="rounded text-[13px] text-app-muted transition-colors hover:text-app-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
          >
            support@futs.app
          </a>
        </div>
      </Container>
    </footer>
  );
}
