/**
 * Alphanumeric:
 * - 48~57
 * - 65~90
 * - 97~122
 * - 95 (_)
 * - 45 (-)
 *
 * Invalid ranges:
 * - 58~64
 * - 91~93
 *
 * Inspiration: http://www.cse.yorku.ca/~oz/hash.html
 */

 // 64 valid digits
const VALID = [
  // a-z
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,

  // A-Z
  // 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,

  // 0-9
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57,

  // -
  45,

  // _
  95,
];
const SIZE = VALID.length;

// 64 first prime numbers
const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311];

function hash(string: string) {
  let str = string.toLowerCase();
  let len = str.length;
  let i = -1;

  let id = 0;

  while (++i < len) {
    const charCode = str.charCodeAt(i);
    const index = VALID.indexOf(charCode) + 1;
    // id = (id << 5) + id + (index * i) + VALID.length * index;
    // console.log({ index, prime: PRIME_NUMBERS[index], pow: Math.pow(PRIME_NUMBERS[index], i + 1) });
    id += PRIME_NUMBERS[index] * (SIZE - 1) ^ (i - 1);
  }

  return Math.floor(id);
}

export default hash;
