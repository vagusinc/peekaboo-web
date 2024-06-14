export function typedPick<T extends object, U extends Array<keyof T>>(
  obj: T,
  keys: U
) {
  const result = {} as Pick<T, U[number]>;
  for (const key of keys) {
    result[key] = obj[key];
  }
  return result;
}
