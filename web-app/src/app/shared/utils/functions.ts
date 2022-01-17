export function flattenObject(obj: object) {
  const flattenRecursive = (obj: object, propertyMap: Record<string, unknown> = {}) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object') {
        flattenRecursive(value, propertyMap);
      } else {
        propertyMap[key] = value;
      }
    }
    return propertyMap;
  };
  return flattenRecursive(obj);
}
