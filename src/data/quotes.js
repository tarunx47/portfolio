/**
 * Rotating Quotes Configuration
 * ──────────────────────────────
 * Add your own quotes to the array below.
 * Each quote should have a `text` and `author` property.
 *
 * Example:
 *   { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
 *
 * The footer will display one random quote per page load.
 * If this array is empty, the quote section will not be rendered.
 */
export const QUOTES = [
  {
    text: " 读万卷书，行万里路。",
    author: "",
  },
  {
    text: "三十年河东，三十年河西。",
    author: "",
  },
  {
    text: "There is an old idea older than philosophy that a man is a city, inside him there are citizens, rulers, criminals, children, prophets, and fools. Most men live in a city with no king. Whichever citizen shouts loudest that hour makes the laws.",
    author: "",
  },

];

/**
 * Returns a random quote from the QUOTES array.
 * Returns null if the array is empty.
 */
export function getRandomQuote() {
  if (QUOTES.length === 0) return null;
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
