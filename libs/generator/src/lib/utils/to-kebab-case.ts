export function toKebabCase(str: string): string {
  return str
    // Replace any non-word characters (except hyphens) with a space
    .replace(/[^\w-]+/g, ' ')
    // Replace underscores with spaces
    .replace(/_/g, ' ')
    // Replace uppercase letters with a space followed by the lowercase letter
    .replace(/([A-Z])/g, ' $1')
    // Trim any leading or trailing spaces
    .trim()
    // Replace multiple spaces with a single hyphen
    .replace(/\s+/g, '-')
    // Replace multiple hyphens with a single hyphen
    .replace(/-+/g, '-')
    .toLowerCase();
}
