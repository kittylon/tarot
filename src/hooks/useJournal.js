import { useState, useCallback } from 'react';

const STORAGE_KEY = 'tarot-journal-v1';
const VERSION = 1;

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { version: VERSION, entries: [] };
    const parsed = JSON.parse(raw);
    if (parsed.version !== VERSION) return { version: VERSION, entries: [] };
    return parsed;
  } catch {
    return { version: VERSION, entries: [] };
  }
}

function save(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.warn('tarot: could not save to localStorage');
  }
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function useJournal() {
  const [journal, setJournal] = useState(load);

  const update = useCallback((updater) => {
    setJournal(prev => {
      const next = updater(prev);
      save(next);
      return next;
    });
  }, []);

  const todayEntry = journal.entries.find(e => e.date === todayStr()) ?? null;

  const addEntry = useCallback((cardId, isReversed) => {
    const today = todayStr();
    if (journal.entries.some(e => e.date === today)) return;
    const entry = {
      id: Date.now().toString(),
      date: today,
      cardId,
      isReversed,
      notes: '',
      createdAt: Date.now(),
    };
    update(prev => ({ ...prev, entries: [entry, ...prev.entries] }));
  }, [journal.entries, update]);

  const updateNotes = useCallback((entryId, notes) => {
    update(prev => ({
      ...prev,
      entries: prev.entries.map(e => e.id === entryId ? { ...e, notes } : e),
    }));
  }, [update]);

  const deleteEntry = useCallback((entryId) => {
    update(prev => ({
      ...prev,
      entries: prev.entries.filter(e => e.id !== entryId),
    }));
  }, [update]);

  return { entries: journal.entries, todayEntry, addEntry, updateNotes, deleteEntry };
}
