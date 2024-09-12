/**
 * Slices a given text to a specified maximum length and appends an ellipsis if the text exceeds that length.
 *
 * @param {string} text - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced text. Defaults to 50 characters.
 * @returns {string} - The sliced text with an ellipsis added if it exceeds the maximum length.
 */
export function textSlicer(text, max= 100) {
  if (text.length >= max) {
    return `${text.slice(0, max)} ...`;
  } else {
    return text;
  }
}

/**
 * Formats a number by adding commas as thousands separators.
 *
 * @param {number} price - The price to be formatted.
 * @returns {string} - The formatted price with commas as thousands separators.
 */
export function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
