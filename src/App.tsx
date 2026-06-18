import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { EmpezarGratis } from './components/EmpezarGratis';
import { Filosofia } from './components/Filosofia';
import { QuienSoy } from './components/QuienSoy';
import { EscaleraValor } from './components/EscaleraValor';
import { Cierre } from './components/Cierre';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main id="top" className="min-h-screen bg-cream text-soft">
        <Hero />
        <EmpezarGratis />
        <Filosofia />
        <QuienSoy />
        <EscaleraValor />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
