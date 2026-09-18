/**
 * Creates a random alphanumeric string of a given length.
 *
 * @param {number} length - [optional] The length of the string to generate. Defaults to 6.
 * @returns {string} A random alphanumeric string.
 */
export default function randomAlphaNumericString(length: number = 6): string {
  return (Math.random() + 1).toString(36).substring(2, length + 2);
}
