type RateLimitState = {
  count: number;
  lastRequest: number;
};

const memoryStore = new Map<string, RateLimitState>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 6;

export function rateLimit(key: string) {
  const now = Date.now();
  const current = memoryStore.get(key) ?? { count: 0, lastRequest: 0 };

  if (now - current.lastRequest > WINDOW_MS) {
    memoryStore.set(key, { count: 1, lastRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  const next = { count: current.count + 1, lastRequest: now };
  memoryStore.set(key, next);
  return { allowed: true, remaining: MAX_REQUESTS - next.count };
}
