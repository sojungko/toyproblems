const powerSet = (str) => {
  // Generate array of unique letters
  let letters = Array.from(new Set(str)).sort();
  
  return letters.reduce((acc, curr) => {
    return [...acc, ...acc.map(letter => letter + curr)]
  }, ['']).sort();

}