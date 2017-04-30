const deepEquals = (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }
  /* -- primitives -- */
  if (typeof a === 'string' || typeof a === 'number' || typeof a === 'boolean' || typeof a === 'undefined') {
    return a === b;
  }
  /* -- objects -- */
  if ((a === null && b !== null) || (a !== null && b === null)) {
    return false;
  }
  if ((Array.isArray(a) && !Array.isArray(b)) || (!Array.isArray(a) && Array.isArray(b))) {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    let copyA = a.slice().sort();
    let copyB = b.slice().sort();
    for (let i = 0; i < copyA.length; i++) {
      if (!deepEquals(copyA[i], copyB[i])) {
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
};  
