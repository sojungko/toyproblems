const deepEquals = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'number' || typeof a === 'string' || typeof a === 'boolean' || typeof a === 'undefined') {
    return a === b;
  }

  if (a === null && b !== null || a !== null && b === null) {
    return false;
  }

  if (Array.isArray(a) && !Array.isArray(b) || !Array.isArray(a) && Array.isArray(b)) {
    return false;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    let asorted = a.sort();
    let bsorted = b.sort();
    for (let i = 0; i < asorted.length; i++) {
      if (!deepEquals(asorted[i], bsorted[i])) {
        return false;
      }
    }
    return true;
  }

  if (!deepEquals(Object.keys(a), Object.keys(b))) {
    return false;
  }

  for (prop in a) {
    if (!deepEquals(a[prop], b[prop])) {
      return false;
    }
  }
  return true;

}