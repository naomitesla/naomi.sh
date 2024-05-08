import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ConsoleOutput from './components/Console/ConsoleOutput';
import FooterParticles from './components/Particles/Particles';


export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ConsoleOutput />
      </main>
      <footer>
        <FooterParticles />
      </footer>
    </>
  );
}
