import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Home     from './pages/Home';
import Gallery  from './pages/Gallery';
import Draw     from './pages/Draw';
import Spreads  from './pages/Spreads';
import Journal  from './pages/Journal';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/gallery"         element={<Gallery />} />
        <Route path="/gallery/:cardId" element={<Gallery />} />
        <Route path="/draw"            element={<Draw />} />
        <Route path="/spreads"         element={<Spreads />} />
        <Route path="/journal"         element={<Journal />} />
        <Route path="*"                element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
