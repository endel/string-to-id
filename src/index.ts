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
 */

const VALID = [
  // 0-9
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57,

  // A-Z
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,

  // a-z
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,

  // -
  45,

  // _
  95,
];

function hash(str: string) {
  let len = str.length;
  let i = -1;

  let id = len;

  while (++i < len) {
    const index = VALID.indexOf(str.charCodeAt(i)) + 1;
    id += VALID.length * index;
  }

  return id;
}

export default hash;
