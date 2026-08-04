import { getRank } from './rank.js';

const STORAGE_KEY = 'toolGameLeaderboard';
const MAX_ENTRIES = 50;

/** 讀取排行榜，回傳依秒數由小到大排序的陣列 */
export function loadLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('[leaderboard] 讀取失敗:', e);
    return [];
  }
}

/** 新增一筆紀錄，存回 localStorage，回傳排序後的完整清單 */
export function addLeaderboardEntry(name, seconds) {
  const entries = loadLeaderboard();
  entries.push({
    name: name && name.trim() ? name.trim() : '匿名',
    seconds,
    rank: getRank(seconds),
  });

  entries.sort((a, b) => a.seconds - b.seconds);
  const trimmed = entries.slice(0, MAX_ENTRIES);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch (e) {
    console.error('[leaderboard] 儲存失敗:', e);
  }

  return trimmed;
}
