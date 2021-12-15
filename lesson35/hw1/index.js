export function parseUser(string) {
  try {
    return JSON.parse(string);
  } catch {
    return null;
  }
}
