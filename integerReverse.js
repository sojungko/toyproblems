const reverseInteger = (n) => {
  let result = 0;

  while (n >= 10) {
    result = result * 10 + n % 10
    n = Math.floor(n / 10);
  }

  return result * 10 + n
}



/*


2342617432


Highest digit becomes lowest digit
1234
4321

1234 % 10 = 4
4

Math.floor(1234 / 10) = 123

123 % 10 = 3
4*10 + 3 = 43

Math.floor(123/10) = 12

12 % 10 = 2
43*10 + 2 = 432

Math.floor(12 / 10) = 1

432 * 10 + 1 = 4321



150

150 % 10 = 0
Math.floor(150 / 10) = 15

15 % 10 = 5
0 * 10 + 5 = 5
Math.floor(15 / 10) = 1
5 * 10 + 1 = 51

43

43 % 10 = 3
Math.floor(43 / 10) = 4

4
3* 10 + 4 = 34

