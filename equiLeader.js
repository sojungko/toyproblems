const solution = array => {
  let frequency = {};
  array.forEach(el => frequency[el] = !frequency[el] ? 1 : ++frequency[el]);
  for (let i = 0; i < array.length; i++) {
    
  }

}

/*

{ '4': 4, '3': 1, '2': 1 }
leader occurs n/2+ times

i = 0
4
left { '4': 1 } length 1
right { '4': 3, '3': 1, '2': 1 } length 5

i = 1
4, 3
left { '4': 1, '3': 1 }
right { '4': 2, '3': 0, '2': 1 }

i = 2
4, 3, 4
left { '4': 2, '3': 1 }
right { '4': 1, '3': 0, '2': 1 }

i = 3
4, 3, 4, 4
left { '4': 3, '3': 1 }
right { '4': 1, '3': 0, '2': 1 }

i = 4
4, 3, 4, 4, 4
left { '4': 4, '3': 1 }
right { '4': 0, '3': 0, '2': 1 }



*/