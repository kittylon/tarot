import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const FEATURES = [
  {
    to: '/draw',
    icon: '🃏',
    title: 'Draw a Card',
    desc: 'Let fate choose a single card for guidance and reflection.',
  },
  {
    to: '/spreads',
    icon: '✦',
    title: 'Read a Spread',
    desc: 'Lay the Celtic Cross or a three-card spread for deeper insight.',
  },
  {
    to: '/gallery',
    icon: '📖',
    title: 'Browse the Deck',
    desc: 'Explore all 78 cards of the Tarot de Marseille with their meanings.',
  },
  {
    to: '/journal',
    icon: '📓',
    title: 'Daily Journal',
    desc: 'Record your daily draws and build a personal reading practice.',
  },
];

function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.005 + 0.002,
    }));

    let raf;
    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        const alpha = 0.15 + 0.6 * (0.5 + 0.5 * Math.sin(t * s.speed * 1000 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${alpha.toFixed(2)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="home-stars"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}

export default function Home() {
  return (
    <div className="home-hero">
      <Stars />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Tarot de Marseille</h1>
        <p className="home-subtitle">
          Ancient wisdom through the cards of Jean Dodal — draw, reflect, and discover.
        </p>

        <hr className="divider" style={{ width: '200px' }} />

        <div className="home-cards">
          {FEATURES.map(f => (
            <Link key={f.to} to={f.to} className="home-feature-card">
              <span className="home-feature-icon">{f.icon}</span>
              <span className="home-feature-title">{f.title}</span>
              <span className="home-feature-desc">{f.desc}</span>
            </Link>
          ))}
        </div>

        <p style={{
          marginTop: '3rem',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          maxWidth: '480px',
          textAlign: 'center',
          lineHeight: 1.7,
          fontStyle: 'italic',
        }}>
          Card images from the Jean Dodal Tarot (Lyon, c. 1701–1715), restored by Jean-Claude Flornoy.
          Public domain via Wikimedia Commons.
        </p>
      </div>
    </div>
  );
}
