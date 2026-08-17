import { Link } from 'react-router-dom';
import HeaderLogo from '../components/HeaderLogo';
import Container from '../components/ui/Container';

export default function Navbar() {
  return (
    <nav className="border-b border-app-border bg-app-bg/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" aria-label="FUTS — Inicio" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent">
          <HeaderLogo />
        </Link>
        <a
          href="mailto:support@futs.app"
          className="text-sm text-app-muted transition-colors hover:text-app-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-app-accent"
        >
          Contacto
        </a>
      </Container>
    </nav>
  );
}
