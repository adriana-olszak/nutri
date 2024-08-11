/**
 * This function tokenizes a given text string.
 * It splits the text into an array of tokens, optionally removing spaces.
 * The tokens can be words, numbers, or punctuation marks.
 * @param text - The text string to be tokenized.
 * @param removeSpaces - Whether to remove spaces from the tokens.
 * @returns An array of tokens.
 */
export function tokenize(text: string, removeSpaces = true): string[] {
  if (!text) {
    return [];
  }

  const tokenizer = /([a-zÀ-ÿ-]+|[0-9._]+|.|!|\?|'|"|:|;|,|-)/i;
  const dirtyTokens = text.split(tokenizer);
  return dirtyTokens.filter(
    (token) => token !== '' && (!removeSpaces || token !== ' ')
  );
}
