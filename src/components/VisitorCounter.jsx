import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { API_URL } from '@/config/api';

function generateVisitorId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getStoredVisitorId() {
  try {
    let visitorId = localStorage.getItem('portfolio_visitor_id');
    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem('portfolio_visitor_id', visitorId);
    }
    return visitorId;
  } catch {
    return generateVisitorId();
  }
}

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const visitorId = getStoredVisitorId();

    fetch(`${API_URL}/api/visitor?visitorId=${encodeURIComponent(visitorId)}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (typeof data.count === 'number' && data.count > 0) {
          setCount(data.count);
        }
      })
      .catch(() => {
        // Silently fail: do not show any fake number or broken UI if backend is unconfigured/unavailable
      });

    return () => controller.abort();
  }, []);

  if (count === null) {
    return null;
  }

  return (
    <div
      className="hero-enter hero-enter-late mt-3 sm:mt-4 flex min-h-[44px] w-fit items-center gap-1.5 font-mono text-[0.62rem] sm:text-xs uppercase tracking-[0.15em] text-stone-400/60"
      aria-label={`Visitor count: ${count}`}
    >
      <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.5} aria-hidden="true" />
      <span>Visitors #{new Intl.NumberFormat('en-US').format(count)}</span>
    </div>
  );
}
