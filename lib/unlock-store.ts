import { UNLOCK_STORAGE_KEY } from './constants';

type Listener = () => void;
const listeners = new Set<Listener>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

export function subscribeUnlock(listener: Listener) {
  listeners.add(listener);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === UNLOCK_STORAGE_KEY || !e.key) {
      listener();
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', handleStorage);
  }

  return () => {
    listeners.delete(listener);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorage);
    }
  };
}

export function getUnlockSnapshot(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    return localStorage.getItem(UNLOCK_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function getUnlockServerSnapshot(): boolean {
  return false;
}

export function setUnlockStorage(unlocked: boolean) {
  if (typeof window !== 'undefined') {
    try {
      if (unlocked) {
        localStorage.setItem(UNLOCK_STORAGE_KEY, 'true');
      } else {
        localStorage.removeItem(UNLOCK_STORAGE_KEY);
      }
    } catch {
      // safe fallback
    }
    emitChange();
  }
}
