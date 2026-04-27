import { useEffect, useRef } from 'react';

export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 120; i++) {
      const s = document.createElement('span');
      const size = Math.random() * 2 + 0.5;
      s.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${size}px;
        height:${size}px;
        --d:${2 + Math.random() * 4}s;
        --delay:${-Math.random() * 5}s;
        opacity:${(0.2 + Math.random() * 0.5).toFixed(2)};
      `;
      fragment.appendChild(s);
    }
    container.appendChild(fragment);
    return () => { container.innerHTML = ''; };
  }, []);

  return <div className="stars" ref={ref} aria-hidden="true" />;
}
