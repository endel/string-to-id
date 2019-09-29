import assert from "assert";
import strtoid from "../src";

describe("stringid", () => {

  it("should be deterministic", () => {
    assert.equal(strtoid("someId"), strtoid("someId"));
    assert.equal(strtoid("someId"), 16326);
  });

  it("max number limit", () => {
    let longId = "";
    for (let i = 0; i < 1000; i++) { // who will ever need an identifier higher than this? ¯\_(ツ)_/¯
      longId += "z";
    }
    assert.ok(strtoid(longId) < Number.MAX_SAFE_INTEGER);
  });

  it("shouldn't collide", () => {
    console.log({
      someId: strtoid("someId"),
      collision: strtoid("aohr08Id")
    });

    assert.notEqual(strtoid("someId"), strtoid("anotherId"));
  });

});