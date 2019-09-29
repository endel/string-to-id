import assert from "assert";
import stringid from "../src";

describe("stringid", () => {

  it("should be deterministic", () => {
    assert.equal(stringid("someId"), stringid("someId"));
    assert.equal(stringid("someId"), 16326);
  });

  it("max number limit", () => {
    let longId = "";
    for (let i = 0; i < 1000; i++) { // who will ever need an identifier higher than this? ¯\_(ツ)_/¯
      longId += "z";
    }
    assert.ok(stringid(longId) < Number.MAX_SAFE_INTEGER);
  });

  it("shouldn't collide", () => {
    console.log({
      someId: stringid("someId"),
      collision: stringid("aohr08Id")
    });

    assert.notEqual(stringid("someId"), stringid("anotherId"));
  });

});