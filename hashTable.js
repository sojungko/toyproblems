const makeHashTable = () => {
  let instance = {};
  let storage = [];
  let max = 1000;

  instance.insert = (k, v) => {
    const index = getIndexBelowMaxForKey(k, max);
    storage[index] = storage[index] || [];
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === k) {
        storage[index][i][1] = v;
        return;
      }
    }
    storage[index].push([k, v]);
  }

  instance.retrieve = (k) => {
    const index = getIndexBelowMaxForKey(k, max);
    if (storage[index] !== undefined) {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          return storage[index][i][1];
        }
      }
    }
  }

  instance.remove = (k) => {
    const index = getIndexBelowMaxForKey(k, max);
    if (storage[index] !== undefined) {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          storage[index].splice(i, 1);
        }
      }
    }
  }

  return instance;
}



const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};