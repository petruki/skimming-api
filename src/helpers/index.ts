export default function getBool(
  value: string | null,
  _default: boolean,
): boolean {
  if (value === null || value === '') {
    return _default;
  }

  if (value === 'true') {
    return true;
  }

  return false;
}
