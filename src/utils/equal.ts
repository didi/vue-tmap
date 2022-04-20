function equalPolygonGeometry<T>(
  a: TMap.PolygonGeometry<T>,
  b: TMap.PolygonGeometry<T>,
): boolean {
  if (a.id !== b.id) {
    return false;
  }
  if (a.styleId !== b.styleId) {
    return false;
  }
  if (a.rank !== b.rank) {
    return false;
  }
  if (a.paths.length === b.paths.length) {
    if (JSON.stringify(a.paths) !== JSON.stringify(b.paths)) {
      return false;
    }
  } else {
    return false;
  }
  if (a.properties !== undefined && b.properties !== undefined) {
    type KeysType = keyof T;
    const aPropertyKeys = Object.keys(a.properties) as KeysType[];
    const bPropertyKeys = Object.keys(b.properties) as KeysType[];

    if (aPropertyKeys.length !== bPropertyKeys.length) {
      return false;
    }
    // properties 只做一层深度的比较
    for (let i = aPropertyKeys.length - 1; i >= 0; i -= 1) {
      const key = aPropertyKeys[i];
      if (a.properties[key] !== b.properties[key]) {
        return false;
      }
    }
  } else if (a.properties !== b.properties) {
    return false;
  }
  return true;
}

// eslint-disable-next-line import/prefer-default-export
export { equalPolygonGeometry };
