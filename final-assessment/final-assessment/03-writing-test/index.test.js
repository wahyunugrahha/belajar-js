import { sum } from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("should add correctly", () => {
  const a = 1;
  const b = 2;

  const result = sum(a, b);

  const expectedResult = 3;
  assert.equal(result, expectedResult);
});
