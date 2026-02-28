import { UI } from '../i18n/ui';

export default function IntentionModal({ lang, onConfirm }) {
  const ui = UI[lang].intention;

  return (
    <div className="intention-overlay">
      <div className="intention-modal">
        <div className="intention-symbol">✦</div>
        <h2 className="intention-title">{ui.title}</h2>
        <p className="intention-message">{ui.message}</p>
        <button className="btn btn-gold" onClick={() => onConfirm('')}>
          {ui.begin}
        </button>
      </div>
    </div>
  );
}
