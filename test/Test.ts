import assert from "assert";
import strtoid from "../src";

let uniqueIds: {[n: number]: string} = {};
let collisions: number = 0;
let total: number = 0;
function collisionCheck(s: string) {
  const id = strtoid(s);
  total++;

  if (uniqueIds[id]) {
    collisions++;
    console.error(`${s} collided with ${uniqueIds[id]}`);
    // throw new Error(`${s} shouldn't collide with ${uniqueIds[id]}`);

  } else {
    uniqueIds[id] = s;
  }
}

describe("stringid", () => {

  it("should be deterministic", () => {
    assert.equal(strtoid("someId"), strtoid("someId"));
    assert.equal(strtoid("someId"), 2883);
    // assert.equal(strtoid("someId"), 16326);
  });

  it("max number limit", () => {
    let longId = "";

    for (let i = 0; i < 10000; i++) { // who will ever need an identifier higher than this? ¯\_(ツ)_/¯
      longId += "z";
    }

    assert.ok(strtoid(longId) < Number.MAX_SAFE_INTEGER);
  });

  it("should consider only lowercase characters", () => {
    assert.equal(strtoid("HELLO WORLD"), strtoid("hello world"));
  });

  it("shouldn't collide", () => {
    const comparisons: {[key: string]: string} = {
      "01": "10",
      "ab": "ba",
      "ba": "ac",
      "BABABA" : "ababab",
      "ababab" : "bababa",
      "aO": "WW",
      "WW": "aW",
    };

    for (let left in comparisons) {
      const right = comparisons[left];

      assert.notEqual(strtoid(left), strtoid(right), `'${left}' shouldn't collide with '${right}'`);
    }
  });

  xit("bruteforce", function () {
    this.timeout(Infinity);

    const CHARS = 'abcdefghijklmnopqrstuvxyzw1234567890_-'; // ABCDEFGHIJKLMNOPQRSTUVXYZW
    const MAX_STRING_LENGTH = 5;

    function createFor(d: string, q: number, cb: any) {
      var a = d.split('');
      var f = '';//inicio dos fors
      var f1 = '';//parte final dos fors
      var ni = '';//n contadores
      var fc = '';//fors completos
      for (var i = 0; i < q; i++) {
        f += 'for(var i' + i + ' = 0; i' + i + ' < a.length; i' + i + '++){';
        if (i > 0) { ni += '+'; }
        ni += 'a[i' + i + ']';
        f1 += '}';
      }
      fc = f + cb + '(' + ni + ')' + f1;
      eval(fc);
    }

    createFor(CHARS, MAX_STRING_LENGTH, 'collisionCheck');
    assert.equal(0, collisions, `${collisions} collided out of ${total} strings.`);
  });

});