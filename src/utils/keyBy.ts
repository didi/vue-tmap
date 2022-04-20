interface Dictionary<T> {
  [key: string]: T;
}

function keyBy<T>(collection: T[], iteratee: keyof T): Dictionary<T> {
  return collection.reduce((result, value) => {
    const key = (value[iteratee] as unknown) as string;
    // eslint-disable-next-line no-param-reassign
    result[key] = value;
    return result;
  }, {} as Dictionary<T>);
}
export default keyBy;
