const semSort = str => {
  return str.split('\n').map(ver => ver.split('.').map(el => +el))
    .sort((a, b) => b[0] - a[0] || b[1] - a[1] || b[2] - a[2])
    .map(ver => ver.join('.'))
    .join('\n')
}
