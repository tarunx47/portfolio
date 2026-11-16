import { useState, useEffect } from "react";
import { getRandomQuote } from "@/data/quotes";

function getKolkataTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date());
}

export default function Footer() {
  const [quote] = useState(() => getRandomQuote());
  const [time, setTime] = useState(() => getKolkataTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getKolkataTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="px-4 py-12 sm:px-8 sm:py-16 w-full flex flex-col items-center text-center overflow-hidden">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center border-t border-stone-200/30 dark:border-stone-800/60 pt-10 sm:pt-14">
        {quote && (
          <div className="flex flex-col items-center gap-3 mb-8 sm:mb-10 max-w-2xl px-4">
            <blockquote className="font-editorial text-xl sm:text-2xl md:text-3xl italic leading-relaxed text-stone-800 dark:text-stone-200">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            {quote.author && (
              <cite className="not-italic font-mono text-[0.68rem] sm:text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                — {quote.author}
              </cite>
            )}
          </div>
        )}

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-editorial text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-stone-800 dark:text-stone-100/90">
            Designed &amp; Developed by{" "}
            <strong className="font-montserrat font-bold not-italic uppercase tracking-widest text-black dark:text-white">Tarun</strong>
          </p>

          <p className="font-vogue text-xs sm:text-sm tracking-wider opacity-70">
            © 2026. All rights reserved.
          </p>

          <p className="font-mono text-[0.68rem] sm:text-xs tracking-widest text-neutral-500 dark:text-neutral-400 pt-1">
            Jaipur, India · {time} GMT+5:30
          </p>
        </div>
      </div>
    </footer>
  );
}
