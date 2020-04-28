export default function getBool(value: any, _default: boolean): boolean {

  if (value === null || value === "") {
    return _default;
  }

  if (value === "true") {
    return true;
  }

  return false;
}
