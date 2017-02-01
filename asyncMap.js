const asyncMap = (tasks, callback) => {
  return tasks.reduce((results, curr, i) => {
    results[i] = curr();
    if (++i === tasks.length) {
      return callback(results);
    }
    return results;
  }, [])
}
