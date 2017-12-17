const crypto = require('crypto');
const secret = 'yzbqklnj';

function findHashWithZeroes (secret, zeroes, num = 0) {
  let target = '', firstFive = '', hash;
  for (let i = 1; i <= zeroes; i++) target += '0';
  while (true) {
    hash = crypto.createHash('md5')
      .update(secret + String(num))
      .digest('hex');
    firstFive = hash.slice(0, zeroes);
    if (firstFive === target) return num;
    else num++;
  }
}

const fiveZeros = findHashWithZeroes(secret, 5);
console.log(fiveZeros);  // 282749
const sixZeros = findHashWithZeroes(secret, 6, fiveZeros);
console.log(sixZeros);  // 9962624