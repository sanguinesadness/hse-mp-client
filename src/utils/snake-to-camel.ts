export function snakeToCamel(obj: Record<string, any>): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => snakeToCamel(item));
  } else if (obj !== null && typeof obj === 'object') {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = key.replace(/_([a-z])/g, (_, letter) =>
          letter.toUpperCase()
        );
        newObj[newKey] = snakeToCamel(obj[key]);
      }
    }
    return newObj;
  }
  return obj;
}
