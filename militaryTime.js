const toMilitary = time => {
  if (time.substr(-2) === 'pm') {
    let processed = time.split('').slice(0, -2).join('').split(':');
    if (processed[0] !== '12') {
      processed[0] = +processed[0] + 12;
    }
    return processed.join(':');
  }
  if (time.substr(-2) === 'am') {
    let processed = time.split('').slice(0, -2).join('').split(':');
    if (processed[0].length === 1) {
      processed[0] = '0' + processed[0];
    } else if (processed[0] === '12') {
      processed[0] = '00';
    }
    return processed.join(':');

  }
  return time
}

/*

pm
- add 12 to the hour
- remove pm
- join by ':'

am
- check if hour is two digits
  - if not, concatenate 0 in front
- remove am
- join by ':'

if neither
- return as is


*/