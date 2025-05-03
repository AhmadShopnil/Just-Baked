export const splitTitle = (title) => {
  const words = title.split("  "); // Split title into words
  if (words.length > 1) {
    return [words[0], words.slice(1).join(" ")]; // Return first word, and the rest of the words
  }
  return [title]; // Return the whole title if it's just one word
};
