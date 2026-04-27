import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar    from './components/Navbar';
import Starfield from './components/Starfield';
import Home     from './pages/Home';
import Gallery  from './pages/Gallery';
import Spreads  from './pages/Spreads';
import Journal   from './pages/Journal';
export default function App() {
  return (
    <BrowserRouter>
      <Starfield />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/spreads" element={<Spreads />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
