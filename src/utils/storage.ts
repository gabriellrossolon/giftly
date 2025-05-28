import type { Gift } from '../types/Gift';

const STORAGE_KEY = 'giftly_gifts';

export function saveGifts(gifts: Gift[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gifts));
}

export function loadGifts(): Gift[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}